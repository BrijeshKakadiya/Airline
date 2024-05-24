import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBookmark, cilCursor, cilUser, cilFlightTakeoff } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Users',
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
]

export default _nav
