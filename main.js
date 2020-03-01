/*-------- Increment Decrement  PhoneItem --------*/
var count = 1;
var input = document.getElementById("itemCount");

// Increment item 1
const itemIncrement = document.getElementById("add");
itemIncrement.addEventListener("click", function(){
    count++;
    input.value = count;
})
// Decrement item 1
const itemDecrement = document.getElementById("subtract");
itemDecrement.addEventListener("click", function(){
    if (count > 1) {
    count--;
    input.value = count;
    } 
})
 
/*-------- Increment Decrement  CaseItem --------*/
var count2 = 1;
var input2 = document.getElementById("itemCount-2");
// Increment item 2
const itemIncrement2 = document.getElementById("caseAdd");
itemIncrement2.addEventListener("click", function(){
    count2++;
    input2.value = count2;
})
// Decrement item 2
const itemDecrement2 = document.getElementById("caseSubtract");
itemDecrement2.addEventListener("click", function(){
    if (count2 > 1) {
    count2--;
    input2.value = count2;
    } 
})


var addPhonePrice = 1200;
var addCasePrice = 60;
//===================== Increment Price 1 =======================  
const add = document.getElementById("add");
add.addEventListener("click", function(){
  // phonePrice
  const num1 = document.getElementById('amount').attributes.value.value;
  var num2 = document.getElementById('itemCount').value;
  var update = num1  * num2;
  document.getElementById("phonePrice").innerHTML = update;
  //  Subtotal Price
  const subAmount = parseInt( document.getElementById('subAmount').attributes.value.value);
  const subTotalPrice = (update + subAmount) - addPhonePrice;
  document.getElementById("subTotal").innerText = subTotalPrice;  

  // Total Price
  const totalAmount = parseInt( document.getElementById('totalAmount').attributes.value.value);
  const total = subTotalPrice;
  document.getElementById("total").innerText = total;

})

//===================== Decrement Price Phone  ======================= 
const subtract = document.getElementById("subtract");
subtract.addEventListener("click", function(){
  // phonePrice
  const num1 = document.getElementById('amount').attributes.value.value;
  var num2 = document.getElementById('itemCount').value;
  var update = num1  * num2;
  document.getElementById("phonePrice").innerHTML = update;
  //  Subtotal Price
  const subAmount = parseInt( document.getElementById('subAmount').attributes.value.value);
  const subTotalPrice = (update + subAmount) - addPhonePrice;
  document.getElementById("subTotal").innerText = subTotalPrice;  
  // Total Price
  const totalAmount = parseInt( document.getElementById('totalAmount').attributes.value.value);
  //  const total = (subTotalPrice + totalAmount) - addPhonePrice;
  const total = subTotalPrice;
  document.getElementById("total").innerText = total;
})


//===================== Increment Price Case ======================= 
const caseAdd = document.getElementById("caseAdd");
caseAdd.addEventListener("click", function(){
  // phonePrice
  const num3 = document.getElementById('caseAmount').attributes.value.value;
  var num4 = document.getElementById('itemCount-2').value;
  var updateItem2 = num3  * num4;
  document.getElementById("casePrice").innerHTML = updateItem2;
  //  Subtotal Price
  const subAmount = parseInt( document.getElementById('subAmount').attributes.value.value);
  const subTotalPrice = (updateItem2 + subAmount) - addCasePrice;
  document.getElementById("subTotal").innerText = subTotalPrice;
  // Total Price
  const totalAmount = parseInt( document.getElementById('totalAmount').attributes.value.value);
  const total = subTotalPrice;
  document.getElementById("total").innerText = total;

})


//===================== Decrement Price 2 =======================  
const caseSubtract = document.getElementById("caseSubtract");
caseSubtract.addEventListener("click", function(){
  // phonePrice
  const num3 = document.getElementById('caseAmount').attributes.value.value;
  var num4 = document.getElementById('itemCount-2').value;
  var updateItem2 = num3  * num4;
  document.getElementById("casePrice").innerHTML = updateItem2;

  //  Subtotal Price
  const subAmount = parseInt( document.getElementById('subAmount').attributes.value.value);
  const subTotalPrice = (updateItem2 + subAmount) - addCasePrice;
  document.getElementById("subTotal").innerText = subTotalPrice;

  // Total Price
  const totalAmount = parseInt( document.getElementById('totalAmount').attributes.value.value);
  const total = subTotalPrice;
  document.getElementById("total").innerText = total;
})
