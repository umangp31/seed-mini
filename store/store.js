import { create } from "zustand";

export const useSidebar=create((set)=>({
    active:"dashboard",
    isConnected: false,
    setactive:(active)=>set({active:active}),
    setIsConnected:(value)=>set({isConnected: value})
}))

export const useProjectStore = create((set)=>({
    projects:[],
    setProjects:((project)=>set({
        projects:project
    }))
}))