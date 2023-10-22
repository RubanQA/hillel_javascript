const name = prompt("Enter your name:").trim();
const lastName = prompt("Enter your last namе:").trim();
let email = prompt("Enter your email:").replace(/\s/g, '').toLowerCase();
const birthYear = prompt("Enter year of birth:").replace(/\s/g, '');
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear);

if (email.indexOf('@') === -1) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
    email = `not valid email <b>${email}</b> (symbol @ find in ${email.indexOf('@') === 0 ? 'first' : 'last'} place)`;
}

document.body.innerHTML = `<ul><li>Full name: ${name} ${lastName}</li><li>Email: ${email}</li><li>Age: ${age}</li></ul>`;