export default function SnapProject() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-medium text-blue-600">Snap Inc • Software Engineer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-gradient">
            Internal UX Component System for Snapchat Web
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"></div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">Internal Tooling:</span> This component system and prototyping infrastructure 
              was built for internal use by Snap's design and UX teams working on Snapchat Web. It enabled rapid experimentation 
              and research validation without dependencies on production engineering resources.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Internal Tooling</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">React, TypeScript, GraphQL</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">WebGL, WebAssembly</span>
          </div>
        </div>

        {/* Component System Overview */}
        <div className="mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient">Component System Overview</h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Built a three-tier component architecture enabling designers and researchers to rapidly assemble realistic 
            UX prototypes for Snapchat Web experimentation. The system provided base primitives, composed interaction 
            patterns, and full prototype templates, all intentionally decoupled from production services while using 
            realistic GraphQL-backed data schemas to support usability testing and design validation.
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <img 
              src="/snap/component-architecture.svg" 
              alt="Three-Tier UX Prototyping Component Architecture Diagram" 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        <section className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient">Problem / Context</h2>
            <ul className="list-none space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">🌐</span>
                <span>Snapchat Web's large-scale UX required rapid testing of real-time interaction patterns (chat, calling, AR) across multiple product areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">⚡</span>
                <span>Design teams needed realistic, interactive prototypes for usability research and iterative design validation—without waiting for production engineering cycles</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">🔄</span>
                <span>Multiple teams working on web experiences needed consistent, reusable UX patterns to reduce duplication and accelerate experimentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">🛠️</span>
                <span>UX experimentation needed to proceed independently of production development timelines to enable faster design iteration</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Role</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Owned frontend UX component architecture and implementation for internal prototyping infrastructure</li>
            <li>Designed and built reusable React components enabling designers to rapidly assemble realistic prototypes</li>
            <li>Collaborated with design system team to align component APIs with design tokens and interaction patterns</li>
            <li>Partnered with platform teams to integrate GraphQL data structures for realistic prototype experiences</li>
            <li>Worked with UX research teams to ensure prototypes met usability testing requirements</li>
            <li>Established component library documentation, usage patterns, and example prototypes to drive adoption</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Key Challenges</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Component Abstraction Level</h3>
              <p className="text-gray-800">
                <strong>Tradeoff:</strong> Flexibility for experimentation vs. consistency across teams. 
                Too abstract and components become hard to use; too concrete and they limit creative exploration.
                <br /><br />
                <strong>Solution:</strong> Designed a three-tier system (primitives → composed patterns → full prototypes) 
                allowing designers to work at the appropriate abstraction level. This enabled rapid assembly while 
                maintaining design system consistency—critical for realistic UX research validation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-purple-900 mb-2 text-lg">AR Performance in Web Context</h3>
              <p className="text-gray-800">
                <strong>Tradeoff:</strong> Realistic AR interactions vs. browser performance constraints. 
                Prototypes needed to perform well enough for meaningful UX testing, not just visual mockups.
                <br /><br />
                <strong>Solution:</strong> Optimized WebGL/WebAssembly rendering pipelines to maintain 60fps 
                during AR interaction testing. This performance threshold was essential—designers needed to 
                evaluate actual interaction feel, not just visual appearance, for valid research outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-pink-900 mb-2 text-lg">Cross-Team Adoption</h3>
              <p className="text-gray-800">
                <strong>Tradeoff:</strong> Building components vs. ensuring they're actually used. 
                Internal tools only provide value if teams adopt them, requiring clear value demonstration.
                <br /><br />
                <strong>Solution:</strong> Created example prototypes demonstrating component capabilities, 
                usage guides showing common patterns, and documented integration workflows. This reduced 
                adoption friction and showed concrete time savings—enabling faster prototype development 
                without engineering dependencies.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">UX & Interaction Focus</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <ul className="list-none space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">💬</span>
                <span><strong>Real-time interaction patterns:</strong> Built components for chat and calling UX that handled 
                real-time state updates, enabling designers to prototype and test synchronous communication flows</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">🥽</span>
                <span><strong>AR experimentation in browser:</strong> Created WebGL/WebAssembly components for AR interface 
                prototyping, allowing designers to test AR interaction patterns without native app dependencies</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">🧩</span>
                <span><strong>Component-driven assembly:</strong> Enabled designers to rapidly compose new UX flows by 
                combining base components and patterns, reducing prototype development time from days to hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">🔬</span>
                <span><strong>Research validation support:</strong> Prototypes used realistic data structures via GraphQL, 
                making them suitable for usability testing and research studies—critical for validating UX decisions before production</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">🎨</span>
                <span><strong>Design system integration:</strong> Components aligned with Snap's design tokens and interaction 
                patterns, ensuring prototypes accurately represented production UX for reliable research outcomes</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tooling & Tech</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>React</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Prototyping & Testing</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>WebGL / WebAssembly (for AR UX testing)</li>
                <li>Internal prototyping workflows</li>
                <li>Component library and design system integration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Component Architecture</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 mb-4">
            <p className="text-gray-800 mb-4 leading-relaxed">
              Built a three-tier component architecture enabling designers and researchers to rapidly assemble realistic 
              UX prototypes for Snapchat Web experimentation. The system provided base primitives, composed interaction 
              patterns, and full prototype templates, all intentionally decoupled from production services while using 
              realistic GraphQL-backed data schemas to support usability testing and design validation.
            </p>
            <p className="text-gray-800 leading-relaxed font-medium">
              This approach allowed designers to build and iterate on complex interaction flows independently, without 
              waiting on backend or production engineering.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <img 
              src="/snap/component-architecture.svg" 
              alt="Three-Tier UX Prototyping Component Architecture Diagram" 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              Three-tier architecture enabling rapid UX experimentation through reusable primitives, composed patterns, 
              and prototype templates—all decoupled from production services while maintaining realistic data structures 
              for research validation.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Technical Deep-Dive</h2>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 mb-4 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">Component Composition Pattern</h3>
            <p className="text-blue-50 text-sm mb-4">
              Components followed a composition model where higher-level patterns consumed lower-level primitives. 
              This enabled designers to override specific behaviors at any level—customizing a chat bubble's 
              styling while reusing its message handling logic, or swapping AR overlay components while maintaining 
              the same interaction flow. TypeScript interfaces ensured type safety across composition boundaries, 
              reducing runtime errors and improving developer experience for designers building prototypes.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">GraphQL Data Decoupling</h3>
            <p className="text-purple-50 text-sm mb-3">
              Components accepted GraphQL query results as props, allowing prototypes to use the same data 
              structures as production without coupling to production APIs. This decoupling was essential: 
              prototypes could run independently for research while maintaining realistic data shapes. 
              Designers could mock GraphQL responses for rapid iteration or connect to staging endpoints 
              for more realistic testing—providing flexibility without sacrificing prototype realism.
            </p>
            <p className="text-purple-50 text-sm">
              The GraphQL schema alignment ensured that when production APIs changed, component interfaces 
              could be updated independently, preventing prototype breakage and maintaining long-term usability 
              of the component library.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Process & Collaboration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Collaborated with design system team to align component API with design tokens</li>
            <li>Conducted component design reviews with designers before implementation</li>
            <li>Built example prototypes to demonstrate component capabilities</li>
            <li>Created documentation with usage examples and common patterns</li>
            <li>Gathered feedback from research teams on prototype realism and usability</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outcome</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <ul className="list-none space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <span><strong>Designer adoption:</strong> Multiple design teams adopted the component library, 
                enabling them to build prototypes independently without engineering dependencies</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">✓</span>
                <span><strong>Faster iteration:</strong> Prototype development time reduced from days to hours, 
                allowing designers to test more UX variations and iterate more rapidly on research findings</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">✓</span>
                <span><strong>Reduced duplication:</strong> Shared components eliminated redundant UX pattern 
                implementations across teams, improving consistency and reducing maintenance overhead</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">✓</span>
                <span><strong>Better research validation:</strong> Realistic prototypes using GraphQL data structures 
                enabled more accurate usability testing, leading to better-informed UX decisions before production</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">✓</span>
                <span><strong>Foundation for experimentation:</strong> The component library became the standard 
                infrastructure for UX experimentation across Snapchat Web, supporting multiple product initiatives</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

