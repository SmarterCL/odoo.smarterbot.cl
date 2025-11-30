import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Integrations } from '../components/Integrations'
import { Automation } from '../components/Automation'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import type { FC, ReactElement } from 'react'

const Page: FC = (): ReactElement => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Integrations />
      <Automation />
      <Contact />
      <Footer />
    </main>
  )
}

export default Page
