import { PageHero } from '../../components/PageHero'
import { Seo } from '../../components/Seo'
import { JsonLd } from '../../components/JsonLd'
import { PersonaContent } from '../../components/PersonaContent'
import { Button } from '../../components/Button'
import CallToAction from '../../sections/CallToAction'

const SITE_URL = 'https://nextstepiso.com.au'

export default function FirstCertification() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'First Certification', item: `${SITE_URL}/for/first-certification` },
    ],
  }

  return (
    <>
      <Seo
        title="Preparing for Your First ISO Certification"
        description="Implement practical management systems that are built around your business, not generic templates. See how NextStep ISO prepares you for your first certification."
        path="/for/first-certification"
      />
      <JsonLd data={breadcrumbData} />

      <PageHero
        breadcrumb="First Certification"
        tag="Preparing for Your First Certification"
        title="Practical systems for your first certification"
        subtitle="Implement practical management systems that are built around your business, not generic templates."
        cta={<Button to="/contact" arrow size="lg">Get a Free Quote</Button>}
      />

      <PersonaContent
        challenges={[
          "Not sure where to start or which standard applies — ISO 9001, 14001, 22000 or 45001",
          "Existing processes are undocumented or exist only in people's heads",
          "Concerned a generic, off-the-shelf template won't reflect how the business actually works",
          "Worried about the time, cost and disruption of a first certification",
        ]}
        howWeHelp={[
          "A clear gap analysis showing exactly what's needed before you start",
          "Documentation and procedures built around how the business already operates",
          "A fixed-price, milestone-based process from kickoff to certificate",
          "Hands-on preparation and support through the certification audit itself",
        ]}
        outcomes={[
          "A management system that's simple enough for the team to actually use",
          "Confidence walking into the first certification audit",
          "A credential that opens the door to new contracts and tenders",
          "A solid foundation to build on as the business grows",
        ]}
      />

      <CallToAction />
    </>
  )
}
