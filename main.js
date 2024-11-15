function run(){
  var code=document.getElementById("program").value;
  var output='';var p=0;var s=[];var ts=[]
  while (code.length>p){p++}
  output=output+'\nSTACK:'+s
  document.getElementById("output").innerHTML=output
}