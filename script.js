//let obj={
 //   name:"ananya",
//    phone:9990364327,
 //   address:"ggn"
//}
// let obj2={
//    name:"surbhi",
//    phone:12345678,
//    address:"delhi"
// }

// obj2.name="simran"  //updating the name property
// console.log(obj2.name)

// const para=document.querySelector('p'); // selecting the first paragraph element
// para.textContent="This is updated paragraph1"
// para.style.color="blue"
// console.log(para.textContent);

// console.log(document) // logs the entire document obejct

// getElementById

// const para=document.getElementById('p2')
// para.textContent="This is a updated paragraph2"
// para.style.color="magenta"
// console.log(para.textContent)

// getElementByClassname

// const para=document.getElementsByClassName('para')
// para[0].textContent="This is updated paragraph1"
// para[1].style.color="pink"
// console.log(para)
// para.forEach((ele)=> console.log(ele))

// console.log(document) // logs the entire document object

// querry selector

// const para=document.querySelector('p');
// para.textContent="This is updated paragraph using querySelector"
// para.style.color="pink"
// console.log(para.textContent)

//ForEach

// let arr=[12, 4, 65, 324, 56]
// arr.forEach((ele)=> console.log(ele))

// query selector all

// const para=document.querySelectorAll('p')
// para[0].textContent="This is updated paragraph using getElementByClassName"
// para[0].style.color="green"
// para[1].style.color="magenta"
// para[2].style.color="cyan"
// console.log(para)
//  para.forEach((ele)=>console.log(ele))

//INNERHTML and TEXTCONTENT

// const para=document.querySelectorAll('p')
//  para[0].innertext="updated"
//  para[0].textContent="Now updated"
//  para[1].innerHTML="<div>Hello World</div>"
// //para[1].innertext="Hello World"
// // console.log(para)


//adding Event listeners and manipulating classes

// const button=document.querySelector('button')
// const button=document.querySelector('#btn')

// button.addEventListeners('click',function(){
// button.classList.add('btn')})
//})

//using classList to manuplate classes

//const button=document.querySelector('button')

//button.classList.add('btn')
//button.classList.remove('btn')
//button.classList.toggle('btn') // adds if not present, removes if present

//function message(){
// alert("You Have Clicked A Button")}

//button.addEventListener('click,message)
//button.removeEventListener('click',message)

//example:click event with alert and stop remove event listener

// const button=document.querySelector('#btn')
// const button2=document.querySelector('#stop')

// function message(){
// alert("You Have Clicked The Button")}
// button.addEventListener('click',message)
// button2.addEventListener('click',function(){
// button.removeEventListener('click',message)}

//event object example

//const button3=document.querySelctor('#btn')
//const button4=document.querySelector('#stop')

// function message(Event){
//  alert("You Have Clicked The Button.")
//  console.log(Event)}
// }
// button3.addEventListener('Click',message)
// button4.addEventListener('click',function(){
//   button3.removeEventListener('click',message)
//})

// keyboard event example

// keydown is uesed when key is presssed 

//const btn=document.querySelector('#btn')
//btn.addEvenbtListener('keydown',function(event{
//console.log(event.key)
//}))
//btn.addEventListener('keyup',function(event){      // keyup is usec when key is released
// console.log(event.key)
//})

// const handleSubmit =(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
// }
// const form=document.querySelector('form')
// form.addEventListener('submit',handleSubmit)



// const div= document.querySelector(".container")
// const div2= document.querySelector(".outer")
// const button= document.querySelector("button")

// button.addEventListener("click",function(){ console.log("button")},true)
// div.addEventListener("click",function(){ console.log("div")},true)
// div2.addEventListener("click",function(){ console.log("div2")},true)

// global execution 
//  created then the page laods
// debugger
// console.log(a)
// var a=78
// let b=345

// console.log(a)
// console.log(b)

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside fn")
// }
// print()

// function first(){
//     seconnd()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// let total = 50

// function calculate(){
//     console.log(total)
//     let total=50
//     console.log(total)
// }
// calculate()

// let total=100

// function calculate(){
//     console.log(total)
//     let total=50
//  }
// calculate()


// function greet(){
//     var message=" Hello User";
//     console.log(message)
// }
// greet()
// console.log(message)
//  const notes=document.querySelectorAll(".notes");
//  notes.forEach(note=>console.log(note.textContent))

// console.log("First line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second line")

const timerId= setInterval(()=>{
    console.log("1")
},1000)


setTimeout(()=>{
    clearInterval(timerId)
},10*1000)


// let a=1
// const id=setInterval(()=>{
// if (a===10)clearInterval(id)
//     console.log(a)
//     a+=1
// },1000)

