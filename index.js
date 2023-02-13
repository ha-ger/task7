let date = document.querySelector(".date");
let time = new Date();
date.textContent = Intl.DateTimeFormat("en-Uk").format(time);

//for input
let add = document.querySelector(".add");
let showText = document.querySelector(".show-text");
let inputText = document.querySelector(".text");

let arr;
if (window.localStorage.localeInput != null) {
  arr = JSON.parse(window.localStorage.localeInput);
} else {
  arr = [];
}









// for add button
add.addEventListener("click", function () {
  if (inputText.value !== ""&&inputText.value!==" ") {
    showText.style.display = "block";

    let obj = {
      input: (inputText.value).trim(),
    locale:false,
    };
    arr.push(obj);
    window.localStorage.setItem("localeInput", JSON.stringify(arr));
    show();
    inputText.value = "";
  } else {
    alert("Plz Write Something :) ");
  }
});

document.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    if (inputText.value !== ""&&inputText.value!==" ") {
      showText.style.display = "block";
  
      let obj = {
        input: (inputText.value).trim(),
        locale:false,
      };
      arr.push(obj);
      window.localStorage.setItem("localeInput", JSON.stringify(arr));
      show();
      inputText.value = "";
    } else {
      alert("Plz Write Something :) ");
    }
  
  }
})
//for show tasks



function show() {
   let textDiv = "";
  for (let i = 0; i < arr.length; i++) {
    textDiv+= `

 <div class=" colored">
 <input value= "${arr[i].input}" type="text"  onclick="line(${i})" class="hidden ">
 <button  onclick="dele(${i})"class="del"><i class="fa-regular fa-trash-can"></i>
 </button>
 </div>
 `;








}
showText.innerHTML=textDiv













}
show();
// for delete tasks
function dele(i) {
  arr.splice(i, 1);
  localStorage.localeInput = JSON.stringify(arr);

  show();
}


//for linethrough



function line(i) {
  
  document.querySelectorAll(".hidden")[i].classList.toggle("line-through");


//// this for locale storage but not work and dont know where the wrong
//  if( document.querySelector(".line-through")){
//    arr[i].locale="true"
// }else{
//    arr[i].locale="false"
// }
//  window.localStorage.setItem("localeInput", JSON.stringify(arr));
 


   
  }
