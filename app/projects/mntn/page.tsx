export default function MNTNProject() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-medium text-blue-600">MNTN • Senior UX/UI Engineer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-gradient">
            AI-Assisted Creative Prototyping Tool
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"></div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">Internal Tool:</span> This prototyping tool was built 
              for internal use by MNTN's creative and UX teams. It enables rapid experimentation and validation 
              of AI-assisted workflows before production implementation, focusing on design enablement rather than 
              customer-facing features.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Internal Tool</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">React, TypeScript</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">OpenAI APIs</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Azure OpenAI</span>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient">System Architecture</h2>
          <p className="text-gray-700 mb-4 text-sm">
            This internal prototyping tool orchestrates multi-step AI workflows through a state machine pattern, 
            enabling designers to iterate on AI-generated content with human-in-the-loop control points. The architecture 
            separates frontend UX concerns from async AI processing, maintaining responsiveness while coordinating 
            parallel model calls (GPT for text, Stable Diffusion for images).
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <img 
              src="/mntn/architecture-diagram.svg" 
              alt="AI-Assisted Creative Prototyping Tool Architecture Diagram" 
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
                <span className="text-blue-500 mr-3 text-xl">💡</span>
                <span>Internal creative and UX teams needed to prototype ideas quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl">⚡</span>
                <span>Designers required interactive previews without waiting on full production builds</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-xl">🔄</span>
                <span>Need for rapid iteration cycles to validate concepts before committing to production development</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Role</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Senior UX/UI Engineer owning frontend UX implementation</li>
            <li>Built interactive prototypes using React and TypeScript</li>
            <li>Worked closely with designers to iterate on flows</li>
            <li>Collaborated with design and research teams to understand prototyping needs</li>
            <li>Designed and implemented AI integration patterns for multi-step workflows</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Key Challenges</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Managing Async AI Workflows</h3>
              <p className="text-gray-800">
                Coordinating multiple AI model calls (GPT for text, Stable Diffusion for images) 
                required careful state management and UX patterns to show progress and allow 
                human intervention at decision points.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-purple-900 mb-2 text-lg">Balancing Speed with Control</h3>
              <p className="text-gray-800">
                Designers needed fast iteration, but also wanted control over AI outputs. 
                I built a system that provided quick defaults with easy override points, 
                maintaining the speed benefit while preserving creative control.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-pink-900 mb-2 text-lg">Reusable Patterns</h3>
              <p className="text-gray-800">
                Creating a prototyping tool that could be extended for different use cases 
                required building a flexible component architecture that designers could 
                compose into new workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">UX & Interaction Focus</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Multi-step creative authoring flows</li>
            <li>AI-assisted content generation with human-in-the-loop decision points</li>
            <li>Preview and iteration loops for rapid design validation</li>
            <li>Human-in-the-loop UX decisions enabling designers to guide AI outputs</li>
            <li>Agentic workflows that combine multiple AI model calls into cohesive user experiences</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tooling & Tech</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>React</li>
                <li>TypeScript</li>
                <li>Internal UX tooling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI & Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>OpenAI APIs (GPT, Stable Diffusion)</li>
                <li>Azure OpenAI integration</li>
                <li>Lightweight Node.js endpoints for async model calls</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Technical Deep-Dive</h2>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 mb-4 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">State Machine Pattern</h3>
            <p className="text-blue-50 text-sm mb-4">
              The workflow orchestrator uses a state machine to manage multi-step AI interactions. 
              States include idle, generating, reviewing, iterating, and completed. Each transition 
              represents a decision point where designers can pause, edit, or proceed. This pattern 
              ensures predictable UX behavior during async operations and provides clear hooks for 
              progress indicators and error handling.
            </p>
            <div className="bg-blue-700/50 rounded-lg p-4 mt-4 overflow-x-auto">
              <pre className="text-xs text-blue-50 font-mono">
{`// TypeScript State Machine for Multi-Step AI Workflow
type WorkflowState = 
  | 'idle'           // Initial state, waiting for designer input
  | 'generating'      // AI models processing (GPT + Diffusion)
  | 'reviewing'      // Human review state - designer can edit/override
  | 'iterating'      // Designer requested regeneration
  | 'completed';     // Final output approved

class AIWorkflowStateMachine {
  private state: WorkflowState = 'idle';
  
  async startGeneration(): Promise<void> {
    this.state = 'generating';
    // Parallel AI calls with progress tracking
    const [text, image] = await Promise.all([
      this.callGPT(prompt),
      this.callDiffusion(prompt)
    ]);
    this.state = 'reviewing'; // Pause for human review
  }
  
  applyEdits(edits: string): void {
    if (this.state !== 'reviewing') return;
    this.context.designerEdits = edits;
  }
  
  async regenerate(): Promise<void> {
    this.state = 'iterating';
    await this.startGeneration();
  }
}`}
              </pre>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">AI Integration Strategy</h3>
            <p className="text-purple-50 text-sm mb-3">
              Lightweight Node.js endpoints handle async AI model calls, streaming responses back 
              to the React frontend. This separation maintains frontend responsiveness during AI 
              processing. The frontend uses WebSocket connections or polling to receive incremental 
              updates, enabling real-time progress indicators. Error boundaries and retry logic 
              ensure graceful handling of API failures, maintaining a smooth designer experience 
              even when AI services are slow or unavailable.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Process & Collaboration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Started with design workshops to understand prototyping pain points</li>
            <li>Built initial prototype in 2 weeks for early feedback</li>
            <li>Iterated weekly based on designer usage and feedback</li>
            <li>Documented reusable patterns as they emerged from real usage</li>
            <li>Conducted usability sessions with design team to refine workflows</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outcome</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Faster experimentation for designers—prototypes available in hours instead of days</li>
            <li>Reusable UI patterns for future prototypes, reducing setup time</li>
            <li>Improved collaboration between design and engineering through shared prototyping tools</li>
            <li>Designers gained ability to test AI-assisted workflows before production implementation</li>
            <li>Tool became standard for early-stage creative exploration across the team</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

