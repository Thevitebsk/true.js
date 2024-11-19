var global_end=0;var p=0;
function run(){
  var code=document.getElementById("program").value;
  var output='';var s=[];var ts=[];m=0;let stringcon="";var num=["0","1","2","3","4","5","6","7","8","9"]
  while (code.length>p, code[p]!=="\n"){
    //IN PROGRESS
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]) ; if (code[p]=='"'){m=0;ts.pop();var ts=ts.join('');for(let i=0; i<tempStack.length; i){stringcon+=ts[0];ts.shift()};alert(stringcon);};};
    //IN PROGRESS
    if (code[p]in num){s.push(code[p])}
    else if (code[p]=="."){if (s.length>0){output+=s.pop()} else {error("STACK EMPTY");break};}
    else if (code[p]==","){var input=document.getElementById("input").value;var input = input.split("\n")}
    p++
  }
  fo=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length
  if (global_end==0){document.getElementById("console").innerHTML=fo}
}
function error(e){
  document.getElementById("console").innerHTML=e+"\nAT SYMBOL "+p++
  global_end=1
}
