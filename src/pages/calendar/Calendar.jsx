import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";
import useCalendar from "../../stores/Calendar";
import { createEventId } from "../../data";
import { TroubleshootOutlined } from "@mui/icons-material";

const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className='calendar-container'>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev, next, today",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay",
          }}
          allDaySlot={false}
          initialView='timeGridWeek'
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          nowIndicator={true}
          weekends={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
          handleWindowResize={true}
          
        />
      </div>
    </div>
  );
};

export default Calendar;
