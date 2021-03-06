// SET AFID
document.querySelector('#AFID').value = document.referrer.split('AFID=')[1] || '465368'

// TCPA CONSENT 
const agreeInput = document.querySelector('#TCPA')
agreeInput.addEventListener('click', () => document.querySelector('#tcpa_consent').value = 'Yes')

// GLOBAL SELECTORS 
const backBut = document.querySelector('.goBack')
const nextBut = document.querySelector('.next')
const submitBut = document.querySelector('[type=submit]')
const phoneInput = document.querySelector('#phone_home')
const wideInputs = document.querySelectorAll('.wide')
const form = document.querySelector('form')
const select = document.querySelectorAll('.page-1')
console.log(select);

// EVENT LISTENERS 
submitBut.addEventListener('click', validateAndSubmit)
backBut.addEventListener('click', goBack)
nextBut.addEventListener('click', goToNext)


// GO TO NEXT SLIDE
function  goToNext(e) {
    e.preventDefault()
    // validate()
    // console.log(validate());
    if (validate()) {
        document.querySelector('.slide-container').style.display = 'none'
        document.querySelector('.slide-container-2').classList.add('show')
    } 
    return
   

}

// GO BACK 
function goBack(e) {
    e.preventDefault()
    document.querySelector('.slide-container').style.display = 'block'
    document.querySelector('.slide-container-2').classList.remove('show')
}

// validate phone number
// todo: ADD TRY CATCH & SET PHONE NUMBER VALUE TO result.number
async function validatePhone() {
    const APIKey = ''
    const numToFetch = phoneInput.value

   const result = await fetch(`http://apilayer.net/api/validate?access_key=${APIKey}&number=${numToFetch}
   &country_code=us&format=1`)
    .then(res => res.json())
    .then(data  => {
        return data
    })
    // console.log(result.valid);
    if (result.valid) {
        console.log('you may pass');
        phoneInput.nextElementSibling.textContent = ''
        return true
    } else {
       phoneInput.nextElementSibling.textContent = 'Please enter a valid phone number'
       return false
    }
}



function validateAndSubmit(e) {
    e.preventDefault()
    function showNotValid(slide, field) {
        slide.placeholder = `* ${field} Required`
        slide.classList.add('required-input')
        slide.classList.remove('styled-input')
       //  submitBut.disabled = true
   }
   function removeRequired(slide) {
       slide.classList.remove('required-input')
       slide.classList.add('styled-input')
   }

   if (!form.first_name.value) {
        showNotValid(first_name, 'First Name')
    } else {
        removeRequired(first_name)
    }
    if (!form.last_name.value) {
        showNotValid(last_name, 'Last Name')
    } else {
        removeRequired(last_name)
    }
    if (!form.address.value) {
        showNotValid(address, 'Address')
    } else {
        removeRequired(address)
    }
    if (!form.city.value) {
        showNotValid(city, 'City')
    } else {
        removeRequired(city)
    }
    if (!form.state.value) {
        showNotValid(state, 'State')
    } else {
        removeRequired(state)
    }
    if (!form.zip.value) {
        showNotValid(zip, 'Zip Code')
    } else {
        removeRequired(zip)
    }
    if (!form.email_address.value) {
        showNotValid(email_address, 'Email')
    } else {
        removeRequired(email_address)
    }
    if (!form.phone_home.value) {
        showNotValid(phone_home, 'Phone Number')
    } else {
        removeRequired(phone_home)
    }
    if (!form.TCPA.checked) {
        document.querySelector('.tcpa-required').textContent = '* Required'
        // submitBut.disabled = true
    } else {
        document.querySelector('.tcpa-required').textContent = ''
    }


    if ([...wideInputs].every(input => input.value) && form.TCPA.checked && validatePhone() ) {
        console.log('will submit');
        document.querySelector('.submit-processing').classList.add('show')
        // submit()
    }
}

// console.log(electric_bill);
function validate() {


    function showNotValid(select) {
        
        select.classList.add('required-input')
        select.classList.remove('styled-input')
       //  submitBut.disabled = true
   }

   function removeRequired(select) {
    select.classList.remove('required-input')
    select.classList.add('styled-input')
}
console.log(electric_bill);
console.log(electric_bill.value);
console.log(electric_bill.selected);

    if(!electric_bill.value) {
        showNotValid(electric_bill)
        console.log('ran electric');
    } else {
        removeRequired(electric_bill)
    }
    if(!utility_provider.value) {
        showNotValid(utility_provider)
    } else {
        console.log('nope');
        removeRequired(utility_provider)
    }

    if(!credit_profile.value) {
        showNotValid(credit_profile)
    } else {
        console.log('nope');
        removeRequired(credit_profile)
    }

    if(!property_type.value) {
        showNotValid(property_type)
    } else {
        console.log('nope');
        removeRequired(property_type)
    }
    if(!property_ownership.value) {
        showNotValid(property_ownership)
    } else {
        console.log('nope');
        removeRequired(property_ownership)
    }
    if(!roof_shading.value) {
        showNotValid(roof_shading)
    } else {
        console.log('nope');
        removeRequired(roof_shading)
    }

    if ([...select].every(input => input.value)) {
        return true
    } else {
        return false
    }

}