export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
  date?: string
}

export const TAGS = ['React', 'Next.js', 'Prisma', 'PostgreSQL', 'CSS', 'HTML', 'JavaScribt' , 'Bootstrap' , 'Tailwnid'] as const

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Real Estate Dashboard',
    description: 'DashBoard CRUD with Auth and Media Center.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'CSS'],
    github: 'https://github.com/bazokhan/realestate',
    url: 'https://realestate.trugraph.io/dashboard'
  },
  {
    id: 'p2',
    title: 'Game Website Promo',
    description: 'Gaming Website',
    github: 'https://github.com/Isco102345/Assignment---5',
    url: 'https://isco102345.github.io/Assignment---5/',
    tags: ['Javascribt', 'CSS'],
  },
  {
    id: 'p3',
    title: 'Bookmark Website Promo',
    description: 'Bookmark Website',
    github: 'https://github.com/Isco102345/Assignment-2',
    url: 'https://isco102345.github.io/Assignment-2/',
    tags: ['Javascribt', 'CSS'],
  },
  {
    id: 'p4',
    title: 'Smart Login Website Promo',
    description: 'Smart Login Website',
    github: 'https://github.com/Isco102345/Assignment-3',
    url: 'https://isco102345.github.io/Assignment-3/',
    tags: ['Javascribt', 'CSS'],
  },
  {
    id: 'p5',
    title: 'Fresh Cart Website Promo',
    description: 'Fresh Cart e-commerce website',
    github: 'https://github.com/Isco102345/Final-Project',
    url: 'https://github.com/Isco102345/Final-Project',
    tags: ['react', 'CSS'],
  },
  {
    id: 'p6',
    title: 'J-query Website Promo',
    description: 'J-query website',
    github: 'https://github.com/Isco102345/JQUERY2',
    url: 'https://isco102345.github.io/JQUERY2/',
    tags: ['Javascribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p7',
    title: 'Weather Website Promo',
    description: 'Weather website',
    github: 'https://github.com/Isco102345/Assignment---4',
    url: 'https://isco102345.github.io/Assignment---4/',
    tags: ['Javascribt', 'CSS' , 'HTML'],
  },
 
]
