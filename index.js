const imageContainer = document.querySelector('.image-container')
const imagedescription = document.querySelector('.image-description')
const btn = document.querySelector('.btn')

function setImage(){
    imageContainer.classList.remove('loading')
    imageContainer.innerHTML = `
    <img src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="img">
    `
}

function setText(){
    imagedescription.classList.remove('loading')
    imagedescription.classList.remove('loading-text')
    imagedescription.innerHTML =
    `
    <span>System on Chip (SoC), Apple M1 Max chip, 10-core CPU with 8 performance cores and 2 efficiency cores, 32-core GPU, 16-core Neural Engine, Up to 400GB/s memory bandwidth</span>
    `
}

function setBtnFix(){
    btn.classList.remove('loading')
    btn.disabled = false
}

setTimeout(()=>{
    setImage()
    setText()
    setBtnFix()
},5000)