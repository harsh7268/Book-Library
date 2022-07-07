
showRecords();
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',(e) =>{
  e.preventDefault();
  let text = localStorage.getItem('text');
  if(text == null){
    obj = [];
  }
  else{
    obj = JSON.parse(text);
  }
  let bookName = document.getElementById('bookName');
  let isbn = document.getElementById('isbn');
  let date = document.getElementById('date');
  let type;
  let computer = document.getElementById('computer');
  let science = document.getElementById('science');
  let math = document.getElementById('math');
 if(computer.checked){
  type = computer.value;
 } else if(science.checked){
   type = science.value;
 }else{
   type=math.value;
 }

 let val = {
   bookNameValue:bookName.value,
   isbnValue:isbn.value,
   dateValue:date.value,
   typeValue:type
 }
 obj.push(val);
 localStorage.setItem('text',JSON.stringify(obj));
bookName.value="";
isbn.value="";
date.value="";
 showRecords();

});

function showRecords(){
  let text = localStorage.getItem('text');
  if(text == null){
    obj = [];
  }
  else{
    obj = JSON.parse(text);
  }
  let str = "";
  obj.forEach((element,index) => {
    str +=`
    <tr class="noteCard">
    <td scope="row">${element.bookNameValue}</td>
    <td>${element.isbnValue}</td>
    <td>${element.dateValue}</td>
    <td>${element.typeValue}</td>
    <td><button class="btn btn-primary" id=${index} onclick="deleteRecords(this.id)">Delete</button></td>
  </tr>

  `;
  });
  let tBody = document.getElementById('tBody');
  tBody.innerHTML=str;
  
}

function deleteRecords(index){
  let text = localStorage.getItem('text');
  if(text == null){
    obj = [];
  }
  else{
    obj = JSON.parse(text);
  }
  obj.splice(index,1);
  localStorage.setItem('text',JSON.stringify(obj));
  showRecords();
}

let inputText = document.getElementById('inputText');

inputText.addEventListener('input',() =>{
  

  let noteCard = document.querySelectorAll('.noteCard');
  Array.from(noteCard).forEach((element) => {
    let td = element.getElementsByTagName('td');
    let bookName = td[0].innerHTML;
    let isbn = td[1].innerHTML;
    let date = td[2].innerHTML;
    let type = td[3].innerHTML;
    console.log(bookName,isbn,date,type);
    if(bookName.includes(inputText.value)||isbn.includes(inputText.value)||date.includes(inputText.value)||type.includes(inputText.value)){
      element.style.display="";
    }
    else{
      element.style.display="none";
    }
  });

});