
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
                    start: "2024-12-07T18:00:00",
                    end: "2024-12-07T20:00:00",
                },
                {
                    title: "Crochet Class",
                    start: "2025-01-01T18:00:00",
                    end: "2025-01-01T20:00:00",
                },                
                {
                    title: "Valentine Crafts",
                    start: "2025-02-14T18:00:00",
                    end: "2025-02-14T20:00:00",
                },
                {
                    title: "Sewing Class",
                    start: "2025-03-10T18:00:00",
                    end: "2025-03-10T20:00:00",
                },
                {
                    title: "Easter Event",
                    start: "2025-04-20T18:00:00",
                    end: "2025-04-20T20:00:00",
                },
                {
                    title: "Craft Event",
                    start: "2025-11-08T18:00:00",
                    end: "2025-11-08T20:00:00",
                },
                {
                    title: "Holiday Crafts",
                    start: "2024-12-10T18:00:00",
                    end: "2024-12-10T20:00:00",
                },
                {
                    title: "Music Night",
                    start: "2025-11-08T18:00:00",
                    end: "2025-11-08T20:00:00",
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