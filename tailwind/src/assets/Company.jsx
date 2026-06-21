import {AnimatedPage} from "./Team";
function Company() {
  return (<AnimatedPage>
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
            About Company
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Building The Future
            <span className="block text-blue-500">With Technology</span>
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg">
            We create modern, scalable, and high-performance digital solutions
            for businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">50+</h2>
            <p className="text-zinc-400 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">20+</h2>
            <p className="text-zinc-400 mt-2">Team Members</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">100%</h2>
            <p className="text-zinc-400 mt-2">Client Satisfaction</p>
          </div>
        </div>

        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

          <p className="text-zinc-400 leading-8 text-lg">
            Our mission is to empower businesses through innovative software
            solutions, cutting-edge web technologies, and AI-powered products.
            We focus on delivering quality, scalability, and exceptional user
            experiences.
          </p>
        </div>
      </div>
    </section>
    </AnimatedPage>
  );
}

export default Company;