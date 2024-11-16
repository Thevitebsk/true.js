function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];var m=0
  while (code.length>p){
    if (code[p]=='"'){m=1};
    while (m==1){ts.push(code[p]);p++
    if (code[p]=='"'){ts.shift();ts.pop();s.push(ts);m=0;break};};
    p++
  }
  output=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']'
  document.getElementById("console").innerHTML=output
}
