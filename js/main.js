const links = document.querySelectorAll('a');
let reservationFormOpened = false;
const resetvationForm = document.querySelector('reservation-form');
const reservationFormCloseBtn = document.getElementById('closeBtn');

links.forEach(link=> {
    link.addEventListener('click', (a)=>{
        a.preventDefault()
    })
})
