let cl = console.log ; // first function 

    function setZero(num){
        if(num < 10){
            return '0' + num;
        }else{
            return num;
        }
    }


function createDigitalClock() {

    const digitalClock = document.getElementById("digitalClock");
    let d = new Date();  // it gives a date object of current time 

    let hr = d.getHours();

    let min = d.getMinutes();

    let sec = d.getSeconds();

    let session = "PM";

    if (hr > 12){
      session = "PM";
    hr = hr - 12 ; // 14-12 = 2
   }
   
   // hr = setZero(hr);
   // if (hr < 10) {
   //    hr = '0' + hr  //07
   // }

   //if (min < 10) {
  //min = '0' + min  //07
  //}
 //  min = setZero(min);
   // if (sec < 10) {
  //    sec = '0' + sec  //07
 // }
  // sec = setZero(sec);
    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;

    digitalClock.innerHTML = result;

    setTimeout(createDigitalClock,1000);
}

createDigitalClock();