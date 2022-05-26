
const doc = document.querySelector('#ramen-menu')

function parseData(ramens) {

    ramens.forEach(ramen => {
        // creating a new element
        const ramenPic = document.createElement('img')


        function addclick(ramenPic) {
            ramenPic.addEventListener('click', (e) => {
                document.querySelector('#ramen-detail img').src = ramen.image
                document.querySelector('#ramen-detail h2').textContent = ramen.name
                document.querySelector('#ramen-detail h3').textContent = ramen.restaurant
                document.querySelector('#rating-display').textContent = ramen.rating
                document.querySelector('#comment-display').src = ramen.comment
            })
        }
        addClick(ramenPic)

        // adding attributes
        ramenPic.setAttribute('src', ramen.image)

        // appending
        doc.append(ramenPic)
    })

}


document.addEventListener('DOMContentLoaded', () => {
    return fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(data => parseData(data))
})

document.querySelector('#new-ramen').addEventListener("submit", (e) => {
    e.preventDefault()
    let newRamen = document.createElement('img')
    newRamen.setAttribute('id', 'newId')
    newRamen.setAttribute('src', e.target.image.value)
    document.querySelector('#ramen-menu').append(newRamen)
    document.querySelector('#newId').addEventListener('click', () => {
        document.querySelector('.restaurant').innerText = e.target.restaurant.value
        document.querySelector('.name').innerText = e.target.name.value
        document.querySelector('#comment-display').innerText = e.target["new-comment"].value
        document.querySelector('#rating-display').innerText = e.target["new-rating"].value
        document.querySelector('#ramen-detail img').src = e.target.image.value
    })

})