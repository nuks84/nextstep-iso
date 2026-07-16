import Hero from '../sections/Hero'
import ServicesGrid from '../sections/ServicesGrid'
import WhyUs from '../sections/WhyUs'
import Packages from '../sections/Packages'
import Process from '../sections/Process'
import LatestInsights from '../sections/LatestInsights'
import CallToAction from '../sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <Packages />
      <Process />
      <LatestInsights />
      <CallToAction />
    </>
  )
}
