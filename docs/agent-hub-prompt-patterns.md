# Prompt patterns that work well (Agent Hub & similar)

This doc captures prompt patterns that worked well in practice, including in threaded chats and monorepo work. It is **not** a claim about “the best prompts for the whole project”—there is no full log of every prompt across all Agent Hub sessions—only patterns worth reusing as templates.

---

## 1. Concrete error + let the agent fix end-to-end

**Example** (from a project thread):

```text
Error: Cannot find module '../../components/TeamManagement/components/SkillRequirementSuffix'
```

**Why it worked:** The failure mode was exact; the agent could grep imports, verify the file, fix paths/exports, and call out git/untracked-file risks.

**Template:** Paste the full error string + which command (build, test, IDE) if relevant.

---

## 2. Desired UI behavior + where it shows up

**Example:**

> When I reduce the skill name column width, the required skill lozenge should stay fixed at the end of the cell … [DOM path] … React Component: …

**Why it worked:** You named the interaction (resize column), the expected layout (lozenge pinned), and location (DOM/component). That maps straight to the right file (e.g. `skills-catalog-columns.tsx`) and flex/ellipsis fixes.

**Template:** User action → expected result → optional DOM snippet or file name.

---

## 3. Bug + container + success criteria

**Example:**

> The content in this modal is overflowing. It should always stay within the bounds … [points at segment-skills-list / Field / modal]

**Why it worked:** Scoped to one surface (modal segment skills), with a clear acceptance test (nothing escapes bounds). That led to scroll regions, grid min widths, sticky header, and name ellipsis in SkillsCatalogContainer + CSS.

**Template:** Which screen/modal + overflow direction (vertical/horizontal/both) + “must stay inside X”.

---

## Meta-pattern (Agent Hub)

Prompts that reference **paths**, **component names**, or **errors** line up with `AGENTS.md`-style rules (scoped lint/test, yarn, Atlaskit)—the agent can navigate the monorepo without guessing.

---

## Optional next step

If you want this as a team doc (“prompt cookbook”), you can add a short `docs/llm/` page in Agent mode in the target repo; Plan mode is better for deciding structure before editing files.
