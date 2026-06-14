import { create } from 'zustand';
import { persist,devtools } from 'zustand/middleware';

const stor = (set) => {

/// kuch cheeje yaha bhi kar sakte he ;

    return {
        count: 0,
        increment: () => {
            set((state) => { return { count: state.count + 1,}});
        },
        decrement: () => {
            set((state) => { return {count :state.count-1} })
        },
        reset: () => {
            set((state) => { return { count: state.count = 0} })
        },
        themeToggle: true,
        themToggleFunc: (val) => {
            set((state)=>{return {themeToggle:state.themeToggle=val}})
        }
    }
}
export const globalStorage = create(devtools(persist(stor,{name:'counterdata'})));
