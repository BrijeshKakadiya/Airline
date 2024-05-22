import React from 'react'

const User = React.lazy(() => import('./views/user/User'))
const Bookings = React.lazy(() => import('./views/bookings/Bookings'))
const Flights = React.lazy(() => import('./views/flights/Flights'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/user', name: 'user', element: User },
  { path: '/bookings', name: 'bookings', element: Bookings },
  { path: '/flights', name: 'flights', element: Flights },
]

export default routes
