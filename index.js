// Add your code here
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };

// fetch("http://localhost:3000/dogs", configurationObject);


// const formData = {
//   dogName : 'Byron',
//   dogBreed: 'Poodle',
// };

// const confgObj = {
//   method: "POST",
//   headers: {
//     'content-type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify(formData)
// }

// // fetch requests


// fetch('http://localhost:3000/dogs', confgObj)
// .then(resp => resp.json())
// .then(obj => console.log(obj))
// .catch(error => {
//   alert('Oops sorry! Rangnar');
//   console.log(error.message);

// })

const body = document.querySelector('body')
console.log(body)
let message = 'opps sorry'

usersData = {
  user: 'sid',
  email:'sid@innovations.org',
}
function submitData(user ,email){
  const userDataConfg = {
  method: "POST",
  Headers:{
    'content-type' : 'application/json',
    Accept : 'application/json'
  },
  Body: JSON.stringify(usersData)
 } 
};

  fetch('http://localhost:3000/users', userDataConfg)
  .then(resp => resp.json())
  .then(dataObj => {
    let p = document.createElement('p')
    body.appendChild(p);
  })
  .catch(error => {
    alert('message')
    console.log(error.message)
  });

  submitData();



