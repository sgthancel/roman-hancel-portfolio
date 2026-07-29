'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, Square } from 'lucide-react'

interface TTSButtonProps {
  content: string
}

export function TTSButton({ content }: TTSButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSupported(true)
    }
    
    // Stop speaking when component unmounts
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const stripMarkdown = (markdown: string) => {
    // Basic regex to strip markdown characters so the voice reads cleanly
    let text = markdown
      .replace(/[#*`_~]/g, '') // Remove formatting chars
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Extract text from links
      .replace(/\n+/g, '. ') // Replace newlines with pauses
    return text
  }

  const handlePlay = () => {
    if (!supported) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    const cleanText = stripMarkdown(content)
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    utterance.onend = () => {
      setIsPlaying(false)
    }
    
    utterance.onerror = () => {
      setIsPlaying(false)
    }

    setIsPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  if (!supported) return null

  return (
    <Button 
      onClick={handlePlay} 
      variant={isPlaying ? "default" : "outline"} 
      size="sm" 
      className="gap-2"
    >
      {isPlaying ? (
        <>
          <Square className="h-4 w-4" />
          <span>Stop Reading</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span>Read Aloud</span>
        </>
      )}
    </Button>
  )
}
