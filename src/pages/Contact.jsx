import { PageHero } from '../components/PageHero'
import { EnquiryFlow } from '../components/enquiry/EnquiryFlow'

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        tag="Contact Us"
        title="Start your ISO journey today"
        subtitle="Answer a few quick questions and we'll put together a tailored certification roadmap for your business — no obligation, no jargon."
        tightBottom
      />

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <EnquiryFlow />
        </div>
      </section>
    </>
  )
}
