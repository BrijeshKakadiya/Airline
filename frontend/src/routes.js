import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const aircraftOne = React.lazy(() => import('./views/pages/aircraftOne/aircraftOne'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/aircraftOne', name: 'aircraftOne', element: aircraftOne },
]

export default routes
