function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];m=0
  while (code.length>p){
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]) ; if (code[p]=='"'){m=0;ts.pop();while(ts.length!==1){a=(ts[0])+(ts[1])
    ts.pop(0);ts.pop(0);ts.reverse();ts.push(a);ts.reverse()};s.push(ts)};};
    p++
  }
  output=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length
  document.getElementById("console").innerHTML=output
}
