function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];m=0;let stringcon="";var num=["0","1","2","3","4","5","6","7","8","9",]
  while (code.length>p){
    //IN PROGRESS
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]) ; if (code[p]=='"'){m=0;ts.pop();var ts=ts.join('');for(let i=0; i<tempStack.length; i){stringcon+=ts[0];ts.shift()};alert(stringcon);};};
    //IN PROGRESS
    if (code[p]in num){s.push(code[p])}
    p++
  }
  output=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length
  document.getElementById("console").innerHTML=output
}
