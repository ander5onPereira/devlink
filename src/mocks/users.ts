export type User = {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  links?: { title: string; url: string }[];
  action?: { title: string; url: string }[];
};

export const users: User[] = [
  {
    id: '1',
    name: 'Julia Silva',
    username: '@juliasilva',
    avatar: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80&auto=format&fit=crop`,
    bio: 'Frontend developer — React, Next.js, Tailwind',
    links: [
      { title: 'github', url: 'https://github.com' },
      { title: 'instagram', url: 'https://instagram.com' },
      { title: 'youtube', url: 'https://youtube.com' },
      { title: 'linkedin', url: 'https://linkedin.com' }
    ],
    action:[
      { title: 'Inscreva-se', url: 'https://juliasilva.com' },
      { title: 'Baixe meu e-book', url: 'https://juliasilva.com/ebook' },
      { title: 'Veja meu portfólio', url: 'https://juliasilva.com/course' },
      { title: 'Conheça meu curso', url: 'https://juliasilva.com/newsletter' },
    ]
  },

];
