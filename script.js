/*const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const subButton = document.getElementById('submit');*/

document.getElementById('submit').onclick = function () {
    let allAreFilled = true;
    document.getElementById('form').querySelectorAll("[required]").forEach(function(i) {
        if (!allAreFilled) return;
    document.getElementById('form').querySelectorAll('[name=${i.name}]').forEach(function(r) {
        })
        if (!i.value) {allAreFilled = false; return;}
    })
    if (!allAreFilled) {
        alert('Please, provide information in all Fields!')
    } else {
        alert('Your email has been sent! Please allow 1-2 business days for a response.')
    }
}










    