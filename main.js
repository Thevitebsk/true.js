function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];m=0;let stringcon=""
  while (code.length>p){
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]) ; if (code[p]=='"'){m=0;ts.pop();var ts=ts.join('');for(let i=0; i<tempStack.length; i) {stringcon+=ts[0];ts.shift};
};};
    p++
  }
  output=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length
  document.getElementById("console").innerHTML=output
}
