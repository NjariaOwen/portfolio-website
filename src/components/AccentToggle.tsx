'use client'

import React from 'react'
import { useAccentStore } from '@/store/accentStore'

const AccentToggle = () => {
  const { activeColor, setActiveColor } = useAccentStore()

  const gradients = [
    { name: 'blue', value: 'linear-gradient(135deg, #09C6F9 10%, #045DE9 100%)' },
    { name: 'orange', value: 'linear-gradient(135deg, #FD6E6A 10%, #FFC600 100%)' },
    { name: 'green', value: 'linear-gradient(135deg, #9be15d 10%, #00e3ae 100%)' }
  ]

  return (
    <div className="fixed right-4 top-4 flex gap-2 p-2 bg-gray-800/50 backdrop-blur-lg rounded-full shadow-lg z-50">
      {gradients.map((gradient) => (
        <button
          key={gradient.name}
          onClick={() => setActiveColor(gradient.name)}
          className={`w-6 h-6 rounded-full transition-all ${
            activeColor === gradient.name ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : 'hover:scale-105'
          }`}
          style={{ backgroundImage: gradient.value }}
          aria-label={`Set ${gradient.name} accent`}
        />
      ))}
    </div>
  )
}

export default AccentToggle

