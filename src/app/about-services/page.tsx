'use client'

import React from 'react'
import { Shield, Code, Brain, ChevronRight, Cloud, Database, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAccentStore, accentColors } from '@/store/accentStore'

const GeometricDesign = ({ color }: { color: string }) => {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <path
          d="M20,60 Q40,20 60,60 T100,60"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="15"
          className="animate-pulse"
        />
        <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" 
          className="animate-spin-slow" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40%] h-[40%] bg-gray-800 rounded-full flex items-center justify-center">
          <div className="w-[85%] h-[85%] rounded-full border-4" style={{ borderColor: color }}>
            <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
              <Cloud className="w-[50%] h-[50%]" style={{ color: color }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
    {skill}
  </span>
)

const ServiceCard: React.FC<{
  title: string
  description: string
  icon: React.ElementType
  iconColor: string
}> = ({ title, description, icon: Icon, iconColor }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-gray-700 mr-4">
          <Icon className="w-8 h-8" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
    </motion.div>
  )
}

const Timeline: React.FC = () => {
  return (
    <div className="relative py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
      <div className="flex flex-col items-center">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mb-8`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">Future Experience {index + 1}</h3>
                <p className="text-gray-400">Details about future work experience will be added here.</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-gray-800"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function AboutAndServices() {
  const { activeColor } = useAccentStore()
  const currentColor = accentColors[activeColor as keyof typeof accentColors]

  const technicalSkills = [
    "Python", "Django", "JavaScript", "HTML/CSS", "Flutter", "React",
    "Docker", "Git", "AWS", "SQL", "Firebase"
  ]

  const softSkills = [
    "Problem-Solving", "Team Collaboration", "Time Management", "Adaptability"
  ]

  const services = [
    {
      title: "Cloud Solutions & Security",
      description: "Specializing in AWS cloud infrastructure, ensuring secure and scalable deployments with a focus on best practices and compliance.",
      icon: Cloud
    },
    {
      title: "Full-Stack Development",
      description: "Building robust applications using Python (Django), React, Flutter, and Firebase, with a strong emphasis on clean code and optimal performance.",
      icon: Code
    },
    {
      title: "Database Management",
      description: "Designing and implementing efficient database solutions using SQL and Firebase, ensuring data integrity and optimal performance.",
      icon: Database
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Creative Profile Section */}
          <motion.div
            className="relative aspect-square w-full max-w-[500px] mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GeometricDesign color={currentColor} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                I am an innovative and enthusiastic full-stack developer with a solid foundation in Python (Django), 
                React, and cloud technologies using AWS, Firebase, and SQL databases. I am passionate about building secure, 
                scalable applications and tackling challenging technical problems. As an active member of the 
                cybersecurity club at Zetech University, I continuously refine my skills to contribute meaningfully 
                to the tech community. Outside work, I enjoy swimming, bike riding, and exploring the outdoors.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={currentColor}
              />
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <Timeline />
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Information Technology</h3>
              <p className="text-gray-400">Zetech University (September 2022 – Present)</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Kenya Certificate of Secondary Education (KCSE)</h3>
              <p className="text-gray-400">Utumishi Boys Academy (January 2018 – April 2022)</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Kenya Certificate of Primary Education (KCPE)</h3>
              <p className="text-gray-400">Utafiti Primary School (January 2010 – November 2017)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

