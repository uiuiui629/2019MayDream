let numList = Array.from(Array(500).keys());

function getResult(arr,num,divisor) {
  var i;
  let luckyNumList = new Array(num);
  let luckyNumString = "";
  for(i=0;i<num;i++) {
    var x = parseInt(Math.random()*arr.length);
    luckyNumList[i] = arr[x]+1;
    arr.splice(x,1);
  }
  luckyNumList.sort(range);

  for(i=0;i<num;i++){
    luckyNumString += luckyNumList[i].toString();
    if(i%divisor==(divisor-1)) {luckyNumString += "<br/>";}
    else {luckyNumString += "\t";}
  }
  return luckyNumString;
}

function range(a,b){
  return a-b;
}

function main() {
  if(document.body.id=='1'){var num = 25; var pid = "result1"; var divisor = 5;}
  else if(document.body.id=='2'){var num = 7; var pid = "result2"; var divisor = 4;}
  else if(document.body.id=='3'){var num = 30; var pid = "result3";  var divisor = 5;}
  var output = getResult(numList,num,divisor);
  document.getElementById(pid).innerHTML = output;
}

window.onload = function(){
  main();
}
