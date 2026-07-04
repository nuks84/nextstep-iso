export function PrintLayout({ tag, title, subtitle, children }) {
  return (
    <div className="bg-white text-[#0f0f0f] flex flex-col" style={{ width: '210mm', height: '297mm', margin: '0 auto', padding: '12mm 18mm' }}>
      <header className="flex items-center justify-between pb-3 border-b border-gray-200 mb-6">
        <img
          src="/NextSteo ISO Logo removebg v2.png"
          alt="NextStep ISO"
          className="h-8 w-auto object-contain"
        />
        <span className="text-[0.75rem] text-gray-400">nextstepiso.com.au</span>
      </header>

      <div className="mb-6">
        {tag && (
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-2">{tag}</p>
        )}
        <h1 className="text-[1.7rem] font-extrabold tracking-tight leading-tight text-[#0f0f0f] mb-2">{title}</h1>
        {subtitle && (
          <p className="text-[0.88rem] text-gray-500 leading-snug max-w-xl">{subtitle}</p>
        )}
      </div>

      {children}

      <footer className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between text-[0.75rem] text-gray-400">
        <span>© {new Date().getFullYear()} NextStep ISO Pty Ltd</span>
        <span>Book a free consultation — nextstepiso.com.au/contact</span>
      </footer>
    </div>
  )
}
