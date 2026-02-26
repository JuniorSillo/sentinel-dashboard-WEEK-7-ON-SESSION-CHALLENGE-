import React, { Children } from 'react'

const DashboardLayout = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>Sentinel Dashboard</h1>
      </header>
      <main>{Children}</main>
    </div>
  )
}

export default DashboardLayout
