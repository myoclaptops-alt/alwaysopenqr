import { Database } from '@/lib/types/database';

type ScheduledContent = Database['public']['Tables']['scheduled_content']['Row'];

export function getActiveScheduledContent(
  scheduledContents: ScheduledContent[],
  timezone: string = 'America/Los_Angeles'
): ScheduledContent | null {
  const now = new Date();

  const currentTime = now.toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  });

  const dateInTimezone = new Date(
    now.toLocaleString('en-US', { timeZone: timezone })
  );
  const currentDay = dateInTimezone.getDay();

  const activeContents = scheduledContents
    .filter((content) => {
      if (!content.is_enabled) return false;

      const daysOfWeek = content.days_of_week as number[] | null;
      if (daysOfWeek && !daysOfWeek.includes(currentDay)) {
        return false;
      }

      if (content.start_time && content.end_time) {
        const startTime = content.start_time;
        const endTime = content.end_time;

        if (currentTime >= startTime && currentTime <= endTime) {
          return true;
        }
        return false;
      }

      return true;
    })
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return activeContents.length > 0 ? activeContents[0] : null;
}

export function isBusinessOpen(
  hours: Array<{
    day_of_week: number;
    open_time: string | null;
    close_time: string | null;
    is_closed: boolean;
  }>,
  timezone: string = 'America/Los_Angeles'
): { isOpen: boolean; todayHours: string } {
  const now = new Date();

  const currentTime = now.toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  });

  const dateInTimezone = new Date(
    now.toLocaleString('en-US', { timeZone: timezone })
  );
  const currentDay = dateInTimezone.getDay();

  const todayHours = hours.find((h) => h.day_of_week === currentDay);

  if (!todayHours || todayHours.is_closed) {
    return { isOpen: false, todayHours: 'Closed' };
  }

  if (!todayHours.open_time || !todayHours.close_time) {
    return { isOpen: false, todayHours: 'Closed' };
  }

  const isOpen = currentTime >= todayHours.open_time && currentTime <= todayHours.close_time;

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const hoursText = `${formatTime(todayHours.open_time)} - ${formatTime(todayHours.close_time)}`;

  return { isOpen, todayHours: hoursText };
}
