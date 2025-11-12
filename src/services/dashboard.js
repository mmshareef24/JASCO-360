import { apiFetch } from '@/lib/api'

export async function getDashboardStats() {
  try {
    const data = await apiFetch('/dashboard/stats')
    // Expecting shape: { employees, attendanceToday, openTickets }
    return {
      employees: Number(data.employees) || 0,
      attendanceToday: Number(data.attendanceToday) || 0,
      openTickets: Number(data.openTickets) || 0,
    }
  } catch (err) {
    // Fallback sample data if API not configured or fails
    console.warn('Dashboard stats fetch failed, using fallback:', err?.message)
    return {
      employees: 244,
      attendanceToday: 226,
      openTickets: 12,
    }
  }
}