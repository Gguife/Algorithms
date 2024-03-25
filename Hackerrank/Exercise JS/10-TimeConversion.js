
function timeConversion(s) { 
  const timeArr = s.split(":");
  let hours = parseInt(timeArr[0], 10);
  const minutes = timeArr[1];
  const seconds = timeArr[2].substring(0,2);
  
  if(s.includes("PM") && hours !== 12){
      hours += 12;
  }else if(s.includes("AM") && hours === 12){
      hours = 0;
  }
  
  hours = String(hours).padStart(2, "0");
  
  const militaryTime = `${hours}:${minutes}:${seconds}`;
  console.log(militaryTime);
}

const time = "07:05:45PM";
timeConversion(time);
