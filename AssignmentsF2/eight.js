function daysUntilEvent(eventStartDate) {
        const currentDate = new Date();
        const startDate = new Date(eventStartDate);
    
        // Calculate the time difference in milliseconds
        const timeDifference = startDate - currentDate;
    
        // Convert milliseconds to days
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
        return daysDifference;
    }
    
    const eventStartDate = "2023-09-01"; // Replace this with the actual event start date
    const daysRemaining = daysUntilEvent(eventStartDate);
    
    console.log(`There are ${daysRemaining} days until the event.`);
//     output- There are six days until the event
