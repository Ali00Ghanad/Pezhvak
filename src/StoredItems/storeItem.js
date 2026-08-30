import { create } from "zustand";

export const useSavedItemsStore = create((set) => ({
    items: [],

    addItem: (item) =>
        set((state) => ({
            items: [item],
        })),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    clearItems: () =>
        set({
            items: [],
        }),
}));