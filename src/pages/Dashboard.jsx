function Stat({ title, value }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="text-xs opacity-70">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat title="Employees" value="244" />
        <Stat title="Attendance Today" value="226" />
        <Stat title="Open Tickets" value="12" />
      </div>
    </div>
  )
}