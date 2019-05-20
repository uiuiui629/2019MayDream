numList = Array.from(Array(500).keys());

function getResult(arr,num,divisor) {

  luckyNumList = new Array(num);
  luckyNumString = "";
  for(var i=0;i<num;i++) {
    x = parseInt(Math.random()*arr.length);
    luckyNumList[i] = arr[x]+1;
    arr.splice(x,1);
  }
  luckyNumList.sort(range);

for(i=0;i<num;i++){
  if(luckyNumList[i]<10){
      luckyNumList[i]+="";
      luckyNumList[i]="00"+luckyNumList[i];
    }
  else if(luckyNumList[i]<100){
      luckyNumList[i]+="";
      luckyNumList[i]="0"+luckyNumList[i];
    }
  }

  for(i=0;i<num;i++){
    luckyNumString += luckyNumList[i].toString();

    if(i%divisor==(divisor-1)) {luckyNumString += "<br><br>";}
    else {luckyNumString += "&nbsp; &nbsp; &nbsp; &nbsp;";}
  }
  return luckyNumString;
}

function range(a,b){
  return a-b;
}

function main() {
  if(document.body.id=='1'){output = getResult(numList, 25, 5); var pid = "result1";}
  else if(document.body.id=='2'){output = getResult(numList, 7, 4); var pid = "result2";}
  else if(document.body.id=='3'){output = getResult(numList, 30, 5); var pid = "result3";}

  document.getElementById(pid).innerHTML = output;
}

window.onload = function(){
  main();
}
