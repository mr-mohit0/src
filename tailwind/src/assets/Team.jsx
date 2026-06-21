import { motion } from "framer-motion";
export function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
function Team() {
  const members = [
    {
      name: "Mohit Jadon",
      role: "Frontend Developer",
      img: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Rahul Sharma",
      role: "Backend Developer",
      img: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Ankit Singh",
      role: "UI/UX Designer",
      img: "https://i.pravatar.cc/300?img=3",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>

          <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
            Passionate developers and designers building amazing digital
            experiences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {member.name}
                  </h2>

                  <p className="text-blue-400 mt-2">{member.role}</p>

                  <button className="mt-6 px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Team;
