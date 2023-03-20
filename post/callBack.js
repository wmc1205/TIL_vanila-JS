"use strict";
ask("동의하시겠습니까",showOK,showNotOk);
function ask(question, yes, no){
  if(confirm(question)){
    yes();
  }else{
    no();
  }
}
function showOK(){
  let ok = document.getElementById("ok");
  console.log("동의하셨습니다");
  ok.style.display="block";
}
function showNotOk(){
  let notOk = document.getElementById("notOk");
  console.log("동의하지 않았습니다");
  notOk.style.display="block";
}
