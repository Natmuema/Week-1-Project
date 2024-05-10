const events = [

    {
        title:'JavaScript Foundations',
        date:new Date('2024-05-06'),
        location: 'Nairobi',
        attendees: ['Kalondu','Farida']
    },
    {
        title:'Control Structures and Loops',
        date:new Date('2024-05-07'),
        location: 'Uganda',
        attendees: ['Farida']
    },
    {
        title:'Functions and Scopes',
        date:new Date('2024-05-08'),
        location: 'Online',
        attendees: ['Wanjiku']
    },
    {
        title:'Arrays',
        date:new Date('2024-05-09'),
        location: 'Office',
        attendees: ['Wanjiru']
    },
    {
        title:'Objects',
        date:new Date('2024-05-10'),
        location: 'Nairobi',
        attendees: ['Faisal']
    }, 
    {
        title:'Web Pages',
        date:new Date('2024-05-11'),
        location: 'Nairobi',
        attendees: ['Kalondu']
    }, 
    {
        title:'Hiking',
        date:new Date('2024-05-12'),
        location: 'Nairobi',
        attendees: ['Kalondu']
    }, 
    {
        title:'Church',
        date:new Date('2024-05-13'),
        location: 'Nairobi',
        attendees: ['Kalondu','June']
    },] ;

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
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.innerHTML = `
                    <strong>${event.title}</strong>
                    <div class="event-details">
                        <p><strong>Date:</strong> ${event.date.toLocaleDateString()}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p><strong>Attendees:</strong> ${[...event.attendees].join(', ')}</p>
                    </div>
                `;
                eventsList.appendChild(eventElement);
            });
        }
    }
    
    // Initial render
    displayEventsWithin7Days();