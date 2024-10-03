let day = "Monday";

// Using a switch statement to map each day to a specific task
switch(day) {
    case 'Monday':
        console.log("Your task for Monday is: Finish your activities");
        break;
    case 'Tuesday':
        console.log("Your task for Tuesday is: Attend orientation");
        break;
    // Add cases for other days as needed
    default:
        console.log("No task scheduled for " + day);
        break;
}
