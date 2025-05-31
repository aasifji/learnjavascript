// x="banana";
// var x;
// console.log(x);
// let x = -100;
// x<<=5;
// console.log(x);
// let x =10;
// x ^=5;
// console.log(x);
// var x = 16 + 4 + " Aasif " + 20+20;
// var x = "Aasif " + 20 + 20;
// var x = "My name is Aasif ";
// var y = 'My wife name is Imrana';
// let y;
// y = 5;
// y="Aasif";
// console.log(`the name of ${x} and \n ${y}`);
// console.log(y);
let x =5;
let y = 5;
let z = 6;
// if(x==y){
//     console.log(true)
// }else{
//     console.log(false)
// }
// console.log((x==y) + " and" +" " + (y==z)); 
// const cars = ["valvo","bmw","oddi"];
// cars[0] = "Suzuli";
// cars.push("Benz");
// console.log(cars);
// let car = + "hi";
// console.log(typeof car)
let a  = myfunction(4,4);
function myfunction(c,d){
    return c*d
;}
console.log(a);
function sum(a,b){
    return a+b;
    
}
console.log(sum(5,6));
function myfunc(){
    let carname = "volvo";
    let text = "inside: " + typeof carname
     + " " + carname
     console.log(text);
}
myfunc();
let text = "outside " + typeof carname;
console.log(text)
// let day=new Date().getDay();
switch(new Date().getDay()){
  case 0:
    day = "sunday"
    break;
    case 1:
        day ="Monday"
        break;
        case 2:
            day="Tuesday"
            break;
            case 3:
                day="wedenesday"  
                break;
                case 4:
                    day="thursday"
                    break;
                    case 5:
                        day="friday"
                        break;
                        case 6:
                            day = "saturday";
                            break;

                    }
                    console.log("today is day ",day);
                    let days = 11;
                    if(days>10){
                        console.log("you are not elligible")
                    }else{
                        console.log("you are eligible")
                    }
                    // let fruits = "mango";
                  let  fruits =! "mango" ? "you are ate" : "yoy are not ate";
                    console.log(fruits);
                    var tet = "";
                    var i = 1;
                    while(i<10){
                        tet+= " <br> the numer is " + i +", " 
                        i++;

                    }
                    // console.log(tet);
                    let s = "";
                    let j = 2;
                    do{
                       s+= "<br>the number is start of 2 " + j;
                        j++
                    }
                    while(j<15);
                    // document.getElementById("demo").innerHTML = s;
                //    let car ="";
                //     const cars = ["bmw","volvo","saab","ford"];
                //     for(let i =0;i<cars.length;i++){
                //         car+= cars[i] + "\n";
                //     }
                const cars = ["bmw","volvo","saab","ford"];
                let k = 0;
                let car = "";
                // while(cars[k]){
                //     car+= cars[k] + "\n";
                //     k++;
                // }
                for(;cars[k];){
                    car+=cars[k] + "\n"
                    k++
                }
                    console.log(car);
                     document.getElementById("demo").innerHTML = car;


                     //closer//  ////////////   ----------
                     function createBankAccount(){
                        let balance = 0;
                        return{
                            deposit(amount){
                                balance+= amount;
                            },
                            getBalance(){
                                return balance;
                            }

                        };
                     }
const myAccount = createBankAccount();
myAccount.deposit(100);
myAccount.deposit(50);
console.log(myAccount.getBalance());
console.log(myAccount.balance);

function createAccount() {
    let balance = 1000; // initial balance
  
    return {
      deposit(amount) {
        if (amount > 0) {
          balance += amount;
          console.log(`Deposited: $${amount}`);
        } else {
          console.log("Invalid deposit amount.");
        }
      },
  
      withdraw(amount) {
        if (amount > balance) {
          console.log("Insufficient funds.");
        } else if (amount <= 0) {
          console.log("Invalid withdrawal amount.");
        } else {
          balance -= amount;
          console.log(`Withdrew: $${amount}`);
        }
      },
  
      getBalance() {
        console.log(`Current balance: $${balance}`);
        return balance;
      }
    };
  }

  const myAccounts = createAccount();

myAccounts.getBalance();    // Current balance: $1000
myAccounts.deposit(500);    // Deposited: $500
myAccounts.withdraw(300);   // Withdrew: $300
myAccounts.getBalance();    // Current balance: $1200
myAccounts.withdraw(100); 
myAccounts.getBalance(); // Insufficient funds.
const person = {
    firstName : "Aasif",
    lastName : "Ali",
    age : 32,

}
// console.log(person.firstName)
let {firstName:first,lastName:last,Gf = "Imrana"} = person;
console.log(first + " " + last + " my gf is " + Gf);
let name = "IMRANA";
let [a1,a2,a3,a4,a5,a6]= name; 
console.log(a3)
const mix_fruits = ["Bananas", "Oranges", "Apples","kiwi", "Mangos"];
// let [b,,c,d] = mix_fruits;
let {[0]:mix_fruits1,[1]:mix_fruits2} = mix_fruits;
// console.log(c);
console.log(mix_fruits1);
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [b,c, ...rest]=numbers;
console.log(rest);
const all_fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let frut = "";
  for(const [key ,value] of all_fruits){
    frut+= "\n" + key + " is " + value  }


console.log(frut);

let ser = "Hello My friends How are you";
let fin = ser.replace("friends","Saim");
console.log(fin)



  


 