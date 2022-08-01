// let sgn = document.getElementById("sign");
// let head = document.getElementById('head');
// let nav = document.getElementById('navb');


// console.log(sgn.style.height)

const ham = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_links');

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_item").forEach(n => n.
    addEventListener("click", () => {
        ham.classList.remove("active");
        navMenu.classList.remove("active");
}));



// Form Validation
const patterns = {
    fname: /^[A-Z]+[a-z]{1,20}$/,
    lname: /^[A-Z]+[a-z]{1,20}$/,
    email: /^([a-z\d\._]+)@([a-z\d_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[0-9]{10}$/,
    age: /^100|[2-9]\d|1[8-9]$/,
    blood: /^(A|B|AB|O)[-+]$/,
    city: /^([A-Z]+[a-z]{1,20})+( [A-Z]+[a-z]{1,20})*$/,
    state: /^([A-Z]+[a-z]{1,20})+( [A-Z]+[a-z]{1,20})*$/
};

//function to validate form input fields

function validate(field, regex) {
    if(regex.test(field.value)){
        field.setAttribute('class','valid');
    } else {
        field.setAttribute('class','invalid');
    }
}


const inputs = Array.from(document.querySelectorAll(".signup-form input"));

inputs.forEach(input => {
    input.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);

    })
});

const form = document.querySelector('#form1');

form.addEventListener('submit', e=> {
    e.preventDefault();
    let isValid = false;
    
    for(let input of inputs){
        if(!input.classList.contains('valid')){
            isValid = false;
            console.log('invalid data');
            break;
        } else if(input.classList.contains('valid')) {
            isValid = true;
        }
    }

    if(isValid) {
        console.log('valid data');
    }

})

