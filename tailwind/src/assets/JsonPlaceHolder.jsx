import { useQuery } from "@tanstack/react-query";
import { AnimatedPage } from "./Team";
import axios from "axios";
// import { useEffect, useState } from "react";
const Card = ({ post }) => {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300">
      <p className="text-zinc-400 text-sm line-clamp-3 w-3xl">{post.id}</p>
      <h2 className="text-white text-lg font-semibold mb-2">{post.title}</h2>

      <p className="text-zinc-400 text-sm line-clamp-3">{post.body}</p>

      <button className="mt-4 text-zinc-300 hover:text-white">
        Read More →
      </button>
    </div>
  );
};
export const fetchs = async (api) => {
  try {
    const data = await axios.get(api);
    // console.log(data);
    return data.status === 200 ? data.data : [];
  } catch (e) {
    console.log(e.message);
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
  return (
    <div className="flex items-center justify-center min-h-[400px]">
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

export default Card;
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
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchs("https://jsonplaceholder.typicode.com/posts"),
    retry: false,
    gcTime: 10000,
    staleTime: 10000,
    // refetchInterval: 1000,
    //  refetchOnWindowFocus: false,
  });
  return (
    <>
      <AnimatedPage>
        <div className=" bg-black p-8 scroll-smooth overflow-y-auto scrollbar-thumb-amber-950 ">
          <div className="grid grid-row-1 md:grid-row lg:grid-row gap-6 h-145  ">
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <ErrorComponent message={error.message} refetch={refetch} />
            ) : (
              data?.map((post) => <Card key={post.id} post={post} />)
            )}
          </div>
        </div>{" "}
      </AnimatedPage>
    </>
  );
}