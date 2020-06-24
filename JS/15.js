var alarmTime;
var curTime;
var check = new Date();
var hourNum;
var minNum;
function GetTime() {
var dt = new Date();
document.clock.local.value = IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes());
setTimeout("GetTime()", 1000);
curTime = (IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()));
}
function IfZero(num) {
return ((num <= 9) ? ("0" + num) : num);
}
function alarmSet() {
hourNum = document.clock.hourOpt[document. clock.hourOpt.selectedIndex].value;
minNum = document.clock.minOpt[document. clock.minOpt.selectedIndex].value;
alarmTime = hourNum + ":" + minNum;
}
function alarmOn() {
if (alarmTime == curTime) {
document.all.sound.src = document.clock.alarmSound.value;
}
else {
setTimeout("alarmOn()", 1000)
}
}
function alarmOff() {
document.all.sound.src = "";
alarmTime="";
}
function snooze() {
document.all.sound.src = "";
var snoozeL = parseInt(document.clock.snoozeOpt[document. clock.snoozeOpt.selectedIndex].value);
var snooze = new Date();
alarmTime = IfZero(snooze.getHours()) + ":" + IfZero(snooze.getMinutes() + snoozeL);
alarmOn();
}