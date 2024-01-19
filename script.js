setInterval(() => {
    date=new Date();
    hourss=date.getHours();
    minutess=date.getMinutes();
    secondss=date.getSeconds();
    hoursRotation=30*hourss+minutess/2;
    minutesRotation=6*minutess;
    secondRotation=6*secondss;
    hourHand.style.transform=`rotate(${hoursRotation}deg)`;
    minuteHand.style.transform=`rotate(${minutesRotation}deg)`;
    secondHand.style.transform=`rotate(${secondRotation}deg)`;
}, 1000);