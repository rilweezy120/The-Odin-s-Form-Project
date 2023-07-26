const submitBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const pass = document.getElementById("password");
const confPass = document.getElementById("confirm-pass")
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const error = document.querySelectorAll('.error')

const checkPhoneNumber = () => {
    phoneNumber.addEventListener('input', event => {
        if(phoneNumber.validity.tooShort) {
            phoneNumber.setCustomValidity(`Less than required length, you typed ${phoneNumber.value.length}, increase to ${phoneNumber.maxLength}`)
        }

        else {
            phoneNumber.setCustomValidity("");
        }

        if(phoneNumber.validity.tooShort){
            phoneNumber.style.border = "1px solid red"
        }
    })
}


const checkEmail = () => {
    email.addEventListener('input', event => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an email address!");
          } 
          
          else {
            email.setCustomValidity("");
            email.style.border = "1px solid green"
          }

          if(email.validity.typeMismatch){
            email.style.border = "1px solid red"
        }


    })


}

const checkPassword = () => {
    if (pass.value !== confPass.value) {
        error.forEach(e => {
            e.style.display = "block";
            pass.style.border = "1px solid red"
            confPass.style.border = "1px solid red"
        })
        
      } 

      else {
        error.forEach(e => {
            e.style.display = "none";
            pass.style.border = "1px solid green"
            confPass.style.border = "1px solid green"
      })

    }
      
     
}




const submitForm = e => {
    // e.preventDefault();
    let newInputs = Array.from(inputs);
    //    newInputs.forEach(element =>{
    //     if(element.value = ""){
    //         input
    //     }
    //     console.log(element)
    //    })

    //  if(pass!==confPass){

    //     e.preventDefault();
    //  }

    checkEmail();
    checkPhoneNumber();
    checkPassword();


}




submitBtn.addEventListener("click", submitForm)