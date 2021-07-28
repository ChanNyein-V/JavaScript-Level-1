const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

//Check Required Field
function checkrequired(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach(function (inputarr){
        // console.log(inputarr); //output value will be in arrays
        // console.log(inputarr.value); // to extract each input value from input arrays
        // console.log(inputarr.id); //get id from input attribute

        if (inputarr.value === ''){
            // showerror(inputarr,'this field is required.');
            // showerror(inputarr,`${inputarr.id} is required.`);

            // showerror(inputarr,`${inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1)} is required.`);

            showerror(inputarr,`${getfieldname(inputarr)} is required.`);
        }else{
            showsuccess(inputarr);
        }

    })
}

// Get Field Name
function getfieldname(inputarr){
    // console.log('hay');
    // console.log(inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1));
    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
// getfieldname(username);

//Check Input Length
function checklength(input,min,max){
    if (input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be at least than ${max} characters`);
    }else{
        showsuccess(input);
    }
}

//Check Email is Valid?
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is not valid');
    }
}

// Check Passwords Match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showerror(input2,'Password did not match');
    }
    /*else{
        showsuccess(input2);
    }*/
}



// Event Listener
form.addEventListener('submit',function (e){
    e.preventDefault();
    // console.log('hay');

    checkrequired([username,email,password,cfmpassword]); // to check input field whether its empty or not

    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);

    checkpasswordsmatch(password,cfmpassword);
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
/*function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/


/*
* Regular Expression ဆိုရင် မသင့်တော်တဲ့ စကားလုံးတွေကို ဖယ်တာ ပိတ်လိုက်တာ/ပြောမယ်ဆိုရင် စစ်လိုက်တာ
*
* */