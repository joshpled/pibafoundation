import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";

function CalendarComponent() {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
    </div>
  );
}

export default CalendarComponent;
