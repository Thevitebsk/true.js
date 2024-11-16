function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[];var m=0
  while (code.length>p){
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p]);
    if (code[p]=='"'){s.push(ts);m=0};}
    p++
  }
  output=output+'\nSTACK: ['+s+']'
  document.getElementById("console").innerHTML=output
}
