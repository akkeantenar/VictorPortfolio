import PortfolioImage from '@/components/PortfolioImage'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            <PortfolioImage 
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">About</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto md:mx-0"></div>
          </div>
        </div>

        <section className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Background</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              I'm a Senior Software Engineer with <span className="font-semibold text-blue-600">10 years of experience</span> specializing in UX engineering, 
              prototyping, and internal tools. My career has been focused on building the infrastructure 
              and workflows that enable design teams to iterate faster and validate ideas more effectively.
            </p>
            <p className="text-gray-800 leading-relaxed">
              I've worked at <span className="font-semibold text-purple-600">MNTN, Snap Inc, and Netflix</span>, where I've consistently focused on the intersection 
              of design and engineering—building tools that bridge the gap between these disciplines and 
              enable more collaborative, iterative product development.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">My Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Design Enablement</h3>
              <p className="text-gray-800 leading-relaxed text-sm">
                I build tools and workflows that empower designers to prototype and test ideas independently, 
                reducing dependencies on engineering resources for early-stage exploration. This includes 
                AI-assisted content generation, reusable component libraries, and lightweight prototyping frameworks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">Rapid Iteration</h3>
              <p className="text-gray-800 leading-relaxed text-sm">
                Speed is critical in UX validation. I focus on building prototypes that can be assembled 
                in hours rather than days, using component-based architectures and AI-enhanced workflows 
                that accelerate the design-to-test cycle.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-pink-900 mb-3 text-lg">Human-in-the-Loop AI</h3>
              <p className="text-gray-800 leading-relaxed text-sm">
                AI is a powerful tool for UX prototyping, but it requires careful UX design itself. I build 
                agentic workflows that combine multiple AI model calls into cohesive experiences, always 
                maintaining human control and decision points throughout the process.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-2 border-cyan-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg">Cross-Functional Collaboration</h3>
              <p className="text-gray-800 leading-relaxed text-sm">
                I work closely with designers, researchers, and product teams to understand their needs 
                and build tools that fit their workflows. This partnership approach ensures that the tools 
                I build are actually used and valued by the teams they're designed for.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Experience</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 border-l-4 border-blue-700 shadow-lg text-white">
              <h3 className="font-bold text-lg mb-1">Senior Software Engineer</h3>
              <p className="text-blue-100 text-sm mb-3 font-medium">MNTN</p>
              <p className="text-blue-50 text-sm">
                Built internal creative prototyping tools with AI-assisted workflows. Focused on multi-step 
                authoring flows and human-in-the-loop UX decisions for content generation.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 border-l-4 border-purple-700 shadow-lg text-white">
              <h3 className="font-bold text-lg mb-1">Software Engineer</h3>
              <p className="text-purple-100 text-sm mb-3 font-medium">Snap Inc</p>
              <p className="text-purple-50 text-sm">
                Developed internal UX component systems and prototyping tooling for Snapchat for Web. 
                Enabled rapid testing of interaction patterns and AR interface experimentation.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 border-l-4 border-pink-700 shadow-lg text-white">
              <h3 className="font-bold text-lg mb-1">Frontend Engineer</h3>
              <p className="text-pink-100 text-sm mb-3 font-medium">Netflix</p>
              <p className="text-pink-50 text-sm">
                Built interactive prototypes for media playback UX and accessibility validation. 
                Supported UX teams with rapid iteration tools for usability testing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Focus Areas</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✨</span>
                <span>AI-assisted UX prototyping and agentic workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">🧩</span>
                <span>Internal design enablement tools and component systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">⚡</span>
                <span>Rapid prototyping methodologies for research and validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">🤝</span>
                <span>Collaboration tools that bridge design and engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">♿</span>
                <span>Accessibility-first UX prototyping and testing</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

