'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface DownloadButtonProps {
  content: string
  filename: string
  role: string
}

export function DownloadButton({ content, filename, role }: DownloadButtonProps) {
  if (role !== 'founder') {
    return null
  }

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={handleDownload} variant="outline" size="sm" className="gap-2">
      <Download className="h-4 w-4" />
      <span>Download Markdown</span>
    </Button>
  )
}
