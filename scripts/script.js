

// elements
cardEl = document.getElementById('card');
hiddenEl = document.getElementById('hidden-card');

btnEl = document.querySelectorAll('.rating-input');

submitEl = document.getElementById('submit');

spanEl = document.querySelector('.span');

okEl = document.querySelector('.ok')

// global variable


// function
function init() {
  spanEl.innerText = 0;
} init()

// eventlistener

submitEl.addEventListener('click', function () {
  // remove card
  cardEl.style.display = 'none';

  // add thankyou card
  hiddenEl.style.display = 'block';

});
for(i=0;i<btnEl.length;i++){
btnEl[i].addEventListener('click',function(num){
        submitEl = num + btnEl;
        this.classList.add('selected');
        
})

}

btnEl.forEach((button) => {
  button.addEventListener('click', () => {
    spanEl.innerText = button.innerText;
    
  })
})

okEl.addEventListener('click', function () {
  // remove thankyou card
  hiddenEl.style.display = 'none';

  // add card
  cardEl.style.display = 'block';
});




