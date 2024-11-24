var global_end=0;p=0;
function main(){
  p=0;var code=document.getElementById("program").value;
  var output='';var s=[];var ts=[];m=0;var num=["0","1","2","3","4","5","6","7","8","9"]
  var input=document.getElementById("input").value;var input = input.split("\n");var tv="";e=""
  while (code.length>p){
    //IN PROGRESS
    if (code[p]=='"'){m=1;p++};
    if (m==1){ts.push(code[p])};
    //IN PROGRESS
    if (code[p]in num){s.push(code[p])}
    else if (code[p]=="."){if (s.length>0){output+=s.pop()} else {break};}
    else if (code[p]==","){tv=input[0];input.shift()}
    else if (code[p]=="\n"){break}
    else if (code[p]=="'"){s.push(tv.substring(1,tv.lenght))}
    p++
  }
  fo=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length+'\nINPUT: '+tv
  if (global_end==0){document.getElementById("console").innerHTML=fo}
}
