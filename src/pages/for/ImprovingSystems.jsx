import { PageHero } from '../../components/PageHero'
import { Seo } from '../../components/Seo'
import { JsonLd } from '../../components/JsonLd'
import { PersonaContent } from '../../components/PersonaContent'
import { Button } from '../../components/Button'
import CallToAction from '../../sections/CallToAction'

const SITE_URL = 'https://nextstepiso.com.au'

export default function ImprovingSystems() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Improving Existing Systems', item: `${SITE_URL}/for/improving-systems` },
    ],
  }

  return (
    <>
      <Seo
        title="Improving and Simplifying Your Existing ISO Systems"
        description="Simplify compliance, reduce administrative burden, and keep your team focused on running the business. See how NextStep ISO improves existing management systems."
        path="/for/improving-systems"
      />
      <JsonLd data={breadcrumbData} />

      <PageHero
        breadcrumb="Improving Existing Systems"
        tag="Improving Existing Systems"
        title="Simplify compliance, reduce the admin burden"
        subtitle="Simplify compliance, reduce administrative burden, and keep your team focused on running the business."
        cta={<Button to="/contact" arrow size="lg">Get a Free Quote</Button>}
      />

      <PersonaContent
        challenges={[
          "The current system has become bloated with unnecessary paperwork",
          "Documentation is outdated or no longer matches how the business actually operates",
          "The team sees compliance as a burden rather than something useful",
          "Internal audits and management reviews keep getting pushed back",
        ]}
        howWeHelp={[
          "A full review of the existing system to strip out what's not adding value",
          "Streamlined documentation that's easier to maintain and follow",
          "Practical internal audit and review processes the team can own",
          "Ongoing support to keep the system current as the business changes",
        ]}
        outcomes={[
          "A leaner system with less day-to-day administrative work",
          "Renewed confidence at recertification and surveillance audits",
          "A team that engages with the system instead of avoiding it",
          "More time back for the people who were maintaining it manually",
        ]}
      />

      <CallToAction />
    </>
  )
}
