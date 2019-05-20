function timerLogic()
{
var counter=11000;
var cnt = document.getElementsByClassName("counter");
var intervalID = setInterval(convertSec,1000);
function convertSec()
{
    console.log('counter'+counter);
    if(counter)
    {
        let hour = Math.floor(counter/3600);
        let remainder = counter - hour*3600;
        let min = Math.floor(remainder/60);
        let remainderMin = remainder - min*60;
        let sec = remainderMin % 60;
        for(var i=0;i<cnt.length;i++)
        {
        cnt[i].innerHTML=hour+":"+min+":"+sec;
        }
        counter--;

    }
    else
    {
        clearInterval(intervalID);
    }
    
}
}

module.exports=timerLogic;