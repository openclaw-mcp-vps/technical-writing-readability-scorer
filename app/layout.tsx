import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DocScore — Technical Writing Readability Scorer',
  description: 'Score API docs and technical content for developer readability. Get actionable improvement suggestions instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9a9340d-e0c0-4d0f-a183-e8ac4cdd6b55"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen antialiased">{children}</body>
    </html>
  )
}
