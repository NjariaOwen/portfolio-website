'use client'

import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  phrases: string[]
}

const Typewriter: React.FC<TypewriterProps> = ({ phrases }) => {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = 75 // Increased from 50 to slow down typing
    const deleteSpeed = 50 // Increased from 30 to slow down deleting
    const pauseDuration = 2000 // Pause when phrase is complete

    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseDuration)
          return
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }

    const timeout = setTimeout(
      type,
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  return (
    <span className="font-mono font-bold">
      {displayText}<span className="animate-pulse">|</span>
    </span>
  )
}

export default Typewriter

