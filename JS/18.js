var scrollCounter=0;
var scrollText=",,,,,,,,,,,,";
var scrollDelay=70;
var i=0;
while (i++<140)
{
scrollText=""+scrollText;
}
function Scroller()
{
window.status=scrollText.substring(scrollCounter++, scrollText.length);
if (scrollCounter==scrollText.length)
{
scrollCounter=0;
}
setTimeout("Scroller()", scrollDelay);
}
Scroller();