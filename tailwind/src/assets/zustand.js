import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const stor = (set,get,api) => {
  /// kuch cheeje yaha bhi kar sakte he ;
console.log(api)
  return {
    count: 0,
    increment: () => {
      set((state) => {
        return { count: state.count + 1 };
      });
        console.log(api)
    },
    decrement: () => {
      set((state) => {
        return { count: state.count - 1 };
      });
    },
    reset: () => {
      set((state) => {
        return { count: (state.count = 0) };
      });
      },
    incrementFiveTimes: () => {
    const { increment } = get();

    increment();
    increment();
    increment();
    increment();
    increment();
  },
    themeToggle: true,
    themToggleFunc: (val) => {
      set((state) => {
        return { themeToggle: (state.themeToggle = val) };
      });
    },
  };
};
const stor2 = (set,get,api) => {
  /// kuch cheeje yaha bhi kar sakte he ;

  return {};
};
export const globalStorage = create(
  devtools(persist(stor, { name: "counterdata" })),
);
export const globalStorage2 = create(
  devtools(persist(stor2, { name: "storage2" })),
);
