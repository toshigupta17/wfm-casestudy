import { useId, type ReactElement } from 'react'
import type { DiscoveryFigureKind } from '../../content/caseStudy'
import {
  CompetitivePersonPageFigure,
  CompetitiveTeamPageFigure,
} from './competitiveFigures'
import { SkillsHeatmapFigure, TeamMembersFigure } from './journeyFigures'

/**
 * SVG figures for skill proficiency, hierarchy (L1–L5), and mapping logic.
 * Styled to match the case study glass / dark theme.
 */

const proficiency = [
  { n: 1, fill: '#6b7280', ring: false },
  { n: 2, fill: '#b58900', ring: false },
  { n: 3, fill: '#3b82f6', ring: false },
  { n: 4, fill: '#8b5cf6', ring: false },
  { n: 5, fill: '#4d7c0f', ring: true },
] as const

const hierarchyLevels = [
  { level: 'L1', label: 'CATEGORY', fill: 'rgba(59, 130, 246, 0.85)' },
  { level: 'L2', label: 'PLATFORM', fill: 'rgba(139, 92, 246, 0.85)' },
  { level: 'L3', label: 'PRODUCT', fill: 'rgba(132, 204, 22, 0.85)' },
  { level: 'L4', label: 'SEGMENT', fill: 'rgba(245, 158, 11, 0.88)' },
  { level: 'L5', label: 'SKILL', fill: 'rgba(148, 163, 184, 0.9)' },
] as const

/** L1–L5 taxonomy with proficiency scale aligned beside the SKILL pill (same SVG). */
function SkillTaxonomyWithProficiencyFigure() {
  const pillW = 132
  const pillH = 38
  const stepY = 54
  const stepX = 36
  const baseX = 56
  const baseY = 28

  const boxes = hierarchyLevels.map((row, i) => ({
    ...row,
    x: baseX + i * stepX,
    y: baseY + i * stepY,
  }))

  const paths: string[] = []
  for (let i = 0; i < boxes.length - 1; i++) {
    const a = boxes[i]
    const b = boxes[i + 1]
    const ax = a.x + pillW / 2
    const ay = a.y + pillH
    const bx = b.x + pillW / 2
    const by = b.y
    const midY = ay + (by - ay) * 0.45
    paths.push(
      `M ${ax} ${ay} L ${ax} ${midY} L ${bx} ${midY} L ${bx} ${by}`,
    )
  }

  const l5 = boxes[4]
  const profGap = 18
  const profR = 11
  const profStep = 27
  const profCx0 = l5.x + pillW + profGap + profR
  const profCy = l5.y + pillH / 2
  const labelY = l5.y - 6
  const numY = l5.y + pillH + 14

  const w = profCx0 + (proficiency.length - 1) * profStep + profR + 28
  const h = 318

  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white px-2 py-4 sm:px-4"
      aria-label="Skill taxonomy L1 through L5 with proficiency scale beside skill"
    >
      <figcaption className="mb-3 shrink-0 px-2 text-sm font-medium tracking-wide text-slate-800">
        Skill taxonomy (L1–L5) and proficiency
      </figcaption>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="xMidYMid meet"
          className="mx-auto h-full min-h-[200px] w-full max-w-full flex-1 text-slate-400 md:max-w-[720px]"
          role="img"
          aria-hidden
        >
          <title>Category to skill hierarchy with proficiency next to skill level</title>
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {boxes.map((b) => (
            <g key={b.level}>
              <text
                x={b.x - 8}
                y={b.y + pillH / 2 + 5}
                textAnchor="end"
                fill="rgba(255,255,255,0.5)"
                style={{ fontSize: 13, fontFamily: 'var(--font-sans, system-ui)' }}
              >
                {b.level}
              </text>
              <rect
                x={b.x}
                y={b.y}
                width={pillW}
                height={pillH}
                rx={10}
                fill={b.fill}
              />
              <text
                x={b.x + pillW / 2}
                y={b.y + pillH / 2 + 5}
                textAnchor="middle"
                fill="#1a1a1a"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-sans, system-ui)',
                }}
              >
                {b.label}
              </text>
            </g>
          ))}

          <text
            x={profCx0}
            y={labelY}
            fill="rgba(255,255,255,0.55)"
            style={{ fontSize: 11, fontFamily: 'var(--font-sans, system-ui)' }}
          >
            Skill proficiency
          </text>
          {proficiency.map(({ n, fill, ring }, i) => {
            const cx = profCx0 + i * profStep
            return (
              <g key={n}>
                <circle
                  cx={cx}
                  cy={profCy}
                  r={ring ? profR - 0.5 : profR}
                  fill={fill}
                  stroke={ring ? '#60a5fa' : 'none'}
                  strokeWidth={ring ? 2 : 0}
                />
                <text
                  x={cx}
                  y={numY}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.88)"
                  style={{ fontSize: 11, fontFamily: 'var(--font-sans, system-ui)' }}
                >
                  {n}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </figure>
  )
}

function SkillMappingFigure() {
  const uid = useId().replace(/:/g, '')
  const solidId = `m-solid-${uid}`
  const dashId = `m-dash-${uid}`

  const w = 440
  const h = 292
  const nodeW = 118
  const nodeH = 38
  const cx = w / 2
  const chain = [
    { id: 'cat', label: 'Category', y: 32 },
    { id: 'l1', label: 'Level 1', y: 92 },
    { id: 'l2', label: 'Level 2', y: 152 },
    { id: 'l3', label: 'Level 3', y: 212 },
    { id: 'root', label: 'Root skill', y: 258 },
  ] as const

  const rootY = chain[4].y
  const rootTop = rootY - nodeH / 2

  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/90 px-2 py-4 sm:px-4"
      aria-label="Mapping logic: hierarchy and direct paths to root skill"
    >
      <figcaption className="mb-3 shrink-0 px-2 text-sm font-medium tracking-wide text-slate-800">
        Mapping logic
      </figcaption>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="xMidYMid meet"
          className="mx-auto h-full min-h-[200px] w-full max-w-[440px] flex-1"
          role="img"
          aria-hidden
        >
          <defs>
            <marker
              id={solidId}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.55)" />
            </marker>
            <marker
              id={dashId}
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(255,255,255,0.38)" />
            </marker>
          </defs>

          {/* Main vertical chain (behind nodes) */}
          {chain.slice(0, -1).map((node, i) => {
            const next = chain[i + 1]
            const y1 = node.y + nodeH / 2
            const y2 = next.y - nodeH / 2
            return (
              <line
                key={`${node.id}-${next.id}`}
                x1={cx}
                y1={y1}
                x2={cx}
                y2={y2}
                stroke="rgba(255,255,255,0.42)"
                strokeWidth="1.5"
                markerEnd={`url(#${solidId})`}
              />
            )
          })}

          {/* Tier highlight: Level 1 row (reference: multiple L1 peers) */}
          <rect
            x={cx - nodeW / 2 - 10}
            y={chain[1].y - nodeH / 2 - 8}
            width={nodeW * 2 + 56}
            height={nodeH + 16}
            rx={10}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <rect
            x={cx + nodeW / 2 + 18}
            y={chain[1].y - nodeH / 2}
            width={nodeW}
            height={nodeH}
            rx={8}
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x={cx + nodeW / 2 + 18 + nodeW / 2}
            y={chain[1].y + 5}
            textAnchor="middle"
            fill="rgba(255,255,255,0.82)"
            style={{ fontSize: 11, fontFamily: 'var(--font-sans, system-ui)' }}
          >
            Level 1
          </text>

          {/* Dashed shortcuts to root */}
          {chain.slice(0, 3).map((node) => {
            const sx = cx + nodeW / 2 + 2
            const sy = node.y
            const tx = cx + nodeW / 2 + 56
            const ty = rootTop - 2
            return (
              <path
                key={`dash-${node.id}`}
                d={`M ${sx} ${sy} C ${tx} ${sy}, ${tx} ${ty - 40}, ${cx + 28} ${ty}`}
                fill="none"
                stroke="rgba(255,255,255,0.26)"
                strokeWidth="1.25"
                strokeDasharray="5 5"
                markerEnd={`url(#${dashId})`}
              />
            )
          })}

          <text
            x={cx + nodeW / 2 + 62}
            y={(chain[0].y + rootY) / 2 + 4}
            fill="rgba(255,255,255,0.4)"
            style={{ fontSize: 11, fontFamily: 'var(--font-sans, system-ui)' }}
          >
            or direct
          </text>

          {/* Reverse: root → peer Level 1 */}
          <path
            d={`M ${cx + 6} ${rootY + nodeH / 2} Q ${cx + 52} ${rootY - 28} ${cx + nodeW / 2 + 18 + nodeW / 2} ${chain[1].y + nodeH / 2}`}
            fill="none"
            stroke="rgba(124, 240, 214, 0.4)"
            strokeWidth="1.35"
            markerEnd={`url(#${solidId})`}
          />

          {/* Nodes on top */}
          {chain.map((node) => (
            <g key={node.id}>
              <rect
                x={cx - nodeW / 2}
                y={node.y - nodeH / 2}
                width={nodeW}
                height={nodeH}
                rx={8}
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.16)"
              />
              <text
                x={cx}
                y={node.y + 5}
                textAnchor="middle"
                fill="rgba(255,255,255,0.9)"
                style={{ fontSize: 11, fontFamily: 'var(--font-sans, system-ui)' }}
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="mt-auto shrink-0 px-2 pt-2 text-center text-xs leading-relaxed text-slate-600">
        The root is a skill that can be mapped to multiple segments.
      </p>
    </figure>
  )
}

const FIGURE_MAP: Record<DiscoveryFigureKind, () => ReactElement> = {
  mapping: SkillMappingFigure,
  taxonomyProficiency: SkillTaxonomyWithProficiencyFigure,
  teamMembers: TeamMembersFigure,
  skillsHeatmap: SkillsHeatmapFigure,
  competitiveTeam: CompetitiveTeamPageFigure,
  competitivePerson: CompetitivePersonPageFigure,
}

export function DiscoveryProcessFigures({ kinds }: { kinds: readonly DiscoveryFigureKind[] }) {
  const gridCols =
    kinds.length >= 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2'

  return (
    <div
      className={[
        'grid gap-6 md:items-stretch md:gap-5',
        gridCols,
      ].join(' ')}
    >
      {kinds.map((kind) => {
        const Cmp = FIGURE_MAP[kind]
        return (
          <div key={kind} className="flex h-full min-h-0 min-w-0">
            <Cmp />
          </div>
        )
      })}
    </div>
  )
}
