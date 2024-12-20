function main(){
  p = 0 ; e = ""; output = '' ; s = [] ; ts = [] ; m = 0
  num = ["0","1","2","3","4","5","6","7","8","9"] ; code = document.getElementById("program").value ; input = document.getElementById("input").value.split("\n");
  while (code.length>p){
    //IN PROGRESS
    if (code[p]=='"'){m=1;p++};
    while (m==1){ts.push(code[p]);p++;if (code[p+1]!=='"'){break;}};
    //IN PROGRESS
    if (code[p]in num && m==0){s.push(code[p])}
    else if (code[p]=="."){if (s.length>0){output+=s.pop()} else {break;};}
    else if (code[p]=="-"){if (s.length>0){s.pop()} else {break}}
    else if (code[p]=="\n"){break};
    p++;
  }
  fo=output+'\nSTACK: ['+s+']\nTEMPSTACK: ['+ts+']\nBYTES: '+code.length+"\nSTOPED AT: "+p+"\n"+e
  document.getElementById("console").innerHTML=fo
}
