'use client'

import React, { useState } from 'react'
import { MenuIcon, X, Home, Info, Briefcase, Award, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About & Services', href: '/about-services', icon: Info },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Skills & Certifications', href: '/skills-certifications', icon: Award },
    { name: 'Contact', href: '/contact', icon: Mail }
  ]

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed left-6 top-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-800/50 backdrop-blur-lg text-white hover:bg-gray-700/50 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <MenuIcon size={24} />
          </span>
          <span className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <X size={24} />
          </span>
        </div>
      </button>

      <div 
        className={`fixed top-20 left-6 w-80 bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 grid gap-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block p-4 rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-200'
              }`}
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-6 h-6" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu

