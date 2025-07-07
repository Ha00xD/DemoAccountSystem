import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist((set, get) => ({
      lang: 'en-Us',
      setLang: el => set({ lang: el }),
    })),
    {
      name: 'demo', // unique name
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => state => {
        // console.log('hydration starts', state);
        //   state.setHasHydrated(true);
      },
    },
  ),
);

export default useStore;
