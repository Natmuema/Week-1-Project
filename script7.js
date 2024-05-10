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
        attendees: ['Kalondu','June'],
        organizer:'Kalondu'
    },] ;

    // Function to delete an event from the array by title
function deleteEvent(title) {
    const index = events.findIndex(event => event.title === title);
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`Event with title '${title}' deleted successfully.`);
    } else {
        console.log(`Event with title '${title}' not found.`);
    }
}

// Test the deleteEvent function
console.log("Before deletion:");
console.log(events);

deleteEvent("Arrays");

console.log("\nAfter deletion:");
console.log(events);