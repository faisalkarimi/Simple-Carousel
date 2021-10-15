const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const images = document.querySelector('.images')
const image = images.querySelectorAll('.images img')

let index = 0;

const interval = setInterval( run, 2000 )

function run() {
    index++

    changeImage()
}

function changeImage() {
    const imageLength = image.length - 1;
    
    if (index > imageLength) {
        index = 0;
    } else if (index < 0) {
        index = imageLength;
    }

    
    images.style.transform = `translateX(${-index * 500}px)`
}


prevBtn.addEventListener('click', () => {
    index--
    images.style.transform = `translateX(${-index * 500}px)`
})

nextBtn.addEventListener('click', () => {
    index++
    images.style.transform = `translate(${-index * 500}px)`
})