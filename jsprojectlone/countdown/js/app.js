// UI
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const year = document.getElementById('year');

const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentyear = new Date().getFullYear();
// console.log(currentyear);

//count ကို auto တိုးစေချင်တော့ currentyear + 1 လုပ်ပြီ dynamically ပြောင်းလို့ရတယ်
//want to increase count automatically, so add 1 to currentyear for dynamically change
const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime);

year.textContent = currentyear + 1;

function updatecountdown(){
    // console.log('hay');

    const currenttime = new Date();
    // console.log(currenttime);

    const diff = newyeartime - currenttime;
    // console.log(diff);

    //millisecond -> second -> minute -> hour -> day
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    console.log(d); //output is in days (158 for example)

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    console.log(h);

    const m = Math.floor(diff / 1000 / 60) % 60;
    console.log(m);

    const s = Math.floor(diff / 1000 ) % 60;
    console.log(s);

    days.textContent = d;
    hours.textContent = h < 10 ? "0"+h : h;
    minutes.innerText = m < 10 ? "0"+m : m;
    seconds.innerText = s < 10 ? "0"+s : s;

    /*to want leading zero in h,m,s => do condition check if h/m/s < 10
    * ? "0"+h : h (using ternary operator)*/
}

//loading will disappear after 1s
/*loading.remove() is to remove loading from document*/
setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},1000);


// updatecountdown();
setInterval(updatecountdown,1000); //to reload/invoke function



/*function တခုကို reload လုပ်ချင်ရင် setInterval ကိုသုံးရင်ရတယ်*/