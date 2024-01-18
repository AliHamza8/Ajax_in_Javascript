const card = document.querySelector(".card")
const followers = document.querySelector(".count")
const btnShow = document.querySelector(".btn-show")


const xhr = new XMLHttpRequest()
const url = "https://randomuser.me/api/"
xhr.open('GET', url)

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        if(data.results.length > 0) {
            const newImage = document.createElement('img')
            const newP = document.createElement('p')
    
            card.appendChild(newImage)
            card.appendChild(newP)
    
    
            newImage.width = '15rem'
            newImage.height = '10rem'
            newImage.src = data.results[0].picture.medium
            
            newP.textContent = "Phone: " + data.results[0].phone
        } else {
            console.log("nothing")
        }
    }
}

xhr.send()