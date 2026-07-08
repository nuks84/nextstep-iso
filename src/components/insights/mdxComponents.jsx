import { SmartLink } from './SmartLink'

// Passed as `components` to each compiled MDX article so plain Markdown
// syntax picks up the site's typography instead of unstyled browser defaults.
export const mdxComponents = {
  h2: (props) => <h2 className="text-[1.55rem] sm:text-[1.8rem] font-extrabold text-gray-900 tracking-tight mt-14 mb-4 scroll-mt-24" {...props} />,
  h3: (props) => <h3 className="text-[1.2rem] font-bold text-gray-900 mt-9 mb-3 scroll-mt-24" {...props} />,
  h4: (props) => <h4 className="text-[1.05rem] font-bold text-gray-900 mt-6 mb-2" {...props} />,
  p: (props) => <p className="text-[1.02rem] text-gray-600 leading-[1.85] mb-5" {...props} />,
  ul: (props) => <ul className="list-disc marker:text-[#0d98cd] pl-5 mb-6 flex flex-col gap-2.5 text-gray-600" {...props} />,
  ol: (props) => <ol className="list-decimal marker:text-[#0d98cd] marker:font-semibold pl-5 mb-6 flex flex-col gap-2.5 text-gray-600" {...props} />,
  li: (props) => <li className="text-[1.02rem] leading-relaxed pl-1.5" {...props} />,
  a: SmartLink,
  strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
  blockquote: (props) => <blockquote className="border-l-[3px] border-[#0d98cd]/40 pl-5 my-7 text-gray-600 italic leading-relaxed" {...props} />,
  hr: () => <hr className="my-12 border-gray-100" />,
  img: (props) => <img className="rounded-2xl my-8 w-full border border-gray-100" loading="lazy" {...props} />,
  code: (props) => <code className="bg-gray-100 text-gray-800 rounded px-1.5 py-0.5 text-[0.85em]" {...props} />,
}
