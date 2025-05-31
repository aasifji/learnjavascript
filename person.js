let name = "aasif";
let age = 34;
function sumall(...numbers){
  return numbers.reduce((total,num)=>total+num,0);
}

export{name , age, sumall};