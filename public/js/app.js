console.log('Client side javascript is loaded');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Aguarde por favor.'
    messageTwo.textContent = ''
    fetch('/weather?address=' + search.value).then((response) => {
        response.json().then(({error, forecast, location, address}) => {
            if (error) {
                messageTwo.textContent = error
                messageOne.textContent = ''
            } else {
                messageOne.textContent = forecast + location
            }
        })
    })
})