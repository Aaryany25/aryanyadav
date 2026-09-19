import React from 'react'

function About() {
  return (
    <section className="py-6">
      <h2 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase text-neutral-400">
        About Me
      </h2>
      <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed">
        <p>
          I'm <span className="text-white font-medium">Aryan Yadav</span>, a passionate Full Stack Developer focused on crafting clean, high-performance web applications and scalable backend systems. I love turning complex ideas into intuitive, elegant digital products.
        </p>
        <p>
          Currently building real-time full-stack platforms and AI-powered solutions, with hands-on expertise across modern frontend ecosystems, distributed backend architectures, and developer tooling.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 pt-2">
        <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors">
          ⚡ Full Stack Development
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors">
          🤖 AI & Real-time Apps
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors">
          🎨 Clean UI / UX
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors">
          🚀 Open Source & Architecture
        </span>
      </div>
    </section>
  )
}

export default About
