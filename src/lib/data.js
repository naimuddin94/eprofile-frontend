import { BookOpen, HandHelping, HomeIcon, LogIn, MessageCircleWarning, Pencil, Settings, ShoppingBag, Star, User } from 'lucide-react'

// side bar
export const sidebarList=[
    {
        id: 1,
        title: 'Dashboard',
        link: '/dashboard',
        link1: '',
        icon: <HomeIcon className=''/>
    },
    {
        id: 2,
        title: 'Companies',
        link: '/dashboard/companies',
        link1: '/dashboard/companies/add-company',
        icon: <Pencil className=''/>
    },
    {
        id: 3,
        title: 'My Review',
        link: '/dashboard/my-reviews',
        link1: '',
        icon: <Star className=''/>
    },
    {
        id: 4,
        title: 'Press',
        link: '/dashboard/press',
        link1: '',
        icon: <BookOpen className=''/>
    },
    {
        id: 5,
        title: 'Services',
        link: '/dashboard/services',
        link1: '',
        icon: <HandHelping className=''/>
    },
    {
        id: 6,
        title: 'Purchases',
        link: '/dashboard/purchases',
        link1: '',
        icon: <ShoppingBag className=''/>
    },
    {
        id: 7,
        title: 'Support & Reports',
        link: '/dashboard/support-reports',
        link1: '',
        icon: <MessageCircleWarning className=''/>
    },
    {
        id: 8,
        title: 'Settings',
        link: '/dashboard/settings',
        link1: '',
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
export const addCompanyTabList = [
    {
      id: 1,
      title: 'Company Name and Logo',
      value: 'name'
    },
    {
      id: 2,
      title: 'Introduction',
      value: 'intro'
    },
    {
      id: 3,
      title: 'Mission Statement',
      value: 'mission'
    },
    {
      id: 4,
      title: 'History',
      value: 'history'
    },
    {
      id: 5,
      title: 'Founders/Key Executives',
      value: 'executives'
    },
    {
      id: 6,
      title: 'Location and Facilities',
      value: 'location'
    },
    {
      id: 7,
      title: 'Products or Services',
      value: 'product'
    },
    {
      id: 8,
      title: 'Target Market',
      value: 'market'
    },
    {
      id: 9,
      title: 'Competitive Advantage',
      value: 'advantage'
    },
    {
      id: 10,
      title: 'Financial Overview',
      value: 'overview'
    },
    {
      id: 11,
      title: 'Milestones and Achievements',
      value: 'milestones'
    },
    {
      id: 12,
      title: 'Partnerships or Affiliations',
      value: 'partnerships'
    },
    {
      id: 13,
      title: 'Social Responsibility Initiatives',
      value: 'responsibility'
    },
    {
      id: 14,
      title: 'Future Goals and Outlook',
      value: 'goals'
    },
    {
      id: 15,
      title: 'Contact Information',
      value: 'contact'
    },
]

