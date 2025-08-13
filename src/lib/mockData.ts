export const courses = [
  {
    id: 'course-1',
    title: 'Public Speaking Mastery',
    price: 49,
    duration: '4 weeks',
    level: 'Beginner',
    description: 'Learn to speak confidently in public.',
    lessons: [
      { id: 'l1', title: 'Introduction', duration: '8:00', videoUrl: 'https://vimeo.com/76979871' },
      { id: 'l2', title: 'Voice & Tone', duration: '12:00', videoUrl: 'https://vimeo.com/22439234' },
    ],
    syllabus: [
      { title: 'Module 1', lessons: ['Intro', 'Basics']},
      { title: 'Module 2', lessons: ['Voice', 'Pacing']}
    ]
  },
  {
    id: 'course-2',
    title: 'Advanced Presentation Skills',
    price: 99,
    duration: '6 weeks',
    level: 'Advanced',
    description: 'Master persuasive presentations.',
    lessons: []
  }
]

export const users = [
  { id: 'u1', name: 'Test User', email: 'test@example.com', password: 'password123', role: 'student' },
  { id: 'admin', name: 'Admin User', email: 'admin@example.com', password: 'adminpass', role: 'admin' }
]

export const blog = [
  { slug: 'improve-your-voice', title: 'Improve Your Voice', excerpt: 'Tips to improve vocal clarity.'},
  { slug: 'engage-your-audience', title: 'Engage Your Audience', excerpt: 'How to keep attention.'}
]
