import { Challenge } from './components/sections/Challenge'
import { DesignProcess } from './components/sections/DesignProcess'
import { CursorDesign } from './components/sections/CursorDesign'
import { Discovery } from './components/sections/Discovery'
import { Footer } from './components/sections/Footer'
import { Handoff } from './components/sections/Handoff'
import { Hero } from './components/sections/Hero'
import { Iteration } from './components/sections/Iteration'
import { Outcomes } from './components/sections/Outcomes'
import { Requirements } from './components/sections/Requirements'
import { PageShell } from './components/layout/PageShell'
import { StickyNav } from './components/layout/StickyNav'

function App() {
  return (
    <PageShell nav={<StickyNav />}>
      <Hero />
      <Challenge />
      <DesignProcess />
      <Requirements />
      <Discovery />
      <Iteration />
      <CursorDesign />
      <Handoff />
      <Outcomes />
      <Footer />
    </PageShell>
  )
}

export default App
