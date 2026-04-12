/**
 * Replace placeholder copy and image paths with your real Agent-hub project details.
 * Iteration representative UI is built in React (`IterationMockups`) — no screenshot required.
 */

export type NavItem = {
  id: string
  label: string
}

export type MetaChip = {
  label: string
  value: string
}

export type HeroScreen = {
  src: string
  alt: string
  label: string
}

export type BulletItem = {
  title: string
  body: string
}

export type DiscoveryFigureKind =
  | 'mapping'
  | 'taxonomyProficiency'
  | 'teamMembers'
  | 'skillsHeatmap'
  | 'competitiveTeam'
  | 'competitivePerson'

export type DiscoveryCard = {
  title: string
  body: string
  /** Optional SVG figures: mapping first, then taxonomy + proficiency beside L5 */
  figures?: readonly DiscoveryFigureKind[]
}

export type IterationScreenCaption = {
  title: string
  body: string
}

export type RepresentativeUI = {
  heading: string
  intro: string
  captions: readonly IterationScreenCaption[]
}

export type CursorPromptVideo = {
  /** Filename or path under `public/` (no leading slash; joined with Vite `base` in UI) */
  src: string
  /** Short description for assistive tech */
  description: string
}

export type CursorPromptExample = {
  /** e.g. Feature, Bug, Copy */
  label: string
  /** Fill-in-the-blank or pattern the agent should follow */
  framework: string
  /** Concrete prompt written with that framework */
  example?: string
  /** Extra guidance (screenshots, tokens, alternate approach) */
  tip?: string
  /** Optional clip shown under the tip (e.g. screen recording) */
  video?: CursorPromptVideo
}

export type CursorHighlight = {
  title: string
  body: string
  promptExamples?: readonly CursorPromptExample[]
}

export type PersonaGoal = {
  role: string
  goal: string
  /** Visual accent for avatar ring and card edge */
  accent: 'amber' | 'violet' | 'teal'
}

export const navItems: NavItem[] = [
  { id: 'challenge', label: 'Challenge' },
  { id: 'design-process', label: 'Design process' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'iteration', label: 'Iteration' },
  { id: 'cursor', label: 'Cursor' },
  { id: 'outcomes', label: 'Outcomes' },
]

export const hero = {
  eyebrow: 'Product design · Atlassian: Symphony',
  title: 'Work force management',
  subtitle:
    'A Skills & Team management App that unified data across the ecosystem to power real-time capacity planning, employee training and smart routing. This was not just a UI update; it was a new "System of Work" built to serve the future of Customer Support Services.',
  meta: [
    { label: 'Role', value: 'Lead Product designer' },
    { label: 'Timeline', value: 'Feb 2026 - Present' },
    { label: 'Tools', value: 'Cursor, Bitbucket, Replit, Figma' },
  ] satisfies MetaChip[],
  screens: [
    {
      src: '/images/hero/team-members.png',
      alt: 'Symphony team workspace: member list, filters, and sidebar',
      label: 'Team roster',
    },
    {
      src: '/images/hero/skills-matrix.png',
      alt: 'Symphony skills matrix: proficiency heatmap across members',
      label: 'Skills matrix',
    },
    {
      src: '/images/hero/skills-catalog.png',
      alt: 'Symphony skills catalog: hierarchical taxonomy',
      label: 'Skills catalog',
    },
    {
      src: '/images/hero/person-profile.png',
      alt: 'Symphony person profile: segments and proficiency',
      label: 'Person profile',
    },
  ] satisfies HeroScreen[],
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
    'From research and audit through an iterative loop on Replit, Cursor, and Figma, into stakeholder reviews, staging commits, backend integration, and UAT—this is how I shipped.',
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
  futureLede:
    'The idea was to design a centralized Workforce Management (WFM) Toolkit within the existing routing tool, to turn skill management from a manual chore into a strategic advantage.',
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
  personasTitle: 'Users and goals',
  personas: [
    {
      role: 'Admin',
      accent: 'amber',
      goal:
        'Manage team membership and skill configurations so the system reflects who is on each team and how tickets should be routed.',
    },
    {
      role: 'Manager',
      accent: 'violet',
      goal:
        "See the team's skills and proficiency to maintain the right roster, close skill gaps, and route tickets to the best-suited members.",
    },
    {
      role: 'Support engineer',
      accent: 'teal',
      goal:
        'Keep skills and proficiency visible so work matches expertise—and surface where to learn missing skills.',
    },
  ] satisfies PersonaGoal[],
  bullets: [
    {
      title: 'Primary jobs-to-be-done',
      body:
        '<b>Skills Registry</b>: A single source of truth to define and categorize technical competencies.<br /><br /><b>Team management and Allocation</b>: Enabling Admins to map Support Engineers (SEs) to customer interactions based on real-time qualifications and capacity.<br /><br /><b>Capacity &amp; Gap Analysis</b>: Data-driven insights to identify where the team needs upskilling or additional headcount.',
    },
    {
      title: 'Success criteria',
      body:
        '<b>Reduced "Time to Assign"</b>: the average time a Lead spent manually cross-referencing spreadsheets vs. using the new automated Skill Registry.<br /><br /><b>Ticket-to-Skill Match Rate</b>: The percentage of Jira tickets handled by an engineer with the verified "Expert" or "Proficient" tag for that specific product area.<br /><br /><b>SE Satisfaction </b>:  internal surveys to measure Support Engineer (SE) sentiment regarding task-fit.<br /><br /><b>Skill Growth Visibility</b>: Track the usage of the "Skills Profile" view to see if SEs were actively monitoring their qualifications, indicating a sense of ownership over their career mobility.<br /><br/><b>Deprecation of Skills Matrix G-sheets. </b> <br /><br /><b>100% of CSS teams using WFM for Skills &amp; Segment Management for their team members</b>',
    },
  
  ] satisfies BulletItem[],
}

export const discovery = {
  id: 'discovery' as const,
  title: 'Research and discovery',
  lede:
    'I kept discovery proportional: understanding the process, system mapping, and competitive patterns from devtools and observability products.',
  cards: [
    {
      title: 'Understanding the process',
      body:
        'I tried to understand how skills are categories and mapped to tasks in the existing system of work. Created .md files to make cursor understand the logic behind mapping and calculation of skills and segments.',
      figures: ['mapping', 'taxonomyProficiency'],
    },
    {
      title: 'Journey and system map',
      body:
        'Mapped the journey of a Support manager from creating a new team to assigning a ticket to a Support engineer. The most important thing for them is to understand skill gap and availability of the right team members.',
      figures: ['teamMembers', 'skillsHeatmap'],
    },
    {
      title: 'Competitive pattens',
      body:
        'I looked at the competitive patterns from other internal workforce management tools and observability products. The main objective was to understand the team and skills management patterns.',
      figures: ['competitiveTeam', 'competitivePerson'],
    },
  ] satisfies DiscoveryCard[],
}

export const iteration = {
  id: 'iteration' as const,
  title: 'Iteration',
  lede:
    'We moved quickly through divergent layouts, then converged on an information architecture that separated “what it is” from “what it did.”',
  representativeUI: {
    heading: 'Screens (representative UI)',
    intro:
      'These are stylized mockups for the narrative—not production screenshots. They illustrate layout intent: truncation, lozenges, and scroll within modals.',
    captions: [
      {
        title: 'Screen A — Catalog row',
        body:
          'Name and requirement suffix stay in the primary column; type and required proficiency use fixed-width lozenges so narrowing the column does not hide operational truth.',
      },
      {
        title: 'Screen B — Coverage view',
        body:
          'A compact heatmap compares proficiency across segments (S1–S4); highlighted cells draw attention to gaps or strengths at a glance.',
      },
      {
        title: 'Screen C — Segment modal',
        body:
          'Editing a segment lists skills with Req or Opt badges and a 1–5 scale; the dotted region scrolls when the list grows.',
      },
    ],
  } satisfies RepresentativeUI,
}

export const cursorSection = {
  id: 'cursor' as const,
  title: 'Designing with Cursor',
  lede:
    'Cursor became the studio: rapid UI prototyping, copy iteration, and component-level refinement with the codebase as the source of truth.',
  highlights: [
    {
      title: 'Things that worked',
      body:
        'I created a framework for prompts, provided screenshots of screens and expected behaviour, linked Figma and real data so outputs stayed aligned with the product.',
      promptExamples: [
        {
          label: 'Feature',
          framework:
            'Feature: Add [feature] on [page/package]. Users should [outcome]. Use Atlaskit like [similar feature]. Include [tests]. Don\'t change [explicit non-goals].',
          example:
            'Add the ability to edit team members actual proficiency on the teams page. Users should be able to click an edit icon against each skill level indicator and change proficiency through a modal; this change should reflect everywhere including the person\'s page. Use the same UI that we have for setting required proficiency.',
          tip:
            'Link screenshots and give as much context as you can. Remind the agent to use Atlaskit.',
        },
        {
          label: 'Bug',
          framework:
            'Bug: “[Page/flow]. In dark mode, [element] is wrong: [symptom]. Should [expected]. Prefer Atlaskit tokens / existing patterns in [area if known].”',
          example:
            'On team members page, in dark mode, the Skill level indicator colours are rendering incorrectly. Use correct inverse colour tokens from Atlaskit to render the Skill level indicator. Make sure this change is implemented across the experience.',
        },
        {
          label: 'Copy',
          framework:
            'Copy: "Replace string A with B everywhere it\'s user-visible in [feature]."',
          tip:
            'For larger content sweeps, point the agent at TypeScript (or similar) source files instead of patching strings one by one.',
          video: {
            // Served from `public/`; path is relative to Vite `base` (see CursorDesign publicAssetUrl)
            src: 'typescript-copy-sweep-example.mov',
            description:
              'Example screen recording: using TypeScript source files for a larger copy change.',
          },
        },
      ],
    },
    {
      title: 'Where I steered vs. where AI accelerated',
      body:
        'AI accelerated layout scaffolding and token naming; I owned problem framing, edge cases, narrative flow, and design QA against real scenarios.',
    },
    {
      title: 'Design system coupling',
      body:
        'I reused primitives (type scale, spacing, buttons) so experiments didn’t fork into one-off CSS—critical when shipping weekly.',
    },
  ] satisfies CursorHighlight[],
}

export const outcomes = {
  id: 'outcomes' as const,
  title: 'Outcomes and reflection',
  lede:
    '',
  bullets: [
    {
      title: 'What improved',
      body:
        'I spent more time on the research and discovery phase and it became foundational to understand the workings of the product, rather than jumping into design phase. As a result, the design was accepted by the stakeholders and we spent a lot of time discussing edge cases and potential improvements.',
    },
    {
      title: 'What I learned',
      body: 'I was able to ship the project faster than expected and the design was accepted by the stakeholders. The feedback loop was very effective and the design was refined through multiple iterations.'
    },
    {
      title: 'What I’d do next',
      body:
        'Since this was my first project with Cursor, a lot of iteration happened through vibe-coding and I did not maintain a proper audit trail for the design changes. I would do that next time.',
    },
  ] satisfies BulletItem[],
}

export const footer = {
  note:
    'This page is a portfolio artifact. All content belongs to Atlassian.',
}