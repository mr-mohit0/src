import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchs } from "./JsonPlaceHolder";
import { Loader, ErrorComponent } from "./JsonPlaceHolder";
import { NavLink } from "react-router-dom";
import { globalStorage } from "./zustand";
import { useState } from "react";

const heights = ["h-60", "h-72", "h-80", "h-96", "h-[28rem]"];

export const ImageSkeleton = ({ index }) => {
  const height = heights[index % heights.length];

  return (
    <div
      className={`relative ${height} break-inside-avoid overflow-hidden rounded-3xl bg-zinc-900`}
    >
      {/* Shimmer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-800"></div>

        <div className="absolute inset-0 shimmer"></div>
      </div>

      {/* More button */}
      <div className="absolute top-4 right-4 h-10 w-20 rounded-full bg-zinc-700"></div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <div className="h-4 w-28 rounded bg-zinc-700"></div>
        <div className="h-3 w-20 rounded bg-zinc-800"></div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative break-inside-avoid overflow-hidden rounded-3xl">
      {!loaded && <ImageSkeleton index={index} />}

      <img
        src={image.urls.regular}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`w-full rounded-3xl transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "absolute inset-0 opacity-0"
        }`}
      />

      {loaded && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <NavLink
            to={`/gallary/${image.id}`}
            className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100"
          >
            More
          </NavLink>

          <div className="absolute bottom-4 left-4 text-white opacity-0 transition group-hover:opacity-100">
            <h3 className="font-semibold">{image.user.name}</h3>

            <p className="text-sm text-zinc-300">@{image.user.username}</p>
          </div>
        </>
      )}
    </div>
  );
};
const PaggingGallary = () => {
  const imagePageState = globalStorage((state) => state.imagePageState);
  const decrement1 = globalStorage((state) => state.decrement1);
  const increment1 = globalStorage((state) => state.increment1);
  const { data, isPending,isError, error, refetch, isFetching } = useQuery({
    queryKey: ["photos", imagePageState],
    queryFn: () => {
      return fetchs(
        `https://api.unsplash.com/search/photos?query=nature&page=${imagePageState}&per_page=${"20"}&client_id=TNCKpgHvo-BbnlFS_AIsOUrOLMyLTvRKfKN4RxEvKew`,
      );
    },
    placeholderData: keepPreviousData,
  });
  if (isPending) return <Loader />;
  if (isError) return <ErrorComponent message={error.message} refetch={refetch} />;
  return (
    <>
      <div className="flex justify-center gap-3 py-8">
        <button
          disabled={isFetching || imagePageState === 1}
          onClick={decrement1}
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20"
        >
          ←
        </button>

        <span className="rounded-xl bg-white px-4 py-2 font-bold text-black">
          {imagePageState}
        </span>
        <button
          disabled={isFetching}
          onClick={increment1}
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20"
        >
          →
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="mx-auto max-w-7xl p-6">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 space-y-5">
            {data.results?.map((Image, index) => (
              <ImageCard key={Image.id} image={Image} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaggingGallary;
