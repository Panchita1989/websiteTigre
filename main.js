let backToTop = document.querySelector('.backToTop')
let scrollYPos1 = window.scrollY

window.addEventListener('scroll', () => {
    let scrollYPos2 = window.scrollY
    let dif = scrollYPos1 - scrollYPos2
    scrollYPos1 = scrollYPos2

    if(dif > 0 && scrollY > 80){
        backToTop.classList.add('visibel')
    }else{
        backToTop.classList.remove('visibel')
    }
})

backToTop.addEventListener('click', ()=> {
  scrollTo({top:0, behavior: "smooth"})
})

