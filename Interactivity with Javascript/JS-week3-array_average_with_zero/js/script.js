var grades= [];

var sum = 0;
if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
		sum += grades[index];
  }
  
  document.write(sum/grades.length);
}
else
  document.write("Empty Array");
