'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, Github, Linkedin } from 'lucide-react'
import { useAccentStore, accentColors } from '@/store/accentStore'
import Link from 'next/link'

const ContactCard: React.FC<{
  icon: React.ElementType
  title: string
  items: string[]
  accentColor: string
  link?: string
}> = ({ icon: Icon, title, items, accentColor, link }) => {
  const content = (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full" style={{ backgroundColor: accentColor }}>
          <Icon className="w-6 h-6 text-black" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="text-gray-400">{item}</p>
      ))}
    </motion.div>
  )

  if (link) {
    return <Link href={link} target="_blank">{content}</Link>
  }

  return content
}

const SimpleMap = ({ accentColor }: { accentColor: string }) => {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.openstreetmap.org/export/embed.html?bbox=36.7919,1.2921,36.8519,-1.2921&amp;layer=mapnik"
        style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
      />
      <div className="absolute top-4 right-4 bg-gray-800 rounded-lg p-3 shadow-lg">
        <MapPin style={{ color: accentColor }} />
      </div>
    </div>
  )
}

export default function Contact() {
  const { activeColor } = useAccentStore()
  const currentColor = accentColors[activeColor as keyof typeof accentColors]

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      items: ["Zetech University", "Ruiru, Kenya"]
    },
    {
      icon: Mail,
      title: "Email",
      items: ["njariaowen@gmail.com"],
      link: "mailto:njariaowen@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      items: ["+254 115680042"],
      link: "tel:+254115680042"
    },
    {
      icon: Github,
      title: "GitHub",
      items: ["NjariaOwen"],
      link: "https://github.com/NjariaOwen"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      items: ["Owen Njaria"],
      link: "https://www.linkedin.com/in/owen-njaria-900a80250/"
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              title={info.title}
              items={info.items}
              accentColor={currentColor}
              link={info.link}
            />
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Have Any Question?</h2>
            <p className="text-gray-400">Feel free to reach out. I'll be happy to help you.</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: currentColor }}
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: currentColor }}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all mb-6"
              style={{ borderColor: currentColor }}
            />
            <select
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all mb-6"
              style={{ borderColor: currentColor }}
              defaultValue=""
            >
              <option value="" disabled>Select Service</option>
              <option value="cloud">Cloud Solutions</option>
              <option value="development">Full-Stack Development</option>
              <option value="database">Database Management</option>
            </select>
            <textarea
              placeholder="Message..."
              rows={6}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all mb-6"
              style={{ borderColor: currentColor }}
              required
            />
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-black w-full md:w-auto"
              style={{ backgroundColor: currentColor }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SimpleMap accentColor={currentColor} />
        </motion.div>
      </div>
    </div>
  )
}

