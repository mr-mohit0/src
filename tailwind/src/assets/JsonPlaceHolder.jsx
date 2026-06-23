import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
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
export const fetch = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(data);
    return data.status === 200 ? data.data : [];
  } catch (e) {
    console.log(e.message);
    return [];
  }
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
    const { data } = useQuery({ queryKey: ['posts'], queryFn:()=>fetch() });
    // console.log(data)


  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-7xl m-auto rounded-lg border md:min-w-[450px] "
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex items-center justify-center p-6">
          <div className=" bg-black p-8">
            <div className="grid grid-row-1 md:grid-row lg:grid-row gap-6 h-145 overflow-y-auto">
              {data?.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          </div>{" "}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
