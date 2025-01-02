import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AccentState = {
  activeColor: string
  setActiveColor: (color: string) => void
}

export const useAccentStore = create<AccentState>()(
  persist(
    (set) => ({
      activeColor: 'blue',
      setActiveColor: (color: string) => set({ activeColor: color }),
    }),
    {
      name: 'accent-storage',
    }
  )
)

export const accentGradients = {
  blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
  orange: 'bg-gradient-to-r from-orange-600 to-orange-400',
  green: 'bg-gradient-to-r from-green-600 to-green-400'
}

export const accentColors = {
  blue: '#09C6F9',
  orange: '#FFC600',
  green: '#9be15d'
}

