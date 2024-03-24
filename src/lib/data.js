import { BookOpen, HandHelping, HomeIcon, LogIn, MessageCircleWarning, Pencil, Settings, ShoppingBag, Star, User } from 'lucide-react'

export const sidebarList=[
    {
        id: 1,
        title: 'Dashboard',
        link: '/profile',
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