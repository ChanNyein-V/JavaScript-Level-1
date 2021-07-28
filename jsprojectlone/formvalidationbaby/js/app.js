const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

// Event Listener
form.addEventListener('submit',function(e){
    // console.log(e);

    e.preventDefault(); //to stop reload
    // console.log('hay');

    if(username.value === ''){
        showerror(username,"Username is required");
    }else{
        showsuccess(username);
    }

    if (email.value === ''){
        showerror(email,'Email is required');
    }else if(!validateEmail(email.value)){
        showerror(email,'Email is not valid');
    }else{
        showsuccess(email);
    }

    if (password.value === ''){
        showerror(password,'Password is required');
    }else{
        showsuccess(password);
    }

    if (cfmpassword.value === ''){
        showerror(cfmpassword,"Confirm Password is required");
    }else if(password.value !== cfmpassword.value){
        showerror(cfmpassword,'Password do not match');
    }else{
        showsuccess(cfmpassword);
    }
});

function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    //formcontrol.classList.add('error');


    // const small = document.querySelector('small');
    /*formcontrol သုံးတယ်ဆိုတာ သူ့ formcontrol သူ့ဖြစ်စေချင်လို့
    * to call its own parent formcontrol to avoid complicate*/
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";

    /*formcontrol.classList.remove('error');
    formcontrol.classList.add('success');*/
}

// For checking email format
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


/*
* Regular Expression ဆိုရင် မသင့်တော်တဲ့ စကားလုံးတွေကို ဖယ်တာ ပိတ်လိုက်တာ/ပြောမယ်ဆိုရင် စစ်လိုက်တာ
*
* */