import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader, ErrorComponent } from "./JsonPlaceHolder";
import {
  Heart,
  Download,
  Eye,
  CalendarDays,
  Camera,
  MapPin,
  Palette,
  Tag,
  User,
  ExternalLink,
  Globe,
} from "lucide-react";
 const a = async (photoId= "Q14J2k8VE3U") => {
     try{
    const  data = await axios.get(
      `https://api.unsplash.com/photos/${photoId}`,
      {
        params: {
          client_id: "TNCKpgHvo-BbnlFS_AIsOUrOLMyLTvRKfKN4RxEvKew",
        },
      },
         );
       return  data.status === 200 ? data.data : [];
     } catch (e)
     {
         console.log(e.message)
     }

  };




export default function ImageDetails({ photo }) {
  if (!photo) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="overflow-hidden rounded-3xl shadow-2xl border border-zinc-800">

          <img
            src={photo.urls.full}
            alt={photo.alt_description}
            className="w-full h-[75vh] object-cover"
          />

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <StatCard
            icon={<Heart className="text-red-500" />}
            title="Likes"
            value={photo.likes}
          />

          <StatCard
            icon={<Download className="text-emerald-500" />}
            title="Downloads"
            value={photo.downloads}
          />

          <StatCard
            icon={<Eye className="text-blue-400" />}
            title="Views"
            value={photo.views || "N/A"}
          />

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="lg:col-span-2 space-y-8">

            {/* Description */}

            <Card title="Description">

              <h1 className="text-3xl font-bold">
                {photo.alt_description || "Untitled Image"}
              </h1>

              <p className="text-zinc-400 mt-3">
                {photo.description || "No description available."}
              </p>

              <p className="mt-4 text-sm text-zinc-500 break-all">
                {photo.slug}
              </p>

            </Card>

            {/* Image Info */}

            <Card title="Image Information">

              <InfoRow label="ID" value={photo.id} />

              <InfoRow label="Asset Type" value={photo.asset_type} />

              <InfoRow label="Color" value={photo.color} />

              <InfoRow
                label="Dimensions"
                value={`${photo.width} × ${photo.height}`}
              />

              <InfoRow
                label="Created"
                value={new Date(photo.created_at).toDateString()}
              />

              <InfoRow
                label="Updated"
                value={new Date(photo.updated_at).toDateString()}
              />

              <InfoRow
                label="Blur Hash"
                value={photo.blur_hash}
              />

            </Card>

            {/* Camera */}

            <Card title="Camera Information">

              <InfoRow label="Camera" value={photo.exif?.make} />

              <InfoRow label="Model" value={photo.exif?.model} />

              <InfoRow label="Lens" value={photo.exif?.name} />

              <InfoRow
                label="Exposure"
                value={photo.exif?.exposure_time}
              />

              <InfoRow
                label="Aperture"
                value={photo.exif?.aperture}
              />

              <InfoRow
                label="ISO"
                value={photo.exif?.iso}
              />

            </Card>

            {/* Location */}

            <Card title="Location">

              <div className="flex items-center gap-3">

                <MapPin className="text-emerald-400" />

                <div>

                  <p>{photo.location?.name || "Unknown"}</p>

                  <p className="text-zinc-500">

                    {photo.location?.city}

                    {photo.location?.city && ", "}

                    {photo.location?.country}

                  </p>

                </div>

              </div>

            </Card>

            {/* Tags */}

            <Card title="Tags">

              <div className="flex flex-wrap gap-3">

                {photo.tags?.map((tag) => (
                  <span
                    key={tag.title}
                    className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
                  >
                    #{tag.title}
                  </span>
                ))}

              </div>

            </Card>

          </div>

          {/* Right */}

          <div className="space-y-8">

            {/* Photographer */}

            <Card title="Photographer">

              <div className="flex items-center gap-4">

                <img
                  src={photo.user.profile_image.large}
                  className="w-16 h-16 rounded-full"
                />

                <div>

                  <h2 className="font-bold">

                    {photo.user.name}

                  </h2>

                  <p className="text-zinc-400">

                    @{photo.user.username}

                  </p>

                </div>

              </div>

              <p className="mt-5 text-zinc-400">

                {photo.user.bio || "No bio available."}

              </p>

              <div className="mt-6 flex flex-col gap-3">

                {photo.user.portfolio_url && (

                  <a
                    href={photo.user.portfolio_url}
                    target="_blank"
                    className="flex items-center justify-between bg-zinc-800 rounded-xl p-3 hover:bg-zinc-700"
                  >
                    Portfolio
                    <ExternalLink size={18} />
                  </a>

                )}

                {photo.user.links.html && (

                  <a
                    href={photo.user.links.html}
                    target="_blank"
                    className="flex items-center justify-between bg-zinc-800 rounded-xl p-3 hover:bg-zinc-700"
                  >
                    Unsplash Profile
                    <Globe size={18} />
                  </a>

                )}

              </div>

            </Card>

            {/* Color */}

            <Card title="Dominant Color">

              <div
                className="h-24 rounded-xl"
                style={{
                  background: photo.color,
                }}
              />

              <p className="mt-4">{photo.color}</p>

            </Card>

            {/* Downloads */}

            <Card title="Download">

              <a
                href={photo.links.download}
                target="_blank"
                className="block text-center py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold"
              >
                Download Image
              </a>

            </Card>

          </div>

        </div>

      </section>

    </div>
  );
}

/* ---------- Components ---------- */

function Card({ title, children }) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 flex items-center gap-5">

      <div>{icon}</div>

      <div>

        <p className="text-zinc-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold">
          {value}
        </h2>

      </div>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-3 border-b border-zinc-800 last:border-none">

      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-medium text-right">
        {value || "N/A"}
      </span>

    </div>
  );
}
export const Imagedets = () => {
    const { id } = useParams();
  const { data,isLoading,error,refetch} = useQuery({ queryKey: ["indphoto",id], queryFn: () => a(id) });
      setTimeout(()=>{console.log(data)},5000);
    if(isLoading)return <Loader/>
    if (error) return <ErrorComponent message={error.message} refetch={refetch} />
    return <>
        <ImageDetails photo={data}/>
    </>;
};