import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function CurtomCalendar() {
  const { isEnglish } = useSelector((state) => state.viewSettings);
  return (
    <Grid
      container
      className="flex h-[600px] flex-row items-center justify-around"
    >
      <Grid item className="my-5 h-[600px] w-full">
        <Calendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{ start: "title", center: "", end: "" }}
          viewHeight={40}
          fixedWeekCount={false}
          events={{
            googleCalendarApiKey: "AIzaSyC-kpURtS1BWdb29os7Vw5zwmZGPA-BCSM",
            googleCalendarId: "vonschappler.gaming@gmail.com",
          }}
          locale={isEnglish ? "en-Us" : "pt-Br"}
          height={550}
        />
      </Grid>
    </Grid>
  );
}
