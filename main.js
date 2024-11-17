function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];m=0
  while (code.length>p){
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]) ; if (code[p]=='"'){m=0;ts.pop();let tts=[ts.join()];ts=tts};};
    p++
  }
  output=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length
  document.getElementById("console").innerHTML=output
}
