import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AnimatedPage } from "./Team";
import axios from "axios";
// import { useEffect, useState } from "react";

export const fetchs = async (api) => {
  try {
    const data = await axios.get(api);
    // console.log(data);
    return data.status === 200 ? data.data : [];
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2 min-h-screen bg-black">
      <div className="h-3 w-3 rounded-full bg-white animate-bounce"></div>
      <div
        className="h-3 w-3 rounded-full bg-white animate-bounce"
        style={{ animationDelay: "0.15s" }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-white animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </div>
  );
};

export const ErrorComponent = ({
  message = "Something went wrong !",
  refetch,
}) => {
  // console.log('hello')
  return (
    <div className="flex items-center justify-center min-h-100">
      <div className="bg-zinc-900 border border-red-500/20 rounded-2xl p-6 max-w-md w-full text-center">
        <div className="text-red-400 text-5xl mb-4">⚠️</div>

        <h2 className="text-white text-xl font-semibold mb-2">Oops!</h2>

        <p className="text-zinc-400">{message}</p>

        <button
          onClick={() => {
            refetch();
          }}
          className="mt-5 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 hover:bg-red-500/20 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const Card = ({ post, deletemutate }) => {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300 flex flex-col">
      <p className="text-zinc-400 text-sm">{post.id}</p>

      <h2 className="text-white text-lg font-semibold mb-2 line-clamp-3">
        {post.title}
      </h2>

      <p className="text-zinc-400 text-sm line-clamp-3">{post.body}</p>
      <div className="flex flex-col-2 gap-2 justify-between mt-auto pt-2">
        <button
          onClick={() => deletemutate.mutate(post.id)}
          className=" p-1 bg-white text-black transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white border rounded px-4 py-1.5 w-fit"
        >
          Delete
        </button>
        <button
          onClick={() => deletemutate.mutate(post.id)}
          className=" p-1 bg-white text-black transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white border rounded px-4 py-1.5 w-fit"
        >
          Update
        </button>
      </div>
    </div>
  );
};

const deletepost = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}; // this method is used to delete the posts on the server
export function JsonPlaceHolder() {
  //   const [posts, setPosts] = useState([]);
  // //   const [posts1, setPosts1] = useState([]);
  //   useEffect(() => {
  //     const fetch = async () => {
  //       try {                                                                 old method
  //         const data = await axios.get(
  //           "https://jsonplaceholder.typicode.com/posts/",
  //         );
  //         data.status === 200 ? setPosts(data.data) : [];
  //       } catch (e) {
  //         console.log(e.message);
  //       }
  //     };
  //     fetch();
  //   }, []);
  
  const { data, isLoading, isError, error, refetch, } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchs("https://jsonplaceholder.typicode.com/posts"),
    retry: false,
    gcTime: 10000,
    staleTime: 10000,
    // refetchInterval: 1000,    this is for feching the dtata
    //  refetchOnWindowFocus: false,
  });
  const cachdata = useQueryClient();
  const deletemutate = useMutation({
    mutationFn: (id) => deletepost(id), /// this method deletes the data from the local cach of the browser
    mutationKey: ["posts"],
    onMutate: async (data, idkey) => {
      // 1. Ongoing refetch ko cancel karo
      await cachdata.cancelQueries({
        queryKey: ["posts"],
      });

      // 2. Purana cache save karo
      const previousPosts = cachdata.getQueryData(["posts"]);

      cachdata.setQueriesData(["posts"], (elem) => {
        return elem?.filter((post) => {
          return post.id !== idkey;
        });
      });
        return { previousPosts };
    },
    onSuccess: async () => {console.log('Data Delete successfully!')},
    onError: (err, id, context) => {
    // API fail ho gayi to rollback
      cachdata.setQueryData(
        ["posts"],
        context.previousPosts
      
      );
      console.log('error from on errro componet ')
    },
    onSettled: () => {
    cachdata.invalidateQueries({
      queryKey: ["posts"],

    });
      console.log('catch data seteled')
  },

  });

  // console.log(error);
  return (
    <>
      <AnimatedPage>
        <div className=" bg-black p-8 scroll-smooth overflow-y-auto scrollbar-thumb-amber-950 ">
          <div>
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <ErrorComponent message={error.message} refetch={refetch} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {data?.map((post) => (
                  <Card key={post.id} post={post} deletemutate={deletemutate} />
                ))}
              </div>
            )}
          </div>
        </div>{" "}
      </AnimatedPage>
    </>
  );
}
