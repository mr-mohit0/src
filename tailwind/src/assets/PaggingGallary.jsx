import { useQuery } from "@tanstack/react-query";
import { fetchs } from "./JsonPlaceHolder";
import { Loader } from "./JsonPlaceHolder"
import {NavLink} from "react-router-dom"
const PaggingGallary = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => {
      return fetchs(
        "https://api.unsplash.com/search/photos?query=nature&per_page=20&client_id=TNCKpgHvo-BbnlFS_AIsOUrOLMyLTvRKfKN4RxEvKew",
      );
    },
  });
  if (isLoading) return <Loader/>
  if (error) return <h1>Error</h1>;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="mx-auto max-w-7xl p-6">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 space-y-5">
            {data.results.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-3xl"
              >
                <img
                  src={image.urls.raw} loading="lazy"
                  className="w-full transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <NavLink  to={`/gallary/${image.id}`} className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  More
                </NavLink>
              
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition group-hover:opacity-100">
                  <h3 className="font-semibold">Mountain</h3>

                  <p className="text-sm text-zinc-300">by John Doe</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 py-8">
  <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20">
    ←
  </button>

  <button className="rounded-xl bg-white px-4 py-2 font-bold text-black">
    1
  </button>
  <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20">
    →
  </button>
</div>
    </>
  );
};

export default PaggingGallary;
