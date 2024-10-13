import type { TimeRange } from '@/model/data_structures'

export function formatTimeRange(range: TimeRange) {
  return formatDate(range.start) + ' to ' + formatDate(range.end)
}

function formatDate(dateString: string) {
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  const date = new Date(dateString)
  return months[date.getMonth()] + " " + date.getFullYear()
}
