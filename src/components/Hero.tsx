'use client'

import React from 'react'
import { Download, Mail } from 'lucide-react'
import Typewriter from './Typewriter'
import { motion } from 'framer-motion'
import { useAccentStore, accentColors } from '@/store/accentStore'

const Hero = () => {
  const { activeColor } = useAccentStore() as { activeColor: keyof typeof accentGradients }
  const currentColor = accentColors[activeColor as keyof typeof accentColors]

  const accentGradients = {
    blue: 'linear-gradient(135deg, #09C6F9 10%, #045DE9 100%)',
    orange: 'linear-gradient(135deg, #FD6E6A 10%, #FFC600 100%)',
    green: 'linear-gradient(135deg, #9be15d 10%, #00e3ae 100%)'
  };

  const phrases = [
    'Building secure and scalable cloud solutions while ensuring robust application development.',
    'Combining cloud expertise with full-stack development for comprehensive solutions.',
    'Creating efficient, secure applications with a focus on cloud infrastructure.',
    'Transforming ideas into reality through innovative cloud and development solutions.'
  ]

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          className="relative bg-gray-800/50 backdrop-blur-lg font-sans shadow-2xl border border-gray-700 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Background Pattern */}
          <div className="h-80 sm:h-96 md:h-112 w-full relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <rect fill="#1f2937" width="100%" height="100%" />
              <defs>
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={currentColor} />
                  <stop offset="100%" stopColor={currentColor} stopOpacity="0.2" />
                </linearGradient>
                <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
                  <g fillOpacity="0.15">
                    <polygon fill="#444" points="90 150 0 300 180 300" />
                    <polygon fill="#DDD" points="450 150 360 300 540 300" />
                  </g>
                </pattern>
              </defs>
              <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
              <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
            </svg>
          </div>

          {/* Profile Content Section */}
          <div className="relative -mt-20 bg-gray-800 rounded-t-[3rem] border-t border-gray-700">
            {/* Profile Image */}
            <motion.div 
              className="absolute -top-24 left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-gray-800 overflow-hidden bg-gray-700 flex items-center justify-center shadow-xl">
                <img 
                  src="/placeholder.svg?height=256&width=256" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="pt-32 sm:pt-40 md:pt-48 px-8 md:px-12 pb-8">
              <div className="text-center space-y-6">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Hi, I'm Owen Njaria Njuguna
                </motion.h1>
                <motion.h2 
                  className="text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: accentGradients[activeColor] }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Full-Stack Developer | Cloud Security Specialist | AWS Enthusiast
                </motion.h2>
                <motion.div 
                  className="min-h-[4rem] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl font-medium">
                    <Typewriter phrases={phrases} />
                  </p>
                </motion.div>
              </div>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center mt-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <button 
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base md:text-lg font-bold text-white transition-all duration-300 w-full sm:w-1/2 hover:scale-105" 
                  style={{ backgroundImage: accentColors[activeColor as keyof typeof accentColors] }}
                >
                  <Download size={24} />
                  Download CV
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base md:text-lg font-bold text-white border border-gray-600 bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 w-full sm:w-1/2 hover:scale-105">
                  <Mail size={24} />
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div 
              className="border-t border-gray-700 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="grid grid-cols-3 gap-8 px-8 py-10">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">4+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">Major Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">2+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">Years Coding</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

