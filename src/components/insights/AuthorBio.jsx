import { getAuthor } from '../../data/authors'

export function AuthorBio({ authorKey }) {
  const author = getAuthor(authorKey)

  return (
    <section className="mt-4 pt-10 border-t border-gray-100">
      <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-5">About the Author</p>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-7">
        <img
          src={author.photo}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover object-top shrink-0"
        />
        <div>
          <h3 className="text-[1.05rem] font-bold text-gray-900">{author.name}</h3>
          <p className="text-[0.85rem] font-semibold text-[#0d98cd] mb-3">{author.role}</p>
          <div className="flex flex-col gap-3">
            {author.bio.map((paragraph, i) => (
              <p key={i} className="text-[0.875rem] text-gray-600 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
