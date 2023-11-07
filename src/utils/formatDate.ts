import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function formatDate(date: string): string {
  const dayjsDate = dayjs(date)
  return dayjsDate.fromNow()
}
