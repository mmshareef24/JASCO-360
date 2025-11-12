function Stat({ title, value }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="text-xs opacity-70">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { getDashboardStats } from '@/services/dashboard'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getDashboardStats()
      .then((data) => {
        if (mounted) setStats(data)
      })
      .catch((err) => {
        if (mounted) setError(err?.message || 'Failed to load')
      })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      {!stats && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4 animate-pulse">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-7 w-20 bg-muted rounded mt-2" />
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="text-sm text-red-600">{error}</div>
      )}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat title="Employees" value={stats.employees} />
          <Stat title="Attendance Today" value={stats.attendanceToday} />
          <Stat title="Open Tickets" value={stats.openTickets} />
        </div>
      )}
    </div>
  )
}