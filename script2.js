const events = [

    {
        title:'JavaScript Foundations',
        date:new Date('2024-05-06'),
        location: 'Nairobi',
        attendees: new Set(['Kalondu','Farida']),
        organizer: 'Maureen Murigi'
    },
    {
        title:'Control Structures and Loops',
        date:new Date('2024-05-07'),
        location: 'Uganda',
        attendees: new Set('Farida'),
        organizer: 'Maureen Murigi'
    },
    {
        title:'Functions and Scopes',
        date:new Date('2024-05-08'),
        location: 'Online',
        attendees: new Set('Wanjiku'),
        organizer:'Maureen Murigi'
    },
    {
        title:'Arrays',
        date:new Date('2024-05-09'),
        location: 'Office',
        attendees: new Set('Wanjiru'),
        organizer:'Maureen Murigi'
    },
    {
        title:'Objects',
        date:new Date('2024-05-10'),
        location: 'Nairobi',
        attendees: new Set(['Faisal']),
        organizer:'Maureen Murigi'
    }, {
        title:'Web Pages',
        date:new Date('2024-05-11'),
        location: 'Nairobi',
        attendees: new Set(['Kalondu']),
        organizer:'Maureen Murigi'
    }, 
    {
        title:'Hiking',
        date:new Date('2024-05-12'),
        location: 'Nairobi',
        attendees:new Set(['Kalondu']),
        organizer:'Outdoorke',
    }, {
        title:'Church',
        date:new Date('2024-05-13'),
        location: 'Nairobi',
        attendees: new Set(['Kalondu','June']),
        organizer:'Kalondu'
    },] ;

    // Create a WeakMap to store the organizer for each event
const organizers = new WeakMap();
organizers.set(events[5], 'Maureen Murigi'); // Example organizer for the first event

function displayEventsWithin7Days() {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const upcomingEvents = events.filter(event => event.date >= today && event.date <= nextWeek);

    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';

    if (upcomingEvents.length === 0) {
        eventsList.innerHTML = '<p>No events in the next 7 days</p>';
    } else {
        upcomingEvents.forEach(event => {
            const organizer = organizers.get(event);
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <strong>${event.title}</strong>
                <div class="event-details">
                    <p><strong>Date:</strong> ${event.date.toLocaleDateString()}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Organizer:</strong> ${organizer}</p>
                    <p><strong>Attendees:</strong> ${[...event.attendees].join(', ')}</p>
                </div>
            `;
            eventsList.appendChild(eventElement);
        });
    }
}

// Initial render
displayEventsWithin7Days();