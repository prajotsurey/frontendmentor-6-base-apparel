document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#emailForm")
  const emailInput = document.querySelector('#email-input')
  let errorSpan = document.querySelector('#error-span')
  let errorIcon = document.querySelector('#error-icon')

  const validate = (input, label) => {
    if(input.validity.typeMismatch) {
      return {
        error: true,
        errorType: 'typeMismatch',
        errorMessage: `Please provide a valid ${label}`
      }
    } else if(input.validity.valueMissing) {
      return {
        error: true,
        errorType: 'valueMissing',
        errorMessage: `Please provide an ${label}`
      }
    }
    return{
      error: false,
      errorType: null,
      errorMessage: null
    }
  }

  form.addEventListener('submit', (event) => {
    const response = validate(emailInput, 'email')
    if(response.error){
      event.preventDefault()
      emailInput.classList.add('invalid-input')
      errorSpan.classList.add('error-text')
      errorIcon.classList.remove('hidden')
      errorSpan.innerHTML = response.errorMessage
    }
  })

  emailInput.addEventListener('focus', () => {
    emailInput.classList.remove('invalid-input')
    errorSpan.classList.remove('error-text')
    errorIcon.classList.add('hidden')
    errorSpan.innerHTML = ''
  })

  emailInput.addEventListener('blur', () => {
    const response = validate(emailInput, 'email')
    if(response.error){
      emailInput.classList.add('invalid-input')
      errorSpan.classList.add('error-text')
      errorIcon.classList.remove('hidden')
      errorSpan.innerHTML = response.errorMessage
    }
  })
})