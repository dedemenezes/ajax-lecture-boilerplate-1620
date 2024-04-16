import Swal from 'sweetalert2'

// const url = 'https://api.github.com/users/marsevilla'
// console.log('STEP 1')
// fetch(url)  // Make the HTTP request
//   .then(response => response.json()) // PARSE THE RESPONSE
//   .then((data) => {
//     console.log('STEP 2 - Access data')
//     console.log(data)
//   })

// console.log('STEP 3')



// Post request W/ fetch

const postUrl =  "https://reqres.in/api/login"



const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const signUp = (event) => {
  console.log(event)
  event.preventDefault()

  fetch(postUrl, {
    method: 'POST',
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({ "email": emailInput.value, "password": passwordInput.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      if (data.error) {
        // alert(data.error)
        Swal.fire({
          title: 'Error!',
          text: data.error,
          icon: 'error'
        })
      }

      if (data.token) {
        // alert(`Token: ${data.token}`)
        Swal.fire({
          title: "Good job!",
          text: `Token: ${data.token}`,
          icon: "success"
        });
      }
    })
}

form.addEventListener('submit', signUp)
