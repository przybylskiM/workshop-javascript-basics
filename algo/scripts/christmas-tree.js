function tree(ile) {
    
}
var txt = "";
for(i=1;i<=ile;i++){
  txt = "";
  for(j=i;j<ile;j++){
    txt += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    txt += "*";
  }
  console.log(txt);
}