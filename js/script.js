const getD = JSON.parse(localStorage.getItem('yData'));
console.log(getD);

document.getElementById('form').addEventListener('submit', (eventValue) => {
    // eventValue.preventDefault();

// function forms() {
//     document.getElementById('form')
//     eventValue.preventDefault();

// }

const text = document.getElementById('text').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const utext = document.getElementById('utext');
const uemail = document.getElementById('uemail');
const upassword = document.getElementById('upassword');

// for (i = 0; something - 1; i++) {
//     console.log(i)
// }
const yData = [
    text,
    email,
    password
]
for (i = 0; i < 3; i++) {
    const yourData = yData[i];
    console.log(yourData);
}
const ytext = yData[0];
const yemail = yData[1];
const ypassword = yData[2];
localStorage.setItem('yData', JSON.stringify(yData));


if (text === "") {
    utext.innerHTML = 'Input your name';
}
else {
    utext.innerHTML = '';
}

if (email === "") {
    uemail.innerHTML = 'Input your email';
}
else {
    uemail.innerHTML = '';
}

if (password === "") {
    upassword.innerHTML = 'Input your password';
}
else {
    upassword.innerHTML = '';
}
})

document.getElementById('form2').addEventListener('submit', (eventValue) => {
    
})