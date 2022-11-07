const whatsapp = document.querySelector('.whatsapp')
const facebook = document.querySelector('.facebook')
const twitter = document.querySelector('.twitter')

const pageUrl = location.href
const message = 'הכירו את יוצרי הקליפים החדשים'

const whatsappApi = `https://wa.me/?text=${pageUrl}. ${message}`
const facebookApi = `https://www.facebook.com/sharer.php?u=${pageUrl}. ${message}`
const twitterApi = `https://twitter.com/intent/tweet?text=${pageUrl}. ${message}`


whatsapp.addEventListener('click', () => {
    window.open(url = whatsappApi, target='blank')
})

facebook.addEventListener('click', () => {
    window.open(url = facebookApi, target='blank')
})

twitter.addEventListener('click', () => {
    window.open(url = twitterApi, target='blank')
})


