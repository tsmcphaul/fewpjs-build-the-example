// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likesContainer = document.querySelector('li')
const allHearts = document.querySelectorAll('.like-glyph')

for (const hrt of allHearts) {
  hrt.addEventListener('click', addLike)
}

function addLike(e) {
  if (e.target.innerText === EMPTY_HEART) {
    mimicServerCall()
    .then(() => {
      e.target.innerText = FULL_HEART; 
      e.target.classList.toggle('activated-heart');  
    })
    .catch(err => {
      const modal = document.getElementById("modal");
      modal.classList.toggle('hidden'); 
      modal.innerText = err;
      setTimeout(() => modal.classList.toggle('hidden'), 3000);
    })
  }
  if (e.target.innerText === FULL_HEART) {
    e.target.innerText = EMPTY_HEART; 
    e.target.classList.toggle('activated-heart'); 
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
