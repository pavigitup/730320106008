let numberInputEl = document.getElementById('numberInput');
let addButtonEl = document.getElementById('addButton');
let numberListEl = document.getElementById('numberList');
let checkResultEl =  document.getElementById("checkResult");




addButtonEl.addEventListener("click",function(){
let numEl =  parseInt(numberInputEl.textContent); 
if (numEl%2 === 0 ){
    checkResultEl.textContent = "even";
}
else{
    checkResultEl.textContent = "odd";
}

let options = {
    method : "GET"
}
fetch("http://20.244.56.144/numbers/rand",options)
.then(function(res){
    return res.json();
})
.then(function(jsonData){
 
    console.log(jsonData);
});

});