let events = [

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
        attendees: ['Kalondu','June','Mathei'],
        organizer:'Kalondu'
    },] ;

    // Function to find the event with the most attendees using reduce
function findEventWithMostAttendees(events) {
    return events.reduce((maxEvent, currentEvent) => {
        return maxEvent.attendees.size > currentEvent.attendees.size ? maxEvent : currentEvent;
    });
}

// Find the event with the most attendees
const eventWithMostAttendees = findEventWithMostAttendees(events);

// Log the event with the most attendees
console.log("Event with the most attendees:");
console.log(eventWithMostAttendees);