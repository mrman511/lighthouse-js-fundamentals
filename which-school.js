function whichSchool(age) {
  if (age < 13){
    console.log("Primary School");
  }
  else if (age >= 13 && age <=18) {
    console.log("Secondary School");
  }
  else {console.log("Lighthouse Labs");}
}

whichSchool(6);
whichSchool(15);
whichSchool(30);