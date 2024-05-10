const events = [

    {
        title:'JavaScript Foundations',
        date:new Date('2024-05-06'),
        location: 'Nairobi',
        attendees: ['Kalondu','Farida'],
        organizer: "Maureen Murigi"
    },
    {
        title:'Control Structures and Loops',
        date:new Date('2024-05-07'),
        location: 'Uganda',
        attendees: 'Farida',
        organizer:'Maureen Murigi'
    },
    {
        title:'Functions and Scopes',
        date:new Date('2024-05-08'),
        location: 'Online',
        attendees: 'Wanjiku',
        organizer:'Maureen Murigi'
    },
    {
        title:'Arrays',
        date:new Date('2024-05-09'),
        location: 'Office',
        attendees: 'Wanjiru',
        organizer:'Maureen Murigi'
    },
    {
        title:'Objects',
        date:new Date('2024-05-10'),
        location: 'Nairobi',
        attendees: 'Faisal',
        organizer:'Maureen Murigi'
    }, {
        title:'Web Pages',
        date:new Date('2024-05-11'),
        location: 'Nairobi',
        attendees: 'Kalondu',
        organizer:'Maureen Murigi'
    }, 
    {
        title:'Hiking',
        date:new Date('2024-05-12'),
        location: 'Nairobi',
        attendees: 'Kalondu',
        organizer:'Outdoorke',
    }, {
        title:'Church',
        date:new Date('2024-05-13'),
        location: 'Nairobi',
        attendees: ['Kalondu','June'],
        organizer:'Kalondu'
    },] ;

   // Create a WeakMap to store the organizer for each event
const organizers = new WeakMap();
organizers.set(events[0], 'Maureen Murigi'); // Example organizer for the first event

function displayEventsWithin7Days() {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const upcomingEvents = events.filter(event => event.date >= today && event.date <= nextWeek);

    const eventsTable = document.createElement('table');
    eventsTable.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Organizer</th>
        </tr>
    `;

    upcomingEvents.forEach(event => {
        const { title, date, location } = event;
        const organizer = organizers.get(event);
        eventsTable.innerHTML += `
            <tr>
                <td>${title}</td>
                <td>${date.toLocaleDateString()}</td>
                <td>${location}</td>
                <td>${organizer}</td>
            </tr>
        `;
    });

    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';
    eventsList.appendChild(eventsTable);
}

function addAttendeeToEvent(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
        displayEventsWithin7Days(); // Update the displayed events after adding attendee
    } else {
        console.error(`Event with title "${eventTitle}" not found.`);
    }
}

function convertEventsToJSON() {
    const eventsWithFormattedDate = events.map(event => {
        // Add formattedDate property to each event
        const formattedDate = event.date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
        return { ...event, formattedDate };
    });
    const jsonString = JSON.stringify(eventsWithFormattedDate);
    console.log(jsonString);
}

// Initial render
displayEventsWithin7Days();