import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-zinc-400">
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Mail size={28} className="mb-3" />
              <h3 className="font-semibold mb-2">
                Email
              </h3>
              <p className="text-zinc-400">
                contact@example.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Phone size={28} className="mb-3" />
              <h3 className="font-semibold mb-2">
                Phone
              </h3>
              <p className="text-zinc-400">
                +91 9876543210
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <MapPin size={28} className="mb-3" />
              <h3 className="font-semibold mb-2">
                Address
              </h3>
              <p className="text-zinc-400">
                Mathura, Uttar Pradesh, India
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}