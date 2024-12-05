function main(){
  p=0;var code=document.getElementById("program").value;e=""
  var output='';var s=[];var ts=[];m=0;var num=["0","1","2","3","4","5","6","7","8","9"]
  var input=document.getElementById("input").value;var input = input.split("\n");var tv="";e=""
  while (code.length>p){
    //IN PROGRESS
    if (code[p]=='"'){m=1;p+=2};
    while (m==1){ts.push(code[p]);p++;if (code[p+1]!=='"'){break;}};
    //IN PROGRESS
    if (code[p]in num and m==0){s.push(code[p])}
    else if (code[p]=="."){if (s.length>0){output+=s.pop()} else {break;};}
    else if (code[p]=="-"){if (s.length>0){s.pop()} else {break}}
    else if (code[p]=="\n"){break};
    p++;
  }
  fo=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length+'\nINPUT: '+tv+"\nSTOPED AT: "+p+"\n"+e
  document.getElementById("console").innerHTML=fo
}
