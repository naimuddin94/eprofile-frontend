import { BookOpen, HandHelping, HomeIcon, LogIn, MessageCircleWarning, Pencil, Settings, ShoppingBag, Star, User } from 'lucide-react'

// side bar
export const sidebarList=[
    {
        id: 1,
        title: 'Dashboard',
        link: '/dashboard',
        icon: <HomeIcon className=''/>
    },
    {
        id: 2,
        title: 'Companies',
        link: '/companies',
        icon: <Pencil className=''/>
    },
    {
        id: 3,
        title: 'My Review',
        link: '/my-review',
        icon: <Star className=''/>
    },
    {
        id: 4,
        title: 'Press',
        link: '/press',
        icon: <BookOpen className=''/>
    },
    {
        id: 5,
        title: 'Services',
        link: '/services',
        icon: <HandHelping className=''/>
    },
    {
        id: 6,
        title: 'Purchases',
        link: '/purchases',
        icon: <ShoppingBag className=''/>
    },
    {
        id: 7,
        title: 'Support & Reports',
        link: '/support-reports',
        icon: <MessageCircleWarning className=''/>
    },
    {
        id: 8,
        title: 'Settings',
        link: '/settings',
        icon: <Settings className=''/>
    },
    {
        id: 9,
        title: 'Logout',
        link: '/',
        icon: <LogIn className=''/>
    },
    
]

// profile tab list
export const tabList = [
    {
      id: 1,
      title: 'Name',
      value: 'name'
    },
    {
      id: 2,
      title: 'Title or Occupation',
      value: 'title'
    },
    {
      id: 3,
      title: 'Professional Summary or Objective',
      value: 'objective'
    },
    {
      id: 4,
      title: 'Contact Information',
      value: 'contact'
    },
    {
      id: 5,
      title: 'Education',
      value: 'education'
    },
    {
      id: 6,
      title: 'Work Experience',
      value: 'work'
    },
    {
      id: 7,
      title: 'Skills',
      value: 'skills'
    },
    {
      id: 8,
      title: 'Professional Memberships or Affiliations',
      value: 'member'
    },
    {
      id: 9,
      title: 'Languages',
      value: 'languages'
    },
    {
      id: 10,
      title: 'Volunteer Work or Community Involvement',
      value: 'volunteer'
    },
    {
      id: 11,
      title: 'Projects or Portfolio (if applicable)',
      value: 'projects'
    },
    {
      id: 12,
      title: 'Publications or Presentations (if applicable)',
      value: 'publications'
    },
    {
      id: 13,
      title: 'Testimonials or Recommendations',
      value: 'testimonials'
    },
    {
      id: 14,
      title: 'Personal Interests or Hobbies (optional)',
      value: 'hobbies'
    },
    {
      id: 15,
      title: 'Career Goals or Aspirations',
      value: 'goals'
    },
]

