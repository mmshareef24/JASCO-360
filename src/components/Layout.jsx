import { NavLink, Outlet } from 'react-router-dom'
import { Home, Users, CalendarCheck, Wallet, Settings as SettingsIcon } from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/employees', label: 'Employees', icon: Users },
  { to: '/attendance', label: 'Attendance', icon: CalendarCheck },
  { to: '/payroll', label: 'Payroll', icon: Wallet },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]

function Layout() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="w-60 border-r border-border bg-sidebar text-sm">
        <div className="px-4 py-4 border-b border-border">
          <div className="font-semibold">JASCO 360</div>
          <div className="text-xs opacity-70">HRMS Preview</div>
        </div>
        <nav className="px-2 py-3 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground ${
                  isActive ? 'bg-accent text-accent-foreground' : ''
                }`
              }
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-12 border-b border-border flex items-center justify-between px-4">
          <div className="font-medium">JASCO RiseOne</div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground"
            >
              Toggle Theme
            </button>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout