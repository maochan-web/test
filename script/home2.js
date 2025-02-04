function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock2() {
   var now = new Date();
   var year=now.getFullYear();
   var month=now.getMonth()+1;
   var date=now.getDate();
   var nowHour = set2fig( now.getHours() );
   var nowMin  = set2fig( now.getMinutes() );
   var nowSec  = set2fig( now.getSeconds() );
   var msg =year+"/"+month+"/"+date+" "+nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("jikoku_now").innerHTML = msg;
}
setInterval('showClock2()',1000);