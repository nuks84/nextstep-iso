import { PageHero } from '../../components/PageHero'
import { Seo } from '../../components/Seo'
import { JsonLd } from '../../components/JsonLd'
import { PersonaContent } from '../../components/PersonaContent'
import { Button } from '../../components/Button'
import CallToAction from '../../sections/CallToAction'

const SITE_URL = 'https://nextstepiso.com.au'

export default function GrowingBusinesses() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Growing Businesses', item: `${SITE_URL}/for/growing-businesses` },
    ],
  }

  return (
    <>
      <Seo
        title="ISO Systems for Growing Businesses"
        description="Build systems that scale with your business, improve consistency, and support long-term success. See how NextStep ISO supports growing businesses."
        path="/for/growing-businesses"
      />
      <JsonLd data={breadcrumbData} />

      <PageHero
        breadcrumb="Growing Businesses"
        tag="Growing Businesses"
        title="Systems that scale with your business"
        subtitle="Build systems that scale with your business, improve consistency, and support long-term success."
        cta={<Button to="/contact" arrow size="lg">Get a Free Quote</Button>}
      />

      <PersonaContent
        challenges={[
          "Growth is outpacing current processes and controls",
          "Losing tenders or enterprise deals due to a lack of certification",
          "Multiple standards required — quality, safety, environmental, food safety — with no unified system",
          "Inconsistent processes across new sites, teams or locations",
        ]}
        howWeHelp={[
          "Integrated Management System (IMS) design across multiple standards",
          "A fast-track certification pathway for time-sensitive deals",
          "Scalable systems designed to grow with headcount and new sites",
          "Ongoing support to maintain consistency and certification through expansion",
        ]}
        outcomes={[
          "Certification achieved in time to win the contract",
          "A management system that scales with the business, not one it outgrows",
          "Consistent processes and quality across every site and team",
          "A credible, audit-ready business that stands up to enterprise due diligence",
        ]}
      />

      <CallToAction />
    </>
  )
}
