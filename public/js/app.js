// console.log('Client side javascript file is loaded!');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
});


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;


    console.log(location);
})

// // Error beacuse of the forecast
// const weatherForm = document.querySelector('form');
// const search = document.querySelector('input');
// const messageOne = document.querySelector('#message-1');

// messageOne.textContent = 'From JavaScript';

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const location = search.value;



//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 console.log(data.location);
//                 // console.log(data.forecast);

//             }
//         })
//     });

// })