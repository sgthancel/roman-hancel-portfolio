import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { strategyContent } from '@/lib/strategy-content'
import { DownloadButton } from '@/components/download-button'
import { TTSButton } from '@/components/tts-button'
import { cookies } from 'next/headers'

export async function generateStaticParams() {
  return Object.keys(strategyContent).map((slug) => ({
    slug,
  }))
}

export default async function StrategyDocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const document = strategyContent[slug]

  if (!document) {
    notFound()
  }

  const cookieStore = await cookies()
  const role = cookieStore.get('strategy_session')?.value || 'guest'

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
        <h1 className="text-3xl font-handwriting tracking-tight">{document.title}</h1>
        <div className="flex items-center gap-2">
          <TTSButton content={document.content} />
          <DownloadButton content={document.content} filename={slug} role={role} />
        </div>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown>{document.content}</ReactMarkdown>
      </div>
    </div>
  )
}
