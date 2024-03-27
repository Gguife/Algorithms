import math

def gradingStudents(grades):
  finalGrade = [];

  for i in range(len(grades)):
    mult5 =math.ceil(grades[i]/5)*5;
    diff = abs(mult5 - grades[i])

    if(diff < 3 and mult5 >= 38): finalGrade.append(mult5);
    else: finalGrade.append(grades[i]); 

  print(finalGrade)  


grades = [73, 67, 38, 33];
gradingStudents(grades);