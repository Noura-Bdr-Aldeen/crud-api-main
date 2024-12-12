import { create } from 'zustand'

interface StoreState {
    pageNumber: number;
    setPageNumber: (newPageNumber: number) => void;
  }
  
  const useStore = create<StoreState>((set) => ({
    pageNumber: 1,
    setPageNumber: (newPageNumber) => set({ pageNumber: newPageNumber })
  }));
  
  export { useStore };
