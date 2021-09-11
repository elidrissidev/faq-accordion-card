// Script to collapse any open answer before expanding a new one

const questionsList = document.querySelector('.questions-list')

questionsList.addEventListener('click', function(event) {
  if (!event.target.classList.contains('question')) {
    return
  }

  const openAnswer = document.querySelector('.question-answer[open]')

  // Avoid continuously expanding and collapsing the same answer
  // by checking if the open answer is not the current one
  if (openAnswer && openAnswer !== event.target.closest('.question-answer')) {
    openAnswer.removeAttribute('open')
  }
})
