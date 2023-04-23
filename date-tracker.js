function dateFunc() {
        const date = new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let currentDate=day + "/" + month + "/" + year;
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        console.log(dayOfWeek); // Output: a string representing the day of the week
        document.getElementById('dato').innerHTML= `${dayOfWeek}, ${currentDate}`;
} 
dateFunc();
/*
const date = new Date();
let day=date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();
let currentDate=day + "/" + month + "/" + year;
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];

document.getElementById('dato').innerHTML= `Today is: ${dayOfWeek}, ${currentDate}`;
*/

function remainingFunc() {
        // create a new date object
        var myDate = new Date();

        // set the specific date to subtract
        var specificDate = new Date('June 5, 2023');

        // get the time value in milliseconds for both dates
        var myDateTime = myDate.getTime();
        var specificDateTime = specificDate.getTime();

        // calculate the difference in milliseconds
        var diffInMs = specificDateTime - myDateTime;

        // convert milliseconds to days
        var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        // output the difference in days
        console.log(diffInDays);
        document.getElementById('remain').innerHTML=
        diffInDays + " days!" + "<br>";
}

const animatedBtn = document.getElementById('animated-btn');

animatedBtn.addEventListener('mouseover', () => {
  animatedBtn.style.animation = 'move-away 0.5s forwards';
});

animatedBtn.addEventListener('mouseout', () => {
  animatedBtn.style.animation = 'move-back 0.5s forwards';
});
