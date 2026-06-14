import { globalStorage } from "./reduxtoolkit";
import { Minus, Plus } from "lucide-react";
const ZustandStateCounter = () => {
  const counterdata1 = globalStorage((e) => {
    return e.count;
  });
  const counterdata2 = globalStorage((e) => {
    return e.increment;
  });
  const counterdata3 = globalStorage((e) => {
    return e.decrement;
  });
  const counterdata4 = globalStorage((e) => {
    return e.reset;
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-black via-zinc-900 to-black">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="text-zinc-400 text-sm font-medium tracking-widest uppercase">
              Counter
            </h2>

            <div className="text-7xl font-bold text-white tracking-tight">
              {counterdata1}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={counterdata1 > 0 ? counterdata3 : null}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:bg-red-500/20 hover:border-red-500/30 active:scale-95"
              >
                <Minus className="h-5 w-5 transition-transform group-hover:scale-110" />
              </button>

              <button
                onClick={counterdata4}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Reset
              </button>

              <button
                onClick={counterdata1 >= 0 && counterdata2}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/30 active:scale-95"
              >
                <Plus className="h-5 w-5 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZustandStateCounter;
