// Entry point for the build script in your package.json
import './add_jquery'
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

window.onload = function() {
  if (window.jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
  } else {
      // jQuery is not loaded
      alert("Doesn't Work");
  }
}

// let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))  
// let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {  
//   return new bootstrap.Popover(popoverTriggerEl)  
// })  
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  // var calendar = new FullCalendar.Calendar(calendarEl, {
  //   initialView: 'dayGridMonth'
  // });


  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2022-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2022-01-01'
        },
        {
          title: 'Long Event',
          start: '2022-01-07',
          end: '2022-01-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-01-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-01-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2022-01-11',
          end: '2022-01-13'
        },
        {
          title: 'Meeting',
          start: '2022-01-12T10:30:00',
          end: '2022-01-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-01-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-01-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2022-01-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-01-28'
        }
      ]
    });
  
    calendar.render();
  // calendar.render();
});