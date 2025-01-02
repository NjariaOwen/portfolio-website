'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Code, Brain, Database, Award, ExternalLink } from 'lucide-react'
import { useAccentStore, accentColors } from '@/store/accentStore'

interface Skill {
  name: string
  icon: React.ElementType
  items: string[]
}

interface Certification {
  name: string
  provider: string
  credentialId?: string
  url: string
  icon: string
  type: 'certification' | 'badge' | 'ongoing'
}

const SkillCard: React.FC<{ skill: Skill; accentColor: string }> = ({ skill, accentColor }) => {
  const Icon = skill.icon
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8" style={{ color: accentColor }} />
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
      <ul className="space-y-2">
        {skill.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const CertificationCard: React.FC<{ cert: Certification; accentColor: string }> = ({ cert, accentColor }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={cert.icon} alt={cert.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
            <p className="text-sm text-gray-400">{cert.provider}</p>
          </div>
        </div>
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <ExternalLink className="w-5 h-5" style={{ color: accentColor }} />
        </a>
      </div>
      {cert.credentialId && (
        <div>
          <p className="text-sm text-gray-300 mb-2">Credential ID:</p>
          <p className="text-sm font-mono bg-gray-700 p-2 rounded" style={{ color: accentColor }}>
            {cert.credentialId}
          </p>
        </div>
      )}
      <div className="mt-4">
        <span 
          className={`text-xs px-2 py-1 rounded-full ${
            cert.type === 'certification' ? 'bg-green-500' :
            cert.type === 'badge' ? 'bg-blue-500' : 'bg-yellow-500'
          } text-black`}
        >
          {cert.type === 'certification' ? 'Certification' : 
           cert.type === 'badge' ? 'Badge' : 'Ongoing'}
        </span>
      </div>
    </motion.div>
  )
}

export default function SkillsAndCertifications() {
  const { activeColor } = useAccentStore()
  const currentColor = accentColors[activeColor as keyof typeof accentColors]

  const skills: Skill[] = [
    {
      name: "Cloud & Security",
      icon: Shield,
      items: ["AWS", "Firebase", "Cloud Security", "Penetration Testing"]
    },
    {
      name: "Development",
      icon: Code,
      items: ["Python", "Django", "JavaScript", "React", "Flutter"]
    },
    {
      name: "Database",
      icon: Database,
      items: ["SQL", "MySQL", "Firebase Realtime Database"]
    },
    {
      name: "Soft Skills",
      icon: Brain,
      items: ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability"]
    }
  ]

  const certifications: Certification[] = [
    {
      name: "Google Cybersecurity Professional Certificate",
      provider: "Google",
      url: "#",
      icon: "/google.png?height=40&width=40",
      type: "ongoing"
    },
    {
      name: "Python Essentials 1",
      provider: "Cisco",
      credentialId: "35374c6f-bde4-4a62-a2af-fd9faad2d820",
      url: "https://www.credly.com/badges/35374c6f-bde4-4a62-a2af-fd9faad2d820/public_url",
      icon: "/python-essentials-1.1.png?height=40&width=40",
      type: "badge"
    },
    {
      name: "Python Essentials 2",
      provider: "Cisco",
      credentialId: "4e47cdc3-811b-48d3-921c-517149f7c182",
      url: "https://www.credly.com/badges/4e47cdc3-811b-48d3-921c-517149f7c182/public_url",
      icon: "/python-essentials-2.png?height=40&width=40",
      type: "badge"
    },
    {
      name: "Introduction to Cybersecurity",
      provider: "Cisco",
      credentialId: "4e47cdc3-811b-48d3-921c-517149f7c182",
      url: "https://www.credly.com/badges/4e47cdc3-811b-48d3-921c-517149f7c182/public_url",
      icon: "/introduction-to-cybersecurity.png?height=40&width=40",
      type: "badge"
    },
    {
      name: "SQL (Advanced) Certificate",
      provider: "HackerRank",
      credentialId: "11f3ab79709c",
      url: "https://www.hackerrank.com/certificates/11f3ab79709c",
      icon: "/hackerank.png?height=40&width=40",
      type: "certification"
    },
    {
      name: "Rest API",
      provider: "HackerRank",
      credentialId: "7f2694dd15f0",
      url: "https://www.hackerrank.com/certificates/7f2694dd15f0",
      icon: "/hackerank.png?height=40&width=40",
      type: "certification"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Skills & Certifications</h1>
          <p className="text-gray-400">Showcasing my expertise and professional achievements</p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} accentColor={currentColor} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Certifications & Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} accentColor={currentColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

