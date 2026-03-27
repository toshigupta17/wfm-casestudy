/**
 * Replace placeholder copy and image paths with your real Agent-hub project details.
 * Add files under public/images/ and set `src` on iteration frames below.
 */

export type NavItem = {
  id: string
  label: string
}

export type MetaChip = {
  label: string
  value: string
}

export type BulletItem = {
  title: string
  body: string
}

export type DiscoveryCard = {
  title: string
  body: string
}

export type IterationFrame = {
  /** Replace with `/images/your-file.png` when ready */
  imageSrc: string | null
  imageAlt: string
  caption: string
  body: string
}

export type CursorHighlight = {
  title: string
  body: string
}

export type HandoffItem = {
  label: string
  detail: string
  /** Set to true when you replace with a real URL */
  isPlaceholderLink?: boolean
}

export const navItems: NavItem[] = [
  { id: 'challenge', label: 'Challenge' },
  { id: 'design-process', label: 'Design process' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'iteration', label: 'Iteration' },
  { id: 'cursor', label: 'Cursor' },
  { id: 'handoff', label: 'Handoff' },
  { id: 'outcomes', label: 'Outcomes' },
]

export const hero = {
  eyebrow: 'Product design · Atlassian: Symphony',
  title: 'Work force management',
  subtitle:
    'Atlassians support skills were trapped in silos. I led the design of a Skills & Team management App that unified data across the ecosystem to power real-time capacity planning, employee training and smart routing. This was not just a UI update; it was a new "System of Work" built to serve the future of Customer Support Services.',
  meta: [
    { label: 'Role', value: 'Lead Product designer' },
    { label: 'Timeline', value: 'Feb 2026 - Present' },
    { label: 'Tools', value: 'Cursor, Bitbucket, Replit, Figma' },
  ] satisfies MetaChip[],
}

export const challenge = {
  id: 'challenge' as const,
  title: 'The challenge',
  lede:
    'Atlassian lacked a unified "System of Work" for managing Customer Support teams and their skills. Instead, Team Leads relied on a fragmented ecosystem of Google Sheets, Confluence pages, and Jira tickets. This "manual-first" approach created data silos, making it nearly impossible to gain a real-time view of talent.',
  bullets: [
    {
      title: 'Sub-optimal Utilisation',
      body:
        'Support Engineers were often assigned tasks that did not match their expertise.',
    },
    {
      title: 'Stifled Mobility',
      body:
        'High-performers remained "hidden" in spreadsheets, limiting their growth.'
    },
    {
      title: 'Customer Friction',
      body:
        'Without a cohesive E2E view, we could not consistently guarantee the right skill for the right customer interaction.',
    },
  ] satisfies BulletItem[],
}

export const designProcess = {
  id: 'design-process' as const,
  title: 'Design process',
  lede:
    'From research and audit through an iterative loop on Replit, Cursor, and Figma, into stakeholder reviews, staging commits, backend integration, and UAT—this is how we shipped.',
  discovery: [
    'Understand the requirements, painpoints and use-cases',
    'Audit the existing product and precedence',
  ],
  cycleHubLabel: 'Iterative hub',
  cycleFootnote: 'Loop until design and build stay aligned.',
  cycle: [
    'Vibe coding on Replit and get alignment',
    'Vibe coding on Cursor with real backend data in staging environment',
    'Brainstorming on Figma to finalise the IA',
  ],
  feedbackLabel: 'Feedback loop',
  reviews: 'Stakeholder and design reviews',
  staging: 'Commit changes to staging',
  devIntegration: 'Dev integration with backend and review',
  devIntegrationHint: 'Runs in parallel with the release track',
  launch: 'UAT & launch',
} as const

/** Current-state diagram (Challenge) and proposed-solution diagram (Requirements). Edit labels to match your narrative. */
export const challengeComparison = {
  messyTitle: 'The messy middle',
  messySubtitle: 'Fragmented spreadsheets, static docs, and tickets—disconnected sources of truth.',
  currentBar: 'Current state',
  dataDebt: 'Data debt',
  frictionHints: ['Duplicated efforts', 'Fragmented sources of truth'],
  tools: [
    {
      icon: 'googlesheets' as const,
      name: 'Google Sheets',
      tags: ['Manual skill tracking', 'Outdated data', "Team leads' silos"],
    },
    {
      icon: 'confluence' as const,
      name: 'Confluence',
      tags: ['Skills definitions', 'Process documentation', 'Wiki articles'],
    },
    {
      icon: 'jira' as const,
      name: 'Jira',
      tags: ['Assignment history', 'No skill-to-task match', 'Fragmented workflow'],
    },
  ],
  futureTitle: 'Unified WFM toolkit',
  futureSubtitle: 'Proposed solution',
  pillars: [
    {
      title: 'Skills management',
      items: [
        'Skills registry (verified competencies)',
        'Smart allocation (skill-to-task match)',
        'SE profiles (growth & mobility)',
      ],
    },
    {
      title: 'Capacity planning',
      items: ['Availability', 'Gap analysis', 'Headcount forecasting'],
    },
    {
      title: 'Real-time insights',
      items: ['Utilization metrics', 'Skill demand trends'],
    },
  ],
  outcomesLabel: 'Outcomes',
  outcomes: 'Optimized utilization · Increased mobility · Higher CSAT',
  futureBar: 'Modernized unified platform',
}

export const requirements = {
  id: 'requirements' as const,
  title: 'Requirements and alignment',
  lede:
    'We aligned on a narrow problem statement and measurable outcomes before pixels, so later debates stayed grounded in user and business constraints. We decided to build a centralized Workforce Management Admin Hub within Symphony App, which is our existing Ticket routing tool) designed to turn skill management from a manual chore into a strategic advantage.',
  bullets: [
    {
      title: 'Primary jobs-to-be-done',
      body:
        '[Replace] e.g. Evaluate an agent’s scope, launch it safely, and review runs with enough context to intervene—without leaving the hub.',
    },
    {
      title: 'Success criteria',
      body:
        '[Replace] e.g. Time-to-first-successful-run, reduction in misconfiguration support tickets, qualitative trust in review flows.',
    },
    {
      title: 'Non-goals (explicit)',
      body:
        '[Replace] e.g. Building a full model playground or replacing your existing ticketing stack—those were out of scope for v1.',
    },
  ] satisfies BulletItem[],
}

export const discovery = {
  id: 'discovery' as const,
  title: 'Research and discovery',
  lede:
    'We kept discovery proportional: lightweight interviews, workflow mapping, and competitive patterns from devtools and observability products.',
  cards: [
    {
      title: 'Operator interviews',
      body:
        '[Replace] Summarize who you spoke with, what broke in their workflow, and the exact phrases they used (those become UI labels).',
    },
    {
      title: 'Journey and system map',
      body:
        'We mapped discover → configure → run → review to expose where anxiety spiked (usually permissions and failure handling).',
    },
    {
      title: 'Design principles',
      body:
        'Clarity over cleverness; progressive disclosure for power; always show “why” next to “what” when surfacing agent actions.',
    },
  ] satisfies DiscoveryCard[],
}

export const iteration = {
  id: 'iteration' as const,
  title: 'Iteration',
  lede:
    'We moved quickly through divergent layouts, then converged on an information architecture that separated “what it is” from “what it did.”',
  frames: [
    {
      imageSrc: null,
      imageAlt: 'Placeholder wireframe or early layout for Agent-hub overview',
      caption: 'Early IA exploration — [replace screenshot]',
      body:
        'First passes prioritized scanability of agent status and ownership; we later tightened hierarchy once review flows stabilized.',
    },
    {
      imageSrc: null,
      imageAlt: 'Placeholder mid-fidelity UI for agent detail and runs',
      caption: 'Mid-fidelity — [replace screenshot]',
      body:
        'Detail views absorbed feedback on diffing runs, surfacing tool calls, and making policy exceptions legible.',
    },
  ] satisfies IterationFrame[],
}

export const cursorSection = {
  id: 'cursor' as const,
  title: 'Designing with Cursor',
  lede:
    'Cursor became the studio: rapid UI prototyping, copy iteration, and component-level refinement with the codebase as the source of truth.',
  highlights: [
    {
      title: 'Prompts that worked',
      body:
        '[Replace] e.g. “Refactor this panel into a two-column layout with a sticky actions rail and accessible focus order.” Keep examples concrete—they signal how you collaborate with AI.',
    },
    {
      title: 'Where I steered vs. where AI accelerated',
      body:
        'AI accelerated layout scaffolding and token naming; I owned problem framing, edge cases, narrative flow, and design QA against real scenarios.',
    },
    {
      title: 'Design system coupling',
      body:
        'We reused primitives (type scale, spacing, buttons) so experiments didn’t fork into one-off CSS—critical when shipping weekly.',
    },
  ] satisfies CursorHighlight[],
}

export const handoff = {
  id: 'handoff' as const,
  title: 'Handoff',
  lede:
    'Handoff combined annotated Figma, behavior notes for states and errors, and a short checklist for engineering and QA.',
  items: [
    {
      label: 'Figma',
      detail: '[Replace] Link to file + named pages for flows and components.',
      isPlaceholderLink: true,
    },
    {
      label: 'Specs',
      detail: 'Responsive breakpoints, empty/loading/error, keyboard order, and copy deck for microcopy.',
      isPlaceholderLink: true,
    },
    {
      label: 'Tokens',
      detail: '[Replace] Mapped to your design tokens or Tailwind theme as used in implementation.',
      isPlaceholderLink: true,
    },
    {
      label: 'QA scenarios',
      detail: 'Happy path, permission denial, tool failure, and retry—each with expected UI and telemetry hooks.',
      isPlaceholderLink: true,
    },
  ] satisfies HandoffItem[],
}

export const outcomes = {
  id: 'outcomes' as const,
  title: 'Outcomes and reflection',
  lede:
    '[Replace] What shipped, what moved (metrics or quotes), and what you would tighten next—honesty reads better than polish alone.',
  bullets: [
    {
      title: 'What improved',
      body:
        '[Replace] e.g. Faster onboarding to first successful run; clearer audit trail for operators; fewer misconfiguration errors in pilot.',
    },
    {
      title: 'What I’d do next',
      body:
        '[Replace] e.g. Deeper templates for industry-specific agents; stronger diff UX across runs; more guided policy authoring.',
    },
  ] satisfies BulletItem[],
}

export const footer = {
  note:
    'This page is a portfolio artifact. Replace placeholders in src/content/caseStudy.ts and add screenshots to public/images/.',
}
