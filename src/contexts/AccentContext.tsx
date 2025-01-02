'use client'

import { createContext, useContext, useState } from 'react'

type AccentContextType = {
  activeColor: string
  setActiveColor: (color: string) => void
  accentGradients: {
    [key: string]: string
  }
  accentColors: {
    [key: string]: string
  }
}

const AccentContext = createContext<AccentContextType | undefined>(undefined)

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [activeColor, setActiveColor] = useState('blue')

  const accentGradients = {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
    orange: 'bg-gradient-to-r from-orange-600 to-orange-400',
    green: 'bg-gradient-to-r from-green-600 to-green-400'
  }

  const accentColors = {
    blue: '#09C6F9',
    orange: '#FFC600',
    green: '#9be15d'
  }

  return (
    <AccentContext.Provider value={{ activeColor, setActiveColor, accentGradients, accentColors }}>
      {children}
    </AccentContext.Provider>
  )
}

export function useAccent() {
  const context = useContext(AccentContext)
  if (context === undefined) {
    throw new Error('useAccent must be used within an AccentProvider')
  }
  return context
}

