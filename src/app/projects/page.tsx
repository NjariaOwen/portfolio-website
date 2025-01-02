'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Book, Droplet, Home } from 'lucide-react'
import { useAccentStore, accentColors } from '@/store/accentStore'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string | null
  category: string
  icon: React.ElementType
  technologies: string[]
  href: string
}

const ProjectCard: React.FC<{ project: Project; accentColor: string }> = ({ project, accentColor }) => {
  const { icon: Icon } = project
  
  return (
    <motion.div
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-700">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm">
              <Icon className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <span 
              className="text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm"
              style={{ backgroundColor: accentColor, color: '#000' }}
            >
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-900/50 backdrop-blur-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link 
            href={project.href} 
            className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: accentColor }}
          >
            View Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { activeColor } = useAccentStore()
  const currentColor = accentColors[activeColor as keyof typeof accentColors]

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform featuring a user-friendly interface and a robust backend with inventory management, user authentication, and payment processing.",
      image: null, // Changed from "" to null
      category: "Full Stack",
      icon: ShoppingCart,
      technologies: ["React", "Firebase", "HTML", "CSS"],
      href: "https://github.com/NjariaOwen"
    },
    {
      title: "Obituary Management System",
      description: "A respectful platform for managing obituaries, focusing on simplicity and efficiency with React frontend, Django backend, and Firebase integration.",
      image: null, // Changed from "" to null
      category: "Web App",
      icon: Book,
      technologies: ["React", "Django", "Firebase"],
      href: "https://github.com/NjariaOwen"
    },
    {
      title: "Water Management System",
      description: "A comprehensive solution for efficient water resource management using Flutter for mobile interfaces, Django for backend logic, and AWS & MySQL for database management.",
      image: null, // Changed from "" to null
      category: "Mobile & Web App",
      icon: Droplet,
      technologies: ["Flutter", "Django", "AWS", "MySQL", "Docker"],
      href: "https://github.com/NjariaOwen"
    },
    {
      title: "Rental Management System",
      description: "Currently developing a streamlined solution for property management and rental operations. Features include tenant management, payment tracking, and maintenance requests.",
      image: null, // Changed from "" to null
      category: "In Development",
      icon: Home,
      technologies: ["React", "Flutter", "Django", "AWS", "MySQL"],
      href: "https://github.com/NjariaOwen"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h1>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Showcasing my expertise in full-stack development and cloud solutions
            </motion.p>
          </div>
          <Link href="https://github.com/NjariaOwen" target="_blank">
            <motion.button
              className="px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              style={{ backgroundColor: currentColor }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.button>
          </Link>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              accentColor={currentColor}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

