# Component Architecture Diagram Description

## Title
Three-Tier UX Prototyping Component Architecture

## Visual Structure

The diagram shows a hierarchical, layered architecture with four distinct tiers:

### Tier 3: Prototype Templates (Top Layer - Blue)
- **Chat Experience** - Complete chat UX flows
- **Calling Experience** - Full calling interface prototypes  
- **AR Interaction Prototypes** - AR interface experimentation flows
- Shows complete UX flows assembled from patterns below

### Tier 2: Interaction Patterns (Middle Layer - Purple)
- **Chat Message Patterns** - Reusable chat message components
- **Presence Indicators** - User presence/status components
- **Media Playback Controls** - Media interaction components
- **Typing Indicators** - Real-time typing state components
- **Real-time Updates** - Live state management patterns
- Shows composed patterns reusable across multiple prototypes

### Tier 1: Base Primitives (Bottom Layer - Pink)
- **Buttons** - Basic button components
- **Inputs** - Form input components
- **Lists** - List and list item components
- **Layout Components** - Grid, flex, container components
- **Icons** - Icon system components
- **Typography** - Text styling components
- **Spacing Utilities** - Layout spacing helpers
- Shows foundational building blocks with design system integration

### Data Layer (Foundation - Cyan)
- **GraphQL Queries** - Data fetching layer
- **Realistic Production-Aligned Schemas** - Data structure definitions
- **⚠ Decoupled from Production Services** - Explicit note that this is prototype-only

## Key Visual Elements

- **Downward arrows** show composition flow: Templates → Patterns → Primitives → Data
- **Color coding** distinguishes each tier for clarity
- **Explicit decoupling note** emphasizes this is internal prototyping infrastructure
- **Component examples** listed in each tier show concrete implementation details

## Architecture Benefits

This diagram visually communicates:
1. **Reusability** - Lower tiers are reused across higher tiers
2. **Flexibility** - Designers can work at any abstraction level
3. **Composition** - Higher-level components compose lower-level ones
4. **Decoupling** - Clear separation from production services
5. **Realism** - Data layer uses production-aligned schemas for research validity

## Usage Context

This architecture enabled:
- Rapid UX experimentation without production dependencies
- Designer independence in prototype assembly
- Consistent patterns across multiple prototype flows
- Realistic research validation through production-aligned data structures

