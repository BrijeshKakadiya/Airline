import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBookmark, cilCursor, cilUser, cilFlightTakeoff } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Booking',
    to: '/bookings',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Flights',
    to: '/flights',
    icon: <CIcon icon={cilFlightTakeoff} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
    ],
  },
]

export default _nav
