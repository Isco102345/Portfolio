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
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'CSS', 'Tailwnid'],
    github: 'https://github.com/bazokhan/realestate',
    url: 'https://realestate.trugraph.io/dashboard',
  },
  {
    id: 'p2',
    title: 'Game Website Promo',
    description: 'Gaming Website',
    github: 'https://github.com/Isco102345/Assignment---5',
    url: 'https://isco102345.github.io/Assignment---5/',
    tags: ['JavaScribt', 'CSS','Bootstrap'],
  },
  {
    id: 'p3',
    title: 'Bookmark Website Promo',
    description: 'Bookmark Website',
    github: 'https://github.com/Isco102345/Assignment-2',
    url: 'https://isco102345.github.io/Assignment-2/',
    tags: ['JavaScribt', 'CSS'],
  },
  {
    id: 'p4',
    title: 'Smart Login Website Promo',
    description: 'Smart Login Website',
    github: 'https://github.com/Isco102345/Assignment-3',
    url: 'https://isco102345.github.io/Assignment-3/',
    tags: ['JavaScribt', 'CSS' ,'Bootstrap'],
  },
  {
    id: 'p5',
    title: 'Fresh Cart Website Promo',
    description: 'Fresh Cart e-commerce website',
    github: 'https://github.com/Isco102345/Final-Project',
    url: 'https://github.com/Isco102345/Final-Project',
    tags: ['React', 'CSS'],
  },
  {
    id: 'p6',
    title: 'J-query Website Promo',
    description: 'J-query website',
    github: 'https://github.com/Isco102345/JQUERY2',
    url: 'https://isco102345.github.io/JQUERY2/',
    tags: ['JavaScribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p7',
    title: 'Weather Website Promo',
    description: 'Weather website',
    github: 'https://github.com/Isco102345/Assignment---4',
    url: 'https://isco102345.github.io/Assignment---4/',
    tags: ['JavaScribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p8',
    title: 'Quote Website Promo',
    description: 'Qupte website',
    github: 'https://github.com/Isco102345/Assignment',
    url: 'https://isco102345.github.io/Assignment/',
    tags: ['JavaScribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p9',
    title: 'Recibe Website Promo',
    description: 'Recibe website',
    github: 'https://github.com/Isco102345/Assignment-10',
    url: 'https://isco102345.github.io/Assignment-10/',
    tags: ['JavaScribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p10',
    title: 'Search Website Promo',
    description: 'Search website',
    github: 'https://github.com/Isco102345/Assignment-7',
    url: 'https://github.com/Isco102345/Assignment-10',
    tags: ['JavaScribt', 'CSS' , 'HTML'],
  },
  {
    id: 'p11',
    title: 'DevFolio Website Promo',
    description: 'Devfolio website',
    github: 'https://github.com/Isco102345/project',
    url: 'https://isco102345.github.io/project',
    tags: ['CSS' , 'HTML'],
  },
 
]
