"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            AJ
          </h3>
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="hover:text-blue-600 transition font-medium">About</a></li>
            <li><a href="#expertise" className="hover:text-blue-600 transition font-medium">Expertise</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition font-medium">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition font-medium">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h1 className="text-6xl md:text-6xl font-bold mb-4 leading-tight text-slate-900">
                  Anishka <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Jain</span>
                </h1>
                <p className="text-2xl font-semibold text-slate-700 mb-2">Equity Research & Financial Analyst</p>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Specialized in equity research, valuation modeling, and financial analysis. Transforming complex data into strategic insights.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-blue-700">CMA</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-blue-700">CFA Level 1 Candidate</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-200 transition">
                  Get in Touch
                </a>
                <a href="/resume.pdf" download className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/profile.jpg"
                    alt="Anishka Jain"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm a passionate financial analyst with expertise in equity research and valuation modeling. 
                With a strong foundation in financial analysis and a commitment to continuous learning, I help 
                businesses and investors make informed financial decisions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My approach combines rigorous quantitative analysis with strategic business insights to deliver 
                actionable recommendations. I specialize in transforming complex financial data into clear, 
                compelling narratives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-200 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-600 font-semibold mb-2 text-lg">Experience</h4>
                  <p className="text-slate-700">5+ years in financial analysis and equity research</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-semibold mb-2 text-lg">Certifications</h4>
                  <p className="text-slate-700">CMA, CFA Level 1 Candidate</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-semibold mb-2 text-lg">Focus Areas</h4>
                  <p className="text-slate-700">Valuation modeling, equity research, financial advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Core <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition text-slate-900">Technical Skills</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Financial Modeling & DCF Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Comparable Company Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Precedent Transaction Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Excel VBA & Financial Tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Financial Statement Analysis
                </li>
              </ul>
            </div>

            {/* Domain Expertise */}
            <div className="group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition text-slate-900">Domain Expertise</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Equity Research & Stock Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Sector Analysis & Industry Research
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Business Valuation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Investment Analysis & Recommendations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Financial Advisory
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition text-slate-900">Soft Skills</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Strategic Communication
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Executive Presentations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Research & Data Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Problem Solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Stakeholder Management
                </li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className="group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition text-slate-900">Tools & Platforms</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Microsoft Excel & PowerPoint
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Bloomberg Terminal
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Financial Databases
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Python & SQL
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Tableau & Data Visualization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { id: 1, title: "Technology Sector Equity Analysis", company: "Tech Innovation Corp (TIC)", icon: "💻" },
              { id: 2, title: "Healthcare Industry Valuation Study", company: "MedTech Solutions Inc (MSI)", icon: "🏥" },
              { id: 3, title: "Financial Services DCF Valuation", company: "FinServe Holdings Ltd (FSH)", icon: "💰" },
              { id: 4, title: "Energy Sector Investment Research", company: "GreenPower Energy Corp (GEC)", icon: "⚡" }
            ].map((project) => (
              <div key={project.id} className="group bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition flex items-center justify-center">
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-3 italic">{project.company}</p>
                  <p className="text-slate-600 mb-4">
                    Comprehensive equity analysis and valuation report demonstrating financial modeling expertise and investment insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Valuation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Analysis</span>
                  </div>
                  <a 
                    href={`/research_project_${project.id}.pdf`} 
                    download
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-300 transition"
                  >
                    📥 Download Report
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-slate-700">
              Interested in discussing equity research, valuation analysis, or financial opportunities? I'd love to connect.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-xl hover:shadow-blue-200 transition hover:border-blue-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:cmaanishkajain@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium break-all text-sm">
                cmaanishkajain@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-xl hover:shadow-blue-200 transition hover:border-blue-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.487a1 1 0 00.502.756l4.571 2.286a1 1 0 001.386-1.386l-2.286-4.571a1 1 0 00-.756-.502L7.171 6.228A1 1 0 006.28 5.28L5 2.22A2 2 0 003 2h-1v3.28A2 2 0 003 7v8a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+916263100892" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                +91 62631 00892
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-xl hover:shadow-blue-200 transition hover:border-blue-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.59zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.915.76 1.915 1.715 0 .953-.728 1.715-1.958 1.715zm1.582 11.597H3.635V9.579h3.284v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/anishka-jain0806/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View Profile
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:cmaanishkajain@gmail.com" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-300 transition">
              Send Me an Email
            </a>
            <a href="https://www.linkedin.com/in/anishka-jain0806/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-300 transition">
              Connect on LinkedIn
            </a>
            <a href="/resume.pdf" download className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/anishka-jain0806/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white transition flex items-center justify-center border border-blue-200 hover:border-blue-600" title="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.59zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.915.76 1.915 1.715 0 .953-.728 1.715-1.958 1.715zm1.582 11.597H3.635V9.579h3.284v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="mailto:cmaanishkajain@gmail.com" className="w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white transition flex items-center justify-center border border-blue-200 hover:border-blue-600" title="Email">
              <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+916263100892" className="w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white transition flex items-center justify-center border border-blue-200 hover:border-blue-600" title="Phone">
              <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.487a1 1 0 00.502.756l4.571 2.286a1 1 0 001.386-1.386l-2.286-4.571a1 1 0 00-.756-.502L7.171 6.228A1 1 0 006.28 5.28L5 2.22A2 2 0 003 2h-1v3.28A2 2 0 003 7v8a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-4 text-center text-slate-600 bg-white">
        <p>&copy; 2026 Anishka Jain. All rights reserved. | Crafted with precision and insight.</p>
      </footer>
    </main>
  );
}
