export const authors = {
  ranuka: {
    name: 'Ranuka',
    role: 'Founder, NextStep ISO',
    photo: '/authors/ranuka-avatar.png',
    bio: [
      'Ranuka is the founder of NextStep ISO and has over 15 years of experience working across manufacturing, quality management and continuous improvement.',
      'His experience includes working within large manufacturing organisations across the aerospace, packaging and food manufacturing industries, giving him practical insight into how quality and management systems operate in real-world environments.',
      'Throughout his career, Ranuka has worked with quality management systems, manufacturing processes, continuous improvement initiatives and internal auditing across standards including ISO 9001, ISO 14001, ISO 45001, ISO 22000 and HACCP.',
      'He founded NextStep ISO with a simple goal: to help small and medium-sized Australian businesses navigate ISO certification without unnecessary complexity or paperwork.',
    ],
  },
}

export function getAuthor(key) {
  return authors[key] ?? authors.ranuka
}
