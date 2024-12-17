
function createCalendar()
{
    let calendarElement = document.getElementById("calendar");
    let calendar = new FullCalendar.Calendar(calendarElement, 
        {
            initialView: "dayGridMonth",
            headerToolbar: {
                left:"prev",
                center: "title",
                right: 'next today'
            },
            events:
            [
                {
                    title: "Winter Craft Night",
                    start: "2024-12-15T19:00:00",
                    end: "2024-12-15T21:00:00",
                }
            ],
            selectable: true,
            eventClick: function(info){
                const eventElement = document.getElementById("show-event");
                eventElement.innerHTML = info.event.title;
            }

        });
        calendar.render();

}

document.addEventListener("DOMContentLoaded", createCalendar());