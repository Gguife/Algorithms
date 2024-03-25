import re

def TimeConersion(s):
  timeArr = s.split(":");
  hours = int(timeArr[0]);
  minutes = timeArr[1];
  seconds = re.sub(r'[AP]M', '', timeArr[2]);

  if "PM" in s and hours != 12: hours += 12;
  elif "AM" in s and hours == 12: hours = 0;

  if hours < 10: "0" + hours;

  militaryTime = f"{hours}:{minutes}:{seconds}";
  print(militaryTime)



time = "05:05:45PM";
TimeConersion(time);