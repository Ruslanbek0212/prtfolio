import { Link } from 'react-router-dom'
import {icons} from './icons'


export const menu = [
{
    linkName: <Link to={'/dashboard'}>Dashboard</Link>,
    slug: "/dashboard",
    icons: icons.dashboard,
},
{
    linkName: "Assets",
    slug: "/assets",
    icons: icons.assets
},
{
    linkName: "Booking",
    slug: "/booking",
    icons: icons.bookingCar
},
{
    linkName: <Link to={'/sellcars'}>Sell Cars</Link>,
    slug: "/sellcars",
    icons: icons.sells
},
{
    linkName: "Buy Cars",
    slug: "/buycars",
    icons: icons.buys
},
{
    linkName: <Link to={'/services'}>Services</Link>,
    slug: "/services",
    icons: icons.services
},
{
    linkName: "Calendar",
    slug: "/calendar",
    icons: icons.calendar
},
{
    linkName: <Link to={'/messages'}>Messages</Link>,
    slug: "/messages",
    icons: icons.messages
},


]
export const subMenu = [
    {
        linkName: <Link to={'/settings'}>Settings</Link>,
        slug: "/settings",
        icons: icons.settings
    },
    {
        linkName: "Log out",
        slug: "/logout",
        icons: icons.log
    },

]