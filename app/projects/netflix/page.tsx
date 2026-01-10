export default function NetflixProject() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-medium text-blue-600">Netflix • Frontend Engineer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-gradient">
            UX Prototyping for Media Playback & Accessibility
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"></div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">Internal Prototype:</span> This playback control prototype 
              was built for internal UX research and accessibility validation at Netflix. It enabled designers and 
              researchers to test interaction patterns and accessibility features before production implementation, 
              focusing on keyboard navigation, screen reader support, and focus management.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Internal Prototype</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">React, JavaScript</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Accessibility Testing</span>
          </div>
        </div>

        {/* Playback Control Prototype */}
        <div className="mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient">Playback Control Prototype</h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Built an interactive prototype demonstrating accessible media playback controls with full keyboard navigation 
            and screen reader support. The prototype used semantic HTML elements and ARIA attributes to accurately 
            represent production accessibility features, enabling UX teams to validate interaction patterns and 
            accessibility improvements before implementation.
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <img 
              src="/netflix/playback-accessibility-prototype.svg" 
              alt="Playback UX Prototype showing accessible controls with keyboard focus and screen reader annotations" 
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
                <span className="text-blue-500 mr-3 text-xl">🎬</span>
                <span>UX teams needed interactive prototypes to validate playback control interactions and accessibility 
                improvements without dependencies on production engineering resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">♿</span>
                <span>Accessibility improvements required thorough validation—keyboard navigation, screen reader support, 
                and focus management needed to be tested in realistic playback scenarios before production rollout</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">⚡</span>
                <span>Complex interaction patterns in media playback (seeking, buffering, quality changes) needed 
                realistic testing without affecting production systems or requiring full backend integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">🔬</span>
                <span>High importance on usability testing before rollout—prototypes needed to accurately represent 
                production behavior to ensure valid research outcomes</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Role</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Frontend engineer supporting UX and design teams</li>
            <li>Built interactive UI components and prototype flows</li>
            <li>Collaborated with accessibility specialists to ensure prototypes met testing requirements</li>
            <li>Enabled rapid iteration on playback control interactions</li>
            <li>Integrated performance profiling to validate interaction responsiveness</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Key Challenges</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Accessibility-First Prototyping</h3>
              <p className="text-gray-800">
                <strong>Challenge:</strong> Building prototypes that accurately represented accessibility features 
                required semantic HTML and ARIA attributes from the start—not as an afterthought. Prototypes needed 
                to support keyboard navigation, screen reader announcements, and proper focus management to enable 
                valid accessibility testing.
                <br /><br />
                <strong>Approach:</strong> Used semantic &lt;button&gt; elements instead of divs, implemented proper 
                ARIA labels and live regions, and ensured logical tab order. This foundation enabled UX researchers 
                to test accessibility features realistically, catching issues before production implementation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-purple-900 mb-2 text-lg">Complex State Management</h3>
              <p className="text-gray-800">
                <strong>Challenge:</strong> Media playback involves complex state transitions (idle → buffering → 
                playing → seeking → paused) that needed accurate representation in prototypes. State changes also 
                needed to trigger appropriate accessibility announcements.
                <br /><br />
                <strong>Approach:</strong> Built state management patterns that mirrored production behavior, ensuring 
                prototypes accurately represented real playback scenarios. This realism was essential for valid usability 
                testing—researchers needed to evaluate actual interaction patterns, not simplified mockups.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-pink-900 mb-2 text-lg">Performance Validation</h3>
              <p className="text-gray-800">
                <strong>Challenge:</strong> Prototypes needed to perform well enough to validate interaction responsiveness, 
                but also needed rapid development cycles. Balancing performance with development speed was critical.
                <br /><br />
                <strong>Approach:</strong> Optimized critical interaction paths (keyboard event handling, state updates) 
                while keeping the overall prototype lightweight. Used performance profiling tools to validate that interactions 
                felt responsive, ensuring prototypes accurately represented production performance characteristics.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">UX & Interaction Focus</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <ul className="list-none space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">▶️</span>
                <span><strong>Playback control interactions:</strong> Seeking, scrubbing, playback speed adjustment, 
                and quality selection—all accessible via keyboard and screen reader</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">⌨️</span>
                <span><strong>Keyboard navigation:</strong> Full keyboard support with logical tab order, arrow key 
                seeking, and space/Enter activation—ensuring equivalent experience for keyboard-only users</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">🔊</span>
                <span><strong>Screen reader support:</strong> ARIA labels, live region updates, and state announcements 
                keep screen reader users informed of playback state changes in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">🎯</span>
                <span><strong>Focus management:</strong> Visual focus indicators and logical focus flow ensure users 
                can navigate and understand their position in the interface at all times</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">🧪</span>
                <span><strong>Experiment-driven validation:</strong> A/B testing support enabled UX teams to compare 
                different interaction patterns and accessibility implementations before production</span>
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
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Testing & Validation</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Performance profiling tools</li>
                <li>A/B testing support</li>
                <li>Accessibility testing integration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Playback Interaction Flow</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 mb-4">
            <p className="text-gray-800 mb-4 leading-relaxed">
              The interaction flow demonstrates how accessibility checkpoints are integrated throughout the playback 
              experience. Each user action triggers both visual feedback and accessibility announcements, ensuring 
              keyboard and screen reader users have equivalent experiences. Focus management maintains logical tab order 
              and provides clear visual indicators, while screen reader announcements keep users informed of state 
              changes in real-time.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
            <img 
              src="/netflix/playback-interaction-flow.svg" 
              alt="Playback interaction flow diagram showing user actions and accessibility checkpoints" 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Technical Deep-Dive</h2>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 mb-4 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">Accessibility Implementation</h3>
            <p className="text-blue-50 text-sm mb-4">
              Prototypes used semantic HTML elements and comprehensive ARIA attributes to ensure accurate representation 
              of production accessibility features. All interactive controls were implemented as &lt;button&gt; elements 
              with proper keyboard event handling, focus management, and screen reader announcements. This foundation 
              enabled UX researchers to validate accessibility improvements realistically before production implementation.
            </p>
            <div className="bg-blue-700/50 rounded-lg p-4 mt-4 overflow-x-auto">
              <pre className="text-xs text-blue-50 font-mono">
{`// Accessible Playback Control Component
function PlaybackControl({ isPlaying, progress, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      aria-label={isPlaying ? 'Pause video' : 'Play video'}
      aria-pressed={isPlaying}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className="focus:ring-2 focus:ring-blue-500"
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

// Accessible Progress Scrubber
function ProgressScrubber({ value, onChange }) {
  return (
    <div
      role="slider"
      aria-label="Video progress"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={\`\${value}% complete\`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') onChange(value - 5);
        if (e.key === 'ArrowRight') onChange(value + 5);
      }}
    >
      {/* Scrubber UI */}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">A/B Testing Integration</h3>
            <p className="text-purple-50 text-sm">
              Prototypes were designed to support A/B testing frameworks, allowing UX teams to test multiple variations 
              of interaction patterns and accessibility implementations. This enabled data-driven decisions before production 
              implementation—researchers could compare different keyboard navigation patterns, screen reader announcement 
              strategies, and focus management approaches to identify optimal solutions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Process & Collaboration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Worked with accessibility team to define prototype requirements</li>
            <li>Built initial prototype based on design specs and accessibility guidelines</li>
            <li>Conducted usability testing sessions with UX researchers</li>
            <li>Iterated based on feedback from both designers and accessibility specialists</li>
            <li>Documented interaction patterns for production implementation reference</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outcome</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <ul className="list-none space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <span><strong>Improved UX validation:</strong> Designers and researchers could test complex playback 
                interactions and accessibility features before production, enabling data-driven decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">✓</span>
                <span><strong>Accessibility improvements validated early:</strong> Keyboard navigation, screen reader 
                support, and focus management were tested and refined in prototypes, reducing accessibility issues 
                before production rollout</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">✓</span>
                <span><strong>Reduced production risk:</strong> Issues with interaction patterns and accessibility 
                were caught and resolved in the prototype phase, preventing costly fixes after production release</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">✓</span>
                <span><strong>Faster iteration cycles:</strong> Rapid prototype iteration based on usability testing 
                feedback enabled UX teams to refine playback controls more quickly than waiting for production cycles</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">✓</span>
                <span><strong>Confident production rollout:</strong> Thorough prototype validation gave teams confidence 
                that UX changes and accessibility improvements would work as expected in production</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

