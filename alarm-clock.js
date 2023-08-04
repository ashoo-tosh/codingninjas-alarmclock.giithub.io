//function to rotate hands of clock's hands

function rotateClockHand () {
    const date = new Date();

         //  mathmatics formula to calclate roations of hands.
    const seconds = date.getSeconds() * 6;
    const minutes = date.getMinutes() * 6 + seconds / 60;                                 
    const hours = (date.getHours()  % 12) * 30 + minutes / 12;


          // selecting elements and rotating it according to above formula
    document.getElementById('second-hand').style.transform = `rotate(${seconds}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minutes}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hours}deg)`;

    setTimeout(rotateClockHand, 1000);                                                     

}

rotateClockHand();    // calling the fuction to roate the hands of clocks.

