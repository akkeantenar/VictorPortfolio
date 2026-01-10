import Link from 'next/link'
import PortfolioImage from '@/components/PortfolioImage'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <PortfolioImage 
                width={224}
                height={224}
                className="w-48 h-48 md:w-56 md:h-56"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-medium text-gray-600 mb-2">Victor Li</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Senior UX/UI Engineer
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                AI-Assisted UX Prototyping & Internal Tools
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto md:mx-0"></div>
            </div>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none mb-12 animate-slide-up">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Senior Software Engineer with <span className="font-semibold text-blue-600">10 years of experience</span> focused on UX engineering, 
              prototyping, and internal tools. I build <span className="font-semibold text-purple-600">AI-enhanced prototyping workflows</span> and 
              design enablement tools that help teams iterate faster and collaborate more effectively.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              My work centers on creating <span className="font-semibold text-pink-600">agentic, multi-step UX interactions</span> and internal tooling 
              that bridges the gap between design and engineering. I partner closely with designers 
              and researchers to build rapid prototypes used for experimentation and validation.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              This portfolio demonstrates my approach to UX engineering—focusing on enablement, 
              collaboration, and iterative prototyping rather than production metrics.
            </p>
          </div>
        </div>

        <section className="mt-16 mb-16" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="text-3xl font-bold text-gray-900 mb-8 text-gradient">Core Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-blue-900 mb-4 text-lg">Frontend Engineering</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>React, Next.js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>TypeScript, JavaScript</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Tailwind CSS, CSS-in-JS</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>WebGL, WebAssembly</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-purple-900 mb-4 text-lg">AI & Prototyping</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>OpenAI APIs (GPT, Stable Diffusion)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Azure OpenAI</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Figma Plugin API</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Agentic UX workflows</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-pink-900 mb-4 text-lg">Collaboration & Process</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>Design-Engineering partnership</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>UX research integration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>Rapid prototyping methodologies</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>Internal tooling development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="projects-heading">
          <h3 id="projects-heading" className="text-3xl font-bold text-gray-900 mb-8 text-gradient">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/projects/mntn" 
              className="block p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group text-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="text-xl font-bold mb-2">AI-Assisted Creative Prototyping</h4>
                <p className="text-blue-100 mb-3 text-sm font-medium">MNTN • Senior Software Engineer</p>
              </div>
              <p className="text-sm text-blue-50">
                Internal creative prototyping tool with AI-assisted content generation and multi-step authoring flows.
              </p>
            </Link>

            <Link 
              href="/projects/snap" 
              className="block p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl hover:from-purple-600 hover:to-purple-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                  <span className="text-2xl">🧩</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Internal UX Component System</h4>
                <p className="text-purple-100 mb-3 text-sm font-medium">Snap Inc • Software Engineer</p>
              </div>
              <p className="text-sm text-purple-50">
                Reusable UX components and tooling for rapid prototyping and design iteration.
              </p>
            </Link>

            <Link 
              href="/projects/netflix" 
              className="block p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group text-white focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                  <span className="text-2xl">🎬</span>
                </div>
                <h4 className="text-xl font-bold mb-2">UX Prototyping for Media Playback</h4>
                <p className="text-pink-100 mb-3 text-sm font-medium">Netflix • Frontend Engineer</p>
              </div>
              <p className="text-sm text-pink-50">
                Interactive prototypes for playback control UX and accessibility validation.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

