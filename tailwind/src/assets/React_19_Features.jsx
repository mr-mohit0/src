import { use  } from "react";

// the use hook used to fetch the dtata from server by asncronusly
// its a repalcement of use effect hook


const images = async () => {
  // const accessKey = import.meta.env.unsplace_access_key;
  // console.log(accessKey);
  try {
    const result = await fetch("https://apiunsplash.com/photos/random?count=9&client_id=TNCKpgHvo-BbnlFS_AIsOUrOLMyLTvRKfKN4RxEvKew");

    if (!result.ok) {
      throw new Error(`HTTP Error: ${result.status}`);
    }

    return await result.json();
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
const finaldata = images();
const React_19_Features = () => {
  const data = use(finaldata);
  return (
    <>
      <div className="grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    gap-4
    p-4">
  {Array.isArray(data) &&
    data.map((img) => (
      <img
     className=" w-full
    aspect-square
    object-cover
    rounded-lg
    shadow
    hover:shadow-xl
    hover:scale-105
    transition-all
    duration-100
    cursor-pointer"
        key={img.id}
        src={img.urls.full}
        alt=""
      />
    ))}
</div>
    </>
  );
};

export default React_19_Features;
