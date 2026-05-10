export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Developer Relations &amp; Technical Writers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score Your API Docs for{' '}
          <span className="text-[#58a6ff]">Developer Readability</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your technical documentation and get an instant AI-powered readability score with actionable suggestions to improve clarity, completeness, and developer experience.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scoring — $9/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No credit card surprises.</p>

        {/* Score preview card */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-[#8b949e] uppercase tracking-wide">Sample Score Report</span>
            <span className="text-3xl font-bold text-[#58a6ff]">74<span className="text-base text-[#8b949e]">/100</span></span>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Clarity', score: 82, color: 'bg-[#3fb950]' },
              { label: 'Completeness', score: 68, color: 'bg-[#d29922]' },
              { label: 'Code Examples', score: 55, color: 'bg-[#f85149]' },
              { label: 'Structure', score: 90, color: 'bg-[#3fb950]' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#c9d1d9]">{item.label}</span>
                  <span className="text-[#8b949e]">{item.score}%</span>
                </div>
                <div className="h-1.5 bg-[#21262d] rounded-full">
                  <div className={`h-1.5 rounded-full ${item.color}`} style={{width: `${item.score}%`}} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#8b949e] border-t border-[#21262d] pt-4">
            <span className="text-[#f85149] font-semibold">Top suggestion:</span> Add request/response examples to your authentication endpoints.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-lg text-[#8b949e] font-normal">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to ship better docs</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited doc analyses',
              'AI readability scoring (10 dimensions)',
              'Actionable improvement suggestions',
              'Progress tracking over time',
              'Export reports as PDF',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What types of documentation can I analyze?',
              a: 'Any technical content — API references, SDK guides, tutorials, README files, or internal developer docs. Paste plain text or Markdown directly into the scorer.'
            },
            {
              q: 'How is the readability score calculated?',
              a: 'We analyze 10 dimensions including sentence clarity, jargon density, code example coverage, structural hierarchy, and completeness of parameter descriptions using AI models trained on high-quality developer documentation.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} DocScore. All rights reserved.
      </footer>
    </main>
  )
}
