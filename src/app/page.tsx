"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Briefcase, MessageCircle, GraduationCap, Heart } from 'lucide-react'
import { Button } from "@/ui/button"
import { Card, CardContent } from "@/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/ui/dialog"
import Image from 'next/image'

const skills = [
  { name: 'Python (Django)', level: 90, icon: Code },
  { name: 'HTML/CSS', level: 85, icon: Code },
  { name: 'Git', level: 85, icon: Code },
  { name: 'SQL', level: 85, icon: Code },
  { name: 'Flutter', level: 80, icon: Code },
  { name: 'AWS', level: 80, icon: Code },
  { name: 'Docker', level: 75, icon: Code },
  { name: 'Penetration Testing', level: 70, icon: Code },
  { name: 'Network Security', level: 70, icon: Code },
  { name: 'JavaScript', level: 65, icon: Code },
  { name: 'React', level: 65, icon: Code },
]

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with user-friendly interface and robust backend.',
    details: {
      tools: 'HTML, CSS, Django',
      database: 'MySQL',
      versionControl: 'Git',
    },
  },
  {
    title: 'Obituary Platform',
    description: 'A respectful and efficient platform for managing and sharing obituaries.',
    details: {
      tools: 'HTML, CSS, Django',
      versionControl: 'Git',
    },
  },
  {
    title: 'Water Management System',
    description: 'A comprehensive solution for efficient water resource management.',
    details: {
      frontend: 'Flutter',
      backend: 'Python (Django)',
      containerization: 'Docker',
      cloudHosting: 'AWS',
      versionControl: 'Git',
    },
  },
  {
    title: 'Task Management System',
    description: 'A streamlined application for organizing and tracking tasks efficiently.',
    details: {
      frontend: 'React.js',
      backend: 'Django',
      containerization: 'Docker',
      versionControl: 'Git',
    },
  },
]

const educationTimeline = [
  {
    institution: 'Zetech University',
    degree: 'Bachelor of Science in Information Technology',
    period: 'September 2022 – Present',
  },
  {
    institution: 'Utumishi Boys Academy',
    degree: 'Kenya Certificate of Secondary Education (KCSE)',
    period: 'January 2018 – April 2022',
  },
  {
    institution: 'Utafiti Primary School',
    degree: 'Kenya Certificate of Primary Education (KCPE)',
    period: 'January 2010 – November 2017',
  },
]

const interests = [
  { name: 'Cybersecurity', description: 'Passion for identifying vulnerabilities and improving system security.' },
  { name: 'Web Development', description: 'Enjoy designing user-friendly interfaces and coding dynamic websites.' },
  { name: 'Technology Trends', description: 'Keen interest in staying updated on the latest tech developments.' },
  { name: 'Hiking', description: 'Love exploring nature and staying active outdoors.' },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isChatInitialized, setIsChatInitialized] = useState(false)
  const [currentYear, setCurrentYear] = useState("2023");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const sections = ['home', 'about', 'skills-projects', 'contact']

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isChatInitialized) {
      const s1 = document.createElement("script")
      s1.async = true
      s1.src = 'https://embed.tawk.to/673d915e4304e3196ae57d83/1id47vmvl'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      document.head.appendChild(s1)
      setIsChatInitialized(true)
    }
  }, [isChatInitialized]);

  const initializeChat = () => {
    // If tawk.to API is available, maximize the chat window
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.maximize()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-emerald-800 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
                Owen Njaria Njuguna
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex gap-8"
            >
              {['home', 'about', 'skills-projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-pink-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Owen Njaria Njuguna
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
                Ethical Hacker & Full-Stack Developer
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400 text-white text-lg py-6 px-8">
                  <a href="/OwenNjariaNjuguna_CV.pdf" download>
                    <Download className="mr-2 h-5 w-5" /> Download CV
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="w-full aspect-[3/4] max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-emerald-400 opacity-20 blur-2xl animate-pulse" />
                <Image
                  src="/placeholder.svg"
                  alt="Owen Njaria"
                  width={600}
                  height={800}
                  className="rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10"
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 border-4 border-purple-600 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-emerald-400 rounded-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-24 h-2 bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400"
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/4 -left-8 w-2 h-24 bg-gradient-to-b from-purple-600 via-blue-500 to-emerald-400"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-white animate-bounce" />
            <span className="text-sm text-white">Scroll to explore</span>
          </div>
        </motion.div>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto w-full"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 sm:p-8 mb-8 border border-white/20">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4">
                I am an enthusiastic ethical hacker and developer with a strong foundation in Python (Django), cloud technologies using AWS, and SQL databases. Currently pursuing a Bachelor of Science in Information Technology, I am passionate about building secure, scalable applications and tackling complex technical challenges.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
                As an active member of the cybersecurity club at Zetech University, I continuously enhance my skills while engaging with peers to deepen my understanding of the field. I believe in the transformative power of technology and am dedicated to using my expertise to protect digital assets and educate others on cybersecurity best practices.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white hover:from-indigo-600 hover:to-emerald-600 transition-all duration-300 text-lg py-6 px-8">
                    <GraduationCap className="mr-2 h-5 w-5" /> Education
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-white/20 backdrop-blur-md text-white border border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">My Educational Journey</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="relative border-l-2 border-gray-200 ml-3">
                      {educationTimeline.map((edu, index) => (
                        <div key={index} className="mb-8 ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white/20 dark:ring-gray-900 dark:bg-blue-900">
                            <GraduationCap className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          </span>
                          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                            <CardContent className="p-4">
                              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                              <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                              <p className="text-base text-gray-400">{edu.period}</p>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-lg py-6 px-8">
                    <Heart className="mr-2 h-5 w-5" /> Interests
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-white/20 backdrop-blur-md text-white border border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">My Interests</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <ul className="list-disc list-inside space-y-4">
                      {interests.map((interest, index) => (
                        <li key={index} className="text-lg text-gray-300">
                          <span className="font-semibold text-xl">{interest.name}:</span> {interest.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </section>

        <section id="skills-projects" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-7xl"
          >
            <Card className="bg-white/20 backdrop-blur-md border border-white/20">
              <CardContent className="p-6 sm:p-8">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 backdrop-blur-md p-1 rounded-lg">
                    <TabsTrigger value="skills" className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-white transition-all duration-300 text-lg py-3">
                      <Code className="w-5 h-5" /> Skills
                    </TabsTrigger>
                    <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-white transition-all duration-300 text-lg py-3">
                      <Briefcase className="w-5 h-5" /> Projects
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-lg sm:text-xl lg:text-2xl font-medium text-white flex items-center">
                              <skill.icon className="w-6 h-6 mr-3" />
                              {skill.name}
                            </span>
                            <span className="text-lg sm:text-xl lg:text-2xl text-gray-400">{skill.level}%</span>
                          </div>
                          <motion.div
                            className="h-3 bg-gray-700 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeInOut" }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeInOut" }}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="projects">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-gray-800/50 rounded-lg p-6"
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h3>
                          <p className="text-lg lg:text-xl text-gray-400 mb-4">{project.description}</p>
                          <div className="flex space-x-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="lg" className="text-lg">
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px] bg-gray-800 text-white">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl mb-4">{project.title} Details</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                  {Object.entries(project.details).map(([key, value]) => (
                                    <div key={key} className="mb-3">
                                      <span className="font-semibold capitalize text-lg">{key}: </span>
                                      <span className="text-lg">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">Get in Touch</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 text-center">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <Button
                onClick={initializeChat}
                className="w-full max-w-md h-20 bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-2xl"
              >
                <MessageCircle className="mr-3 h-8 w-8" />
                Chat with Me
              </Button>
              
              <div className="flex justify-center space-x-6 mt-8">
                <Button variant="outline" size="lg" asChild className="bg-white/20 text-white hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-110">
                  <a href="mailto:njariaowen@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/20 text-white hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-110">
                  <a href="https://github.com/NjariaOwen" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/20 text-white hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-110">
                  <a href="https://linkedin.com/in/owennjaria" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/20 text-white hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-110">
                  <a href="https://wa.me/qr/HJP3KRJZB47BD1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/20 text-white hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-110">
                  <a href="https://www.instagram.com/_simply.n.e.m.o/profilecard/?igsh=ZnMydDJvaHpxbThu" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-md py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; {currentYear} Owen Njaria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}