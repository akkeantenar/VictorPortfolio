// TypeScript State Machine for Multi-Step AI Workflow
// Manages async AI calls with human-in-the-loop pause points

type WorkflowState = 
  | 'idle'           // Initial state, waiting for designer input
  | 'generating'      // AI models processing (GPT + Diffusion)
  | 'reviewing'      // Human review state - designer can edit/override
  | 'iterating'      // Designer requested regeneration
  | 'completed';     // Final output approved

interface WorkflowContext {
  prompt: string;
  generatedText?: string;
  generatedImage?: string;
  designerEdits?: string;
}

class AIWorkflowStateMachine {
  private state: WorkflowState = 'idle';
  private context: WorkflowContext;

  constructor(initialPrompt: string) {
    this.context = { prompt: initialPrompt };
  }

  // Transition to generating state and trigger async AI calls
  async startGeneration(): Promise<void> {
    if (this.state !== 'idle') return;
    
    this.state = 'generating';
    
    // Parallel AI calls with progress tracking
    const [text, image] = await Promise.all([
      this.callGPT(this.context.prompt),
      this.callDiffusion(this.context.prompt)
    ]);
    
    this.context.generatedText = text;
    this.context.generatedImage = image;
    this.state = 'reviewing'; // Pause for human review
  }

  // Human-in-the-loop: designer can edit before proceeding
  applyEdits(edits: string): void {
    if (this.state !== 'reviewing') return;
    this.context.designerEdits = edits;
  }

  // Designer requests regeneration
  async regenerate(): Promise<void> {
    if (this.state !== 'reviewing') return;
    this.state = 'iterating';
    await this.startGeneration(); // Reuse generation logic
  }

  // Designer approves final output
  approve(): void {
    if (this.state !== 'reviewing') return;
    this.state = 'completed';
  }

  // Async AI service calls (simplified)
  private async callGPT(prompt: string): Promise<string> {
    // Simulated async call to OpenAI GPT
    return new Promise(resolve => 
      setTimeout(() => resolve(`Generated text for: ${prompt}`), 1000)
    );
  }

  private async callDiffusion(prompt: string): Promise<string> {
    // Simulated async call to Stable Diffusion
    return new Promise(resolve => 
      setTimeout(() => resolve(`Generated image for: ${prompt}`), 2000)
    );
  }

  getState(): WorkflowState { return this.state; }
  getContext(): WorkflowContext { return { ...this.context }; }
}

