import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{ padding: '20px' }}>      
      <Outlet />
    </div>
  )
}
