export type MenuItem = {
  id: number;
  title: string;
  href: string;
  submenu?: {
    id: number;
    label: string;
    href: string;
  }[];
};

export const menu: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'About',
    href: '/about',
  },
  {
    id: 3,
    title: 'Services',
    href: '/services',
    submenu: [
      {
        id: 3.1,
        label: 'Web Development',
        href: '/services/web-development',
      },
      {
        id: 3.2,
        label: 'Mobile Development',
        href: '/services/mobile-development',
      },
      {
        id: 3.3,
        label: 'UI/UX Design',
        href: '/services/ui-ux-design',
      },
    ],
  },
  {
    id: 4,
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    id: 5,
    title: 'Team',
    href: '/team',
  },
  {
    id: 6,
    title: 'Blog',
    href: '/blog',
  },
  {
    id: 7,
    title: 'Contact',
    href: '/contact',
  },
];
