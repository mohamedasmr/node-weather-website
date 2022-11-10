console.log('Client side javascript')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const massageOne = document.querySelector('#massageOne')
const massageTwo = document.querySelector('#massageTwo')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    massageOne.textContent = 'Loading...'
    massageTwo.textContent = ''


    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            massageOne.textContent = data.error
        } else {
            massageOne.textContent = data.location
            massageTwo.textContent = data.forecast

        }
    })
})
})