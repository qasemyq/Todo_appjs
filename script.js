                        // JS 
// 1
// 2
// 3
// 4
// 5
// 6 

/* Webpack ro estefdae mikonim bara inke age css inash ziyad bud mitunam ba webpack modiriyatesh kard , mishe script css 
va sass ro modiyiyat kadrd ta prozhamun slow nashe. gulp.js ham hast vali webpack az hamsh maruftare  */ 

// 7 

/* document hamun dom hast */
/* 
   // message? yani ye payame delbekhahi mitunam bedam 
   // any yani har no data typi mitunam bedam 
 */

 // 8 

 /* document.write("<h1>Hello World</h1>")  mitunam behesh style ham bedam tuye h1 ya class css */

 // 9 
 // 10 
 // 11 

/*  
  let x = 10
  document.write(`<h1>${x}</h1>`)
  document.write("<h1>" + x + "</h1>")
*/
 
 // 12 

 /*
 {
    var x = 10
 }
 console.log(x); // 10 ro mide ba var age let bashe error mide 
 */

 // 13 
 // 14

 let name = 'HH'
 let age = 27
 console.log(typeof(name)); // string
 console.log(`My name is ${name} and my age is ${age}`); 

 // typeof ye tabe hast ke ye vurudi migire 

// 15 
// 16
// 17 
// 18 

let one = '10'
let two = 10
let sum = one + two
console.log(typeof(sum));  // string 

let one = parseInt('10')  // parseInt string ro be adad tabdil mikone
                          // parseFloat ashari string ro be adad tabdil mikone 
let two = 10
let sum = one + two
console.log(typeof(sum));  // 20 mide  

// 19 

let x = prompt('Enter your email', 'txt@tbi.com') // txt@tbi.com mishe placehodere prompt

// 20 

let x = parseInt(prompt('Enter your email', 'txt@tbi.com')) // prompt hamishe string mide ke ba pasrseInt ya parseFloat mishe kardesh adad ya adade ashari 

// 21 

let x = 10
let y = 20 

x+=y 
console.log(x); // x = x + y       x mishe 30 

x-=100         // x = x - 100      x mishe -70

x*=-2         // x = x * -2        x mishe 140 

x/=7          // x = x / 7         x mishe  20

// mamulan tu halge for estefade mishe 

// 22 

let x = 10
let y = 20 
let result = x>y?"ok":"not ok"  // if tak khatti 

// 23
let name = 'turaj'
let lastName = 'armin'
let check = name == 'turaj' && lastName == 'armin'  // true mide

// age dar &&(and logic) age hardo taraf true bashe true mide
// age avvali false bud false mide va aslan dg dovvomi ro neshun nemide 

// 24

let x = 10
let y = 20 
let z = 5
let result = x!=y && y==20 && z>=y // false mide
            //true  //true   //false
// x!=y   true hast
// y==20  true + true  =  true mide
// z>=y   true + false =  false mide 

// 25 

let x = 20
let y = 20 
let z = 5 
let result = x!=y || y==20 || z>=y // true mide
            //false //true   //false 

// x!=y   fasle hast
// y==20  fasle + true  =  true mide
// z>=y   true + false =  true mide 

// 26 
let result = !(x==y) //! javab true bashe false mide 

// 27 

let x = 100 
let result = ++X   // reurlt mishe 101 va x ham 101    // avval be x 1 ezafe mikone pas result ham mishe 101

let result1 = X++  // result mishe 100 va x mishe 101  // avval x 100 ro mirize tu result bad x mishe 101

// 28 

// primitive data types  number, string, boolean,  undefined, symbol
let x;   // typeofesh mishe undefined 

// 29 

// data typehaye dg  string, object, null 

let a = [1,'gg'.true]  // array 
let b = {
    name: 'gg',
    age: 27
}                     // object

let x = null          // null

// 30 

let x = '20' 
x = Number(x)        // 20 adad mikone va data typesh ham number mide

// 31 

let x = Number(prompt('Enter a number'))
x = String(x)    // bala ke x ro number gereftam tabdil mikone be string 

// 32 

// NaN          // typeof NaN mishe number 
let x = 20 
x = x+'test'             // NaN mide
console.log(isNaN(x));   // true mide

// 33 
// 34 

let x = 0b1111        // 0b yani binery 
 console.log(x1);     // 15 mide 

let x = 0xfe         // 0x yani hegza dar mabnaye 16 

// tu compiler nevisi ya inke mohasebate kheili dagig anjam bedim azash estefade mishe

// 35 

Math.round(2.4)  // 2 mide
Math.round(2.6)  // 3 mide
Math.ceil(3.3)   // 4 mide
Math.floor(5.6)  // 5 mide
Math.pow(2,10)   // 1024 mide    tavn 
Math.abs(-100)   // 100 mide     adade - ro mosbat mikone
Math.sqrt(100)   // 10 mide      jazr
Math.random()    // beyne 0 ta 1 mide
Math.min(100,3,10,50)     // 3 mide
Math.max(100,3,10,50)     // 100 mide
Math.round(Math.random()*10)  // adade random az 0 ta 9 mide

// 36 
// 37 

let name = 'turaj'
let lastName = 'armin'
let allData = name.concat(",",lastName)  // turaj,armin mide
let data = allData.split(",")            // ["turaj", "armin"]

// 38 

let name = 'gg'
name.toUpperCase()  // 'GG' mide

let name = 'GG'
name.toLowerCase()  // 'gg' mide

// 39 

let x = 'hello world and hello world'
let data = x.indexOf('hello',6)  // az indexe 6 shuru kon va donbale hello begard va nabashe -1 mide

if(data>-1){
    console.log("ok");
} else {
    console.log("nothing");
}    

// 40 
// 41

let data = "hello World"
data.charAt(4)    // o ro mide    charAt ye adad migire va harfe jaygahe un ro barmigardune
data.slice(66)    // az jaygaye 6 ta akhar ro mide    World ro mide
data.slice(6,9)   //  Wor ro mide khode 9 ro nemide
data.substr(6)    // substr  ham hamun kare slice ro mikone

// 42 

let data = "   Hello World   "
data.trim()   // az avval va akhare string white space haro hajf mikone
console.log("%c",data,"background:black;color:white");     // injuri ba "%c" mitunam be console css bedam 

// 43 

let data = "Hello world and you"
data.split(" ")   // [ "hello","world","and","you"]   // split string ro tabdil mikone be array injuri 

// 44

let data = "Hello world"
data.replace("world","you")   // world ro ba you jaygozin mikonam ba replace
data.includes("world")        // includes true ya false barmigardune ke chon inja world hast true mide

// 45 
let data = []
data[0] = 10
data[1] = 'salam'
data[2] = true
console.table(data);       // console.table ye jadval mide ba index va value

// 46 
// 47

let data = [1,'world',true,40,]
Array.isArray(data)             // true mide chon data array hast
let x = 100
Array.isArray(x)                // fasle mide chon array nist

// typeof [] mishe object

// 48 
// sheygarayi 

// ye sherkat ye laptop(class) misaze ba tamame emkata hala age biyad az un 1 milion besaze mishe shey(object ya instance)

// har class az 2 bakhsh tashkil shode 1- methods 2- property 

// property yani ye mashin charkh dare va methods yani ye tabi sakhtim ke vagti gaz midam mishin harakat mikone

// ye class misazam va az ruye un mishe 1 milion object sakhte 

// 49 

// inja chon mesal ro az ruye java zad bara hamin injuri neshun mide fagat mikhast idea ro tozih bede ke chejuri kar mikone 
// ye class Human misazam pain va tush properti va methods dare 
// bad miyam tu in classe asli va az ruye un misazam har chegad ke bekham 

public class Main {
    public static main(){
        Human myhuman = new Human();
        myhuman.name = 'turaj';
        myhuman.lastName = 'armin';
        myhuman.age = 27;
        myhuman.allData();
    }
}

class Human {
    public name;
    public lastName;
    public age;

    public allData(){
        console.log("my name is"+this.name+"may lastname is"+this.lastName+"my age is"+this.age);
    }
}

// 50 

// harja new ba ye esm va () dide shod in ye shey hast az ye class  mesle  new Date(), new Human(), new Array(), new String() va geire
let data = new String()
console.log(data instanceof String);  // true mide yani shy(object) hast

// tu meslae darse 49 age bade public ha static bezaram dg nabayad this bezaram va bala ham bejaye myhuman mitunam Huamn. bade . alan mitunam be hame properti va method haye class payin dastrasi dashte basham 

// age new bud mishe object ya instance   age khode class ro zadam Human. mishe static

// 51 

let data = [1,2,3,4,5]
let x = data.toString()     // tabdil mikone be string
x.split(",")                // ["1","2","3","4","5"] ro mide 
data.pop()                  // az kahre array yeki hajf mikone va mitunam un hajf shodasho berzam tuye yek motagayyer
data.push(100)              // be akhare array 100 ro ezafe mikone
data[data.length]= "gg"     // injuri ham mishe push kard 
data.shift()                // az avvale array yeki pak mikone va mitunam pak shodasho berizam tuye ye motagayyer
data.unshift(1000)          // be avvale array 1000 ro ezafe mikone

// 52 
// 53 

let data = [1,2,3,4,5,6]
data.splice(0,2)              // 1 va 2 ro pak mikonw  
console.log(data);            // [3,4,5,6] mide
let test = data.splice(0,2)   // uni ro ke haf kardam az array mirizam tu test
console.log(test);            // [1,2] ro mide  
let test = data.splice(0,2,'turaj', 'armin') // az 0 shuru kon 2ta hazf kon 2ta behesh ezafe kon
console.log(test);            // [1,"turaj","armin",4,5,6]  mide 

// 54 
// 55

let data = [2,3,1,4,5,6]
console.log(data.sort(function(a,b){
    return a-b   // a+b
}));

// a-b  [1,2,3,4,5,6]
// a+b  [6,5,4,3,2,1]

console.log(Math.min.apply(null,data));   // 1 ro mide 
console.log(Math.min.apply(null,data));   // 6 ro mide 

// 56 

let data = [2,3,1,4,5,6]
console.log(data.indexOf(3));     //  1 mide ke indesh 3 hast 
let data = [1,2,3,1,4,5,6]
console.log(data.lastIndexOf(1));     //  3 mide ke indesh 3 hast 

// 57

const person ={
    name: 'gg',
    data: [1,2,3,4,5] 
}
console.log(person.data.indexOf(3));  // 2 mide 
console.log(person.data.slice(0.2));  // [3,4,5]  mide

// 58 
// 59 
// 60
// 61 
// 62 
// 63

// debugger 
/* debugger ro har jayi ke khastam tu code mizaram va miram tu gesmate 
sourecs in browser va unja mitunam ba zadane alamate (.> bebinam khat be khat che ettefagi miofte
va dar baghal ye chandta box dare mige maslan alan data tuye in motagayyer chi hast */

// 64
// 65 
// 66 

let x = Number(prompt("enter a number:"))
let y = Number(prompt("enter second number:"))
let op = prompt("plase select operand + - * / ^ ")

if(op == "+"){
    let sum = x+y         // in sum inja dakhel braket hast fagat 
    console.log(sum);
} else if(op == "-"){
    let sum = x-y         // inam hamintor 
    console.log(sum);
}
// dg bagiyasho naneveshtam 

// 67 

// mamualn injuri az nested ifha estefade nemishe 
let userName = prompt("Enter your username:")
let password = prompt("Enter your password:")
let email = prompt("Enter your username:")
if(userName == 'turaj'){
    console.log('username is correct');
    if(password == '1234'){                 // indakhele paraenteshe yani ife username hast
        console.log('password is correct');
        if(email == 'txt@t.com'){           // indakhele paraenteshe yani ife password hast 
            console.log('email is correct');
        }
    }
}else {
    console.log();
}

// 68 

// be jaye nested ifha injuri estafe mikoim

if(userName == 'turaj' && password == '1234' && email == 'txt@t.com'){
    console.log('welcome');
} else {
    console.log('try it again');
}

// 69 

// switch ro goft ke ziyad azash estefade nemishe va naneveshtam 

// 70 
// 71 

// ifhaye tak khattai 
x>10?"welcom":"try again"
x>10?1:0

let name = "test"
console.log(name??"empty");  // ?? age name null bashe ya hamun khali bashe miyad va empty ro barmigardune 

// 72 
// 73
let x = Number(prompt("Enter a number:"))

for(let i=0;i<x;i++){
    console.log("hi:"+i);   // hi:0 hi:1 hi:2 hi:3 hi:4   farz mikonam karbar 5 vared karde 
}
 
for(let i=0;i<x;i+=2){      // ya masalan i+5  mide hi:0 hi:5 hi:10 va ela akhar 
    console.log("hi:"+i);   // hi:0 hi:2 hi:4 hi:6 hi:8   adade zoj ro migiram vali mamulan i++ behesh dast nemizanam tuye braket minevisam 
}

// 74

let x = 10
for(let i=0;i<=x;i++){
    if(i%2==0){
        console.log(i);   // adade joz ro mide 
    }
}else{
    console.log('odd'+i);  // adade fard ro ba odd mide 
}

// 75 

let x = 20 
for(let i=0;i<=x;i++){
    if(i%2==0 && i%3==0){
        console.log(i);       
    }
}    // adadai ke be 6 ghabele gestmast hastan ro mide 
     // 0 6 12 18

// 76
 
// matris 

let x = 5 
for(let i=0;i<x;i++){
    for(let j=0;j<x;j++){
        document.write("<b>   1  </b>")
    }
      document.write("<br/>")
}

/*      mide 
11111
11111
11111
11111
11111
*/ 


let x = 5 
for(let i=0;i<x;i++){
    for(let j=0;j<x;j++){
        if(j==i){
            document.write("<b>   1  </b>")
        }else 
        document.write("<b>   0  </b>")
    }
    document.write("</br>")

}

/*      mide 
10000
01000
00100
00010
00001
*/

// 77

let data = ['turaj','armin',33,27]
for(let i=0;i<data.length;i++){
    console.log(data[i]);  // turaj armin 33 27 ro mide 
}


let countLessons = Number(prompt("Enter how count of lessons"))
let data = []
for(let i=0;i<countLessons;i++){
    let point = Number(prompt("Enter Lesson points"))
    data[i]=point          // point nomreha hast ke mirizam tuye array data ke sakhatam injuri     
    console.log(data);     // har nomre ke vard shode ro neshun mide 
}
// age karbar 3 vared kone pas 3bar bayad nomerhasho vared kone 

let countLessons = Number(prompt("Enter how count of lessons"))
let data = []
for(let i=0;i<countLessons;i++){
    let point = Number(prompt("Enter Lesson points"))
    data[i]=point          
}
let sum = 0 
for(let i=0;i<data.length;i++){
    sum+=data[i]                 // hame nomreha ke tuye array hast ro mizaram tuye sum va jam mikonam injuri 
}
console.log(sum/data.length);  // bad inja sum ro tagsim bar tedade array mikonam 

// 78
// 79

let data = [11,3,45,6,55]
data.forEcah(function(value){
    console.log(value);        // ba forEach mitunam ruye tak take elementhaye array peymayesh konam 
})

let data = [11,3,45,6,55]
data.forEcah(function(value,index){
    console.log(value+":"+index);        // mitunam index ham ro benevisam 
})

for(value of data){                // e jaye in value mishe item ham gozasht 
    console.log(value);            // hamun kare forEach ro anjam mide vali index nemide 
}

// 80 

let person ={
    name: 'turaj',
    gae: 27
}
for(item in person){
    console.log(person[item]);     // turaj 27 mide 
}


let data = []
data["name"] = 'turaj'       // bejaye inke index 0 1 2 bedam esm midam be jaye index    be ina migan associate array 
data["age"] = 27
console.log(data["name"]);  // turaj mide 

// 81 
// 82 
// 83 
// 84 

// functonha ya ye chizi ro chap mikonan ya ye chizi ro barmigardunan 


function data(){
console.log("Hello World");
}
data()     // age sedash nakonam chap nemikone 
data()     // mitunam har chegad khastam sedash konam 

// 85

function sum(){
    let x =10
    let y = 20
    let sum = x+y
    console.log(sum);
}
sum()

// 86 
function data(a,b){
    let info=`My name is ${a} and my name is ${b}`
    console.log(info);
}

data('gg',27)

//87 

function checkEvenOdd(x){
    if(x%2==0){
        console.log(`X is even=${x}`);
    }else {
        console.log(`Xis Odd=${x}`);
    }
}
checkEvenOdd(11)
checkEvenOdd(8)

// 88 

function salary(degree,clock){
    if(degree=="phd"){
        let salary = 5000000*clock
        console.log(salary);
    } else if(degree=="master"){
        let salary = 3500000*clock
        console.log(salary);
    }else if(degree=="bachelor"){
        let salary = 2500000*clock
        console.log(salary);
    } else {
        let salary = 1500000*clock
        console.log(salary);
    }
}
salary("phd",100)        // 5000000
salary("master",100)     // 3500000
salary("bachelor",100)   // 2500000
salary("x",100)          // 1500000

// 89 

// peyda kardane adadae avval(pure) 
// adade avval adadi hast ke be khodesh va 1 gabele bakhsh bashe 
// 11 bagimundash be 1 mishe 0 
// 11 bagimundash be 2 mishe 1
// ta 11 haminjuri mire jolo
// 11 bagimundash be 11 mishe 0 
// pas 11 adade avval hast 
function pure(x){
    if(x%1==0 && x%x==0){      // age x bagimundash be 1 beshe 0 va age x bagimundash be khodesh dobare beshe 0 mishe pure(adade avval)
        console.log("pure");
    }else {
        console.log("not pure");
    }
}
pure(11)

// hamun balayi ba for

function pure(x){
    let flag = 0
    for(let i=1; i<=x;i++){
        if(x%i==0){
            flag++
        }
    }
    if(flag==2){
        console.log("pure");
    }else{
        console.log("not pure");
    }
}
pure(11)

// 90 

function sum(x,y){
    let add=x+y
    return add
}
console.log(sum(10,20));  // 30 mide 



function check(){
    return true
}
if(check()==true){
    console.log("ok")
}else {
    console.log("not ok");
}                              // ok mide 

// 91 

let data = function(name,age){
    console.log(name,age);
}
data('turaj',27)

let data = (name,age)=>{
    console.log(name,age);
}
data('turaj',20)

// 92 

let calculator = (x,y,op)=>{
    if(op=="+"){
        console.log(x+y);
    } else if(op=="-"){
        console.log(x-y);
    } else if(op=="*"){
        console.log(x*y);
    } else if(op=="/"){
        console.log(x/y);
    } else {
        console.log("nothing");
    }
}

calculator(10,20,'+')  // tuye console chap mikone natijaro 

// 93 
// 94 
// 95

// json in shekli hast

let data = [
    {name:'turaj',age:27,id:1},
    {name:'iraj',age:17,id:2},
    {name:'ali',age:23,id:3},
    {name:'mari',age:44,id:4},
    {name:'sara',age:22,id:5}
]
console.log(data);      // data ro mide har objectesho 

// 96 

// filter

let data = [
    {name:'turaj',age:27,id:1},
    {name:'iraj',age:17,id:2},
    {name:'ali',age:23,id:3},
    {name:'mari',age:44,id:4},
    {name:'sara',age:22,id:5}
]

// filter miyad ru tak take name,'turaj',age,27.id,1 peymayesh mikone 
let results =data.filter(function(value){   // value mishe har yek az objectha ke har chi key ya value hast tuye object ro darbar migire 
    return value.name=="turaj"// && value.id==1              // age chandta tu data turaj bashe mitunam benevisam && value.id==1
})

console.log(results);   // un objecti ke tush turaj hast ro mide{name:'turaj',age:27,id:1}

// 97

// find

// find avvalin megdar ro ke peyda mikone barmigardune 
// age 2ta turaj bashe tu data avvalin turaj ro barmigardune 
let data = [
    {name:'turaj',age:27,id:1},
    {name:'iraj',age:17,id:2},
    {name:'ali',age:23,id:3},
    {name:'mari',age:44,id:4},
    {name:'turaj',age:22,id:5}
]

let results =data.find(function(value){  
    return value.name=="turaj"                
})

console.log(results);     //  mide {name:'turaj',age:27,id:1} 


// map 
// true ya fasle barmigardune 

let results =data.map(function(value){  
    return value.name=="turaj"                
})

console.log(results);     //  mide {name:'turaj',age:27,id:1} 

// 98 

// modular neveshtan 

// miram tu tage html 
// <script src="app.js" type="module"></script>    // age type="module" ro nanevisam error mide 
// <script src="main.js" type="module"></script>

// main.js
export let name = 'turaj'
export let person = {
    name: 'turaj',
    age:27
}
export let data=()=>{
    console.log("Hello world");
}

// app.js

import {name,person,data} form './app.js'

console.log(name);   // turaj mide 
console.log(person); // {name:turaj,age:27}  mide 
console.log(data());

// 99 

// hala be jaye inke ye export benevisam miram payine safhe va 
// va tu import ham mesle gabl migiram 

export {
    name,     // mitunam az alias ham estefade konam name as NE maslan ke tu import minevisam NE 
    person,
    data     
} 

// 100 

// bara inke nayam va hamsho ba esm import konam minevisam import * as app from "./app.js"
// * yani hame va app ham alias hast ke mitunam har esmi bedam
console.log(name);
console.log(person);
console.log(data());

// 101 

// Bom mesle ye daneshgah hast ke tush sakhtemunha va daneshkadehaye mokhtalefi dare 
// Bom hamun window hast ke be tamame magadir va harchi tu browser hast dastrasi dare 
// screen, navigator, location, history, frames    // vali inha mohem nisatan
// Bom be dom dastrasi dare ke dom mohemme 
// dom ya hamun document ya hamun derakhte html hast 
// az tarige derakhte html mitunam be tak take anasor tuye html dastrasi dashe baasham 
console.log(window);    // ye abject mide ke parentesh window hast ke be hame briwser dastrasi dare 
// window tush harchi ke estefdae kardam tush hast alert ya harchi dg
console.log(window.navigator);      // ettelate browser ro mide ke nadorost hast pas az navigator estefade nemishe 
window.console.log("ok");
window.alert("ok");
window.document.write("ok");        // ta hala az window estefdae nemikardam vali darvage injuri hast 
// az tarige window mishe be hame chi tu browser dastrasi peda kard

// 102

// <button onclick="makePage()" ></button>        
// <body onload=makePage()></body>

function makePage(){
    window.open("http://www.google.com","","width=300px,height=300px")
}     // ye safhe google mide 300 dar 300

// 103 

// scrollTo      age bekham vahti ruye ye chizi click konam ke bere va tu safhe ruye un vaise az scrollTo estefdae mikonam 
// offsetTop    // offset manish mishe fasle 


//<button id="fisrt">First</button>
// <section id"first1" style="width=100;height=200px;background-color=green"></section>

let first = document.getElementById("first")
let first1 = document.getElementById("firs1").offsetTop

first.addEventListener('click',function(){     // age injuri benevisam dg onclick nemikhad age onclick benevisam bayad ye function benevisam 
    window.scrollTo({
        top:first1,
        behavior:"smooth"
    })
})

// chon az bala fasele dare section ke ba offsetTop uno gereftam alan age ruye dokme first click konam secthion ke scroll mishe be bala

// 104

// setInterVal

function message(){
    alert("hi")
}

setInterval(message,2000)   // har 2000 ms ejra mikone function message ro 

// 105

// setInterVal

function clock(){
    let data = new Date()      // alan mitunam be hame methodhaye Date dastarsi peyda konam dar data
    document.write(data.toLocaleTimeString)    // saate ro mide saat dagige va saniye
}

setInterval(clock,1000)    // har 1 saniye function ro ejra mikone       8:15:25 AM mide

// 106 

// setTimeout
function message(){
    console.log("hi");
}

setTimeout(message,10000)     // age bekham ba takhir anjam beshe az setTimeout estefade mishe

// 107

window.innerHeight       // andaze safhe bedune ehtesabe console ro mide 
window.innerWidth
window.outerHeight
window.outerWidth
window.location          // magadire mesle port o in kossheraro mide 

// 108 
// 109 

// dom hamun document hast yani hame chizhaye ke tuye html hast va mitunam be hamushun dastrasi dashe basham 
console.log(document);       // be harchi tuye safhe hast dastrasi peda mikonam 
console.log(document.all);   //  hame taghaye tuye html ro mide 
console.log(document.head);  // hame tage head hast ro mide 
console.log(document.body);  
console.log(document.scripts);  // hame tage scripts hast ro mide 
console.log(document.forms);    // hame formhaye safharo mide  age 2ta from bud avvali ro ba indexe 0 va badi ro ba 1 mide ela akhar 
console.log(document.links);    // hame taghaye a ro mide 
document.links[0].style..backgrounColor = "green"        // mishe maslan injuri dastkarishun kard 


// 110 

// document hamun derekhte html hast

// 111

console.log(document.head);              // tamame un chizhayi ke tuye head hast ro mide 
// farzandhaye dakhele head and body araye hesab mishan
console.log(document.head.meta);         // in ghalate chizi nemide 
console.log(document.head.children);     // tamame farzandane head ro mide
console.log(document.head.children[0]);  // avvalin farzandesho mide ke meta hast
console.log(document.head.children[0].nodeName);   // bade . mitunam kheili chiza bezaram maslan classList className id style va node yani unjayie ke be ham miresan tagha ke inja nodename meta hast 
// un chizhayi ke mohem hastan classList ClassName style id 

// 112

console.log(document.body.children[0].children[0].children[0].innerText);   // injuri miyunam be farzandane dakhel tagha dastrasi peyda konam 

// 113

console.log(document.forms[0].children[0]);    // age chanta form dashte bashim avvlin form va avvalin child ro mide 
console.log(document.forms[0].action);    //  action atribute form ro mide 
console.log(document.forms[0].method);    // method atribute form ro mide 
console.log(document.forms[0].id);        //
console.log(document.links[0].href);      // avvalin tage a hrefesho mide age # bashe url safheie ke tush hast ro mide 

// 114 

// <h1 id="demo" class="x1">Hello world</h1> 
let data  = document.getElementById("demo")    // grab mikone 
console.log(data.calssName);     // x1 ro mide 
console.log(data.id);            // demo ro mide esme id 
console.log(data.textContent);   // nevashte dakhelesho mide Hello world

// innerText    innerHTML ham hast

// 115 

// <h1 id="demo" class="x1">Hello World</h1>
let data=document.getElementById("demo")
data.innerText="welcome in London"       // nevashte dakhele h1 ro tagir mide inkaro ba textContent ham mishe kard
data.innerHTML=<span>Salam</span>        // ba innerHTML mishe tush html gozasht
data.addEventListener("click",function(){
    alert("ok")
})                                        // ruye tage h1 click konam alert ok ro mide 

console.log(data.children[o]);           // <span>Salam</span>  ro mide 

// 116 

// <h1 id="demo" class="x1">Hello World</h1>
let data=document.getElementById('demo')
data.calssName="test"        // calss x1 ro barmidare va test ro bejash mizare 

// 117 

// <h1 id="demo" class="x1">Hello World</h1>
let data=document.getElementById('demo')
data.style.width='200px'
data.style.heigth='200px'
data.backgrounColor='maroon'
data.addEventListener("mouseover", function(){    // mouseover vagti mouse mire rush  mouseleave vagti mouse az rushe mire 
    data.style.backgrounColor="green"
})

// 118 

// <h1>Hello World</h1>
// <h1>Salam you</h1>
// <h1>Armin is Turaj</h1>

let data = document.getElementsByTagName("h1")
console.log(data);      // hame neveshtehaye dakhele h1 ro mide har 3tasho
console.log(data[0]);   // texte dakhele h1 avvali ro mide 
data[0].calssName='green'   

// hame magadiri ke tuye taghaye h1 hast ro be surate arraye mide

// 119
 
// <p class='first'>salam</p>
// <p class='first'>Turaj</p>
// <p class='first'>Iraj</p>

let p=document.getElementsByName("first")
console.log(p);      // ye collaction az arrayha mide 3ta p 0 1 2 
console.log(p[0].innerText);    // salam ro mide
console.log(p[0].className);    // esme class ke first hast ro mide 

// 120

querySelector("p")           // avvalin p ro mide
querySelector("p.first")     // p ke tush class first ro dare ro mide 

// 121

querySelectorAll('p.first')    // hame pha ke class first ro daran ro mide 

// inam age cosole begiram ye collction az arayeha mide 

// 122 

/* 

<section id="demo">
<h1>hello</h1>
<p>salam</p>
</section>
*/ 
let demo=document.getElementById('demo')
demo.firstChild.innerText    // texte hello az h1 ro mide 
demo.lastElementChild.style.backgrounColor='maroon'
demo.childElementCount       // tedade taghaye dakhele section ro mide ke 2ta hast
demo.parentElement           // body mishe parentesh  p mishe section parentesh

// 123

// <section id="demo"></section>
let demo=document.getElementById('demo')
let h2=document.createElement('h2')
h2.classList='ms blue'    // ms blue bootstrap hast
h2.innerText='Hello world'
demo.append(h2)            // ta h2 ro be demo append nakonam sakhte nemishe 

// 124

// <section id="demo"></section>
// <button id="click">click<>
let demo=document.getElementById('demo')
let click=document.getElementsByName('click')
let h2=document.createElement('h2')
h2.classList='ms blue'    
h2.innerText='Hello world'
click.addEventListener("click",function(){
    demo.append(h2)                      // mitunam ke dokme dg besazam va begam vagti rush click shod biya va removechild(h2) kon 
})

// 125 
// 126

// <h1 onclick="this.style.display='none';"></h1>
// this eshare dare be window ya hamun bom 

// 127 

// click - mouseenter - mouseleave - mouseout - mousedown - mouseup - focus - blur 

// 128 

// e ya hamun event object hast
// tuye tage a va form kheili azash estefade mishe 
// # eshare mikone be safheie ke tush hastim pas refresh nemikone age # bezram dar href

//<a href="" id=demo>click</a>

let demo=document.getElementsByName("demo")
demo.addEventListener("click",function(e){
    e.preventDefault()
    console.log('ok')
})     // age tuye herf # nabashe  e.preventDefault() jologiri mikone az refresh shodane safhe 


form.addEventListener('submit',function(e){
    e.preventDefault()   // inja ham nemizare safhe refresh beshe 
})       // from be submit hassase pas eventesh mishe submit

// 129
// 130 
// 131

// let demo=document.forms[0].children[0].children[0]     // injuri ham mishe neveast bara grab kardan  vali mamulan injuri azash estefade nemishe 

// 132 

/*
    <section>
        <section>
            <section>
                <form action="">
                    <section>
                        <input type="text" id="input-task" class='x1'>
                    </section>
                    <section>
                        <input type="submit" value="submit">
                    </section>
                </form>
            </section>
        </section>
    </section>
*/

let task=document.getElementById('input-task')
task.addEventListener('keydown',function(e){   // e hame propertihaye input ro dare va inja ba e.target.value dastrasi peyda mikom be value 
    console.log(e.target.value);         // bara gerftane value input az e.target.value estefade mishe 
})

// e.target.className        // age dakhele input benevisam ye chizi va enter bezanam tu console esme classe input ke x1 hast ro mide 
// e.target.id            // ye chizi benivisam va enter konam tu cosole id input ke input-task hast ro mide 

// 133

/*
    <section>
        <section>
            <section>
                <form action="">
                    <section>
                        <input type="text" id="input-task" class='x1'>
                    </section>
                    <section>
                        <input type="submit" value="submit">
                    </section>
                </form>
                <h1 id="demo"></h1>
            </section>
        </section>
    </section>
*/

let task=document.getElementById('input-task')
let demo=Document.getElementById('demo')
task.addEventListener('keydown',function(e){   
    demo.textContent=e.target.value            // harchi ke tuye input neveshte mishe miyad uno neshun mide tu h1 binding dar js 
})

task.addEventListener("focus",function(e){       // bejaye focus mishe blur ham gozasht 
    demo.style.backgrounColor='green'
    demo.style.width='400px'
    demo.style.height='48px'
})

// 134 

// localStorage        age bekhm dataro dar browser bara hamishe zakhire konam az localstroge estefade mikonm va age browser ro bebandam va baz konam baz data unja hast
// sessionStrorage     baz mishe tush zakhire kard va age bebandam va baz konam browser ro data pak mishe 
// cookies             mitunam tush data bezaram amma bara moddate mahdud masalan 2 3 ruz azash estefade mishe 
// localStronge key va value ro zakhire mikone va fagat be surate string bayad tush zakhire kard

localStorage.setItem('name','turaj')    // name key hast va turaj value   alan mishe raft tu dakhele localstorage did 
localStorage.setItem('age','33')

localStorage.clear()                        // hame datahaye dakhele localstorage ro pak mikone 
localStorage.removeItem('name')             // age bekham yeki ro pak koanm az removeItem estefade mikonam
console.log(localStorage.getItem('name'));  // tu console value name ke turaj hast ro mide 

// 135

let data = ['turaj','armin',33,'t@t.com']
let result= JSON.stringify(data)           // JSON.stringfy array ro tabdil mikone be string un 33 ham tabdil mishe be string 
let result1=JSON.parse(result)             // JSON.parse strinf ro tabdil mikone be array

let data= [
    {name:'turaj',age:17},
    {name:'armin',age:33},
    {name:'sara',age:20}
]

let result=JSON.stringify(data)      // JSON.stringfy data ke inja json hast ro tabdil mikone be strinf
let result1=JSON.parse(result)       // JSON.parse date ro tabdil mikone be array 

// 136 
// 137 
/*
    <section>
        <section>
            <section>
                <form id='form-task'>
                    <section>
                        <input type="text" id="input-task" class='x1'>
                    </section>
                    <section>
                        <input type="submit" value="submit">
                    </section>
                </form>
                <h1 id="demo"></h1>
            </section>
        </section>
    </section>
*/
let form=document.getElementById('form-task')
let input=document.getElementById('input-task')
let demo=Document.getElementById('demo')
form.addEventListener('submit',function(e){ 
    e.preventDefault()                        // jologiri mikone az inke safhe refresh beshe 
    let task=input.value                      // tasks key hast va task ke motagayyer task hat ke data ro az input tush dare 
    localStorage.setItem('tasks', task)       // nahve zakhire kardane data az input tuye localstorage 
    input.value=""                            // form ro khali mikone 
})

// 138 

// chon vagti data tuye input minevisam va mikham tu localstorage bezaram vagti submit mikonanm harbar miyad va dataie ke bud ro bejash garar mide mikham harchi gerfetam bere yu localstorage 

let form=document.getElementById('form-task')
let input=document.getElementById('input-task')
let demo=Document.getElementById('demo')
let data=JSON.parse(localStorage.getItem('tasks')?localStorage.getItem('tasks'):[])  // let data= []   in bud ke avazehs kardam ta vagti safhe refresh mishe nayad data ro pak kone va dobare az avval megdar bede      // chon data inja string hast ba JSON.parse tabdilesh mikonam be array 
form.addEventListener('submit',function(e){ 
    e.preventDefault()   
    let task=input.value                     
    data.push(task)                                       // migam biya task ro push kon tuye data          
    localStorage.setItem('tasks', JSON.stringify(data))   // inja mizram data ro chon data ro besurate array migire bara inke tabdilesh konam be string az JSON.stringfy estefdae mikonam     
    input.value=""                            
})

// alan chon moshkel ine ke vagti refresh bshe data dobare khali mishe bad age dobare ye megdar tuye input bedam un megdare ro ro miyad va jaygozin mikone ba dattayi ke tuye localstrorage ahst va dobare az avval por mishe 
let data=localStorage.getItem('tasks')?localStorage.getItem('tasks'):[]       // ye if injuri benevisam halle 
let data=localStorage.getItem('tasks')??[]     // in ham kare in balayi ro dagigan anajam mide 2ta ?? yani age samte chapesh null bud biya data ro ye array khali bokon  hardosho mishe nevesht 
// alan halle 

// 139

// tu ingesmat umad va ye li gozasht va ba foreach dataheo namyesh dad vagti az varede input mishe 

// 140 

// 141 prozhe payani 


















 















