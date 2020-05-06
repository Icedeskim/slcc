function getTimeOfDay() {
    let now = new Date();
    let hour = now.getHours();
    return hour;
}
function greetUser() {
    let name = document.getElementById('greetingName').value;
    document.getElementById('userName').innerHTML = name;
    $('#getUserName').modal('hide');
    $('#greetUser').modal('show');

}

function displayGreetingMessage(message) {
    document.getElementById('message').innerHTML = message;
}


function customizeGreeting() {
    let hour = getTimeOfDay();
    let message = 'message';
    if (hour >= 5 && hour < 12) {
        message = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        message = 'Good Afternoon';
    } else if (hour >= 18) {
        message = 'Good Evening';
    }

    displayGreetingMessage(message);
}



$(document).ready(() => {
    $('#getUserName').modal('show');
    customizeGreeting();
    });







