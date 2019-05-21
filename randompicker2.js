numList = Array.from(Array(500).keys());

function randompick(arr, num) {

  luckyNumList = new Array(num);
  luckyNumString = "";
  for(var i=0; i<62; i++) {
    var x = parseInt(Math.random()*arr.length);
    luckyNumList[i] = arr[x]+1;
    console.log(luckyNumList);
    arr.splice(x,1);
  }
  console.log(luckyNumList);
}

function sorting(arr, num, divisor) {
  for(i=0;i<num;i++){
    if(arr[i]<10){
        arr[i]+="";
        arr[i]="00"+arr[i];
      }
    else if(arr[i]<100){
        arr[i]+="";
        arr[i]="0"+arr[i];
      }
    }
}

function numtoStr(arr, num){
  for(var i=0;i<num;i++){
    var str= arr;
  }
  return str;
}


function range(a,b){
  return a-b;
}

function main() {
  if(document.body.id=='1'){
    // output = getResult(numList, 25);

    randompick(numList, 62);

    luckySlc1 = luckyNumList.slice(0, 25);
    luckySlc2 = luckyNumList.slice(25, 32);
    luckySlc3 = luckyNumList.slice(32, 62);
    luckySlc1.sort(range);
    luckySlc2.sort(range);
    luckySlc3.sort(range);
    console.log(luckySlc1);
    console.log(luckySlc2);
    console.log(luckySlc3);

    sorting(luckySlc1, 25, 5);
    sorting(luckySlc2, 7, 4);
    sorting(luckySlc3, 30, 5);

    luckyNumString1 = numtoStr(luckySlc1, 25);
    luckyNumString2 = numtoStr(luckySlc2, 7);
    luckyNumString3 = numtoStr(luckySlc3, 30);


  var luckyNum1='';
    for(i=0;i<25;i++){
      luckyNum1 += luckyNumString1[i];

      if(i%5==4) {luckyNum1 += "<br><br>";}
      else {luckyNum1 += "&nbsp; &nbsp; &nbsp; &nbsp;";}
    }

  var luckyNum2='';
    for(i=0;i<7;i++){
        luckyNum2 += luckyNumString2[i];

        if(i%4==3) {luckyNum2 += "<br><br>";}
        else {luckyNum2 += "&nbsp; &nbsp; &nbsp; &nbsp;";}
      }


   var luckyNum3='';
    for(i=0;i<30;i++){
        luckyNum3 += luckyNumString3[i];

        if(i%5==4) {luckyNum3 += "<br><br>";}
        else {luckyNum3 += "&nbsp; &nbsp; &nbsp; &nbsp;";}
       }

    localStorage.setItem("lucky1", luckyNum1);

    localStorage.setItem("lucky2", luckyNum2);

    localStorage.setItem("lucky3", luckyNum3)

    output = luckyNum1;
    var pid = "result1";
  }

  else if(document.body.id=='2'){

      // output = document.write(luckyNumString);
    var luckyNum2_1 = localStorage.getItem("lucky2");

    output = luckyNum2_1;

    var pid = "result2";
  }
  else if(document.body.id=='3'){
    var luckyNum3_1 = localStorage.getItem("lucky3");

    output=luckyNum3_1;
      // output = document.write(luckyNumString);

    var pid = "result3";
  }

  document.getElementById(pid).innerHTML=output;
}

window.onload = function(){
  main();
}
