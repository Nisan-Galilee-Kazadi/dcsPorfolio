const menuList = document.getElementById("menuList")
const buttonMenu = document.getElementById('buttonMenu')
const closed = document.querySelector('.closed')


function menuTransform() {
    if (menuList.classList.contains("open")) {
        menuList.classList.remove("open");
        menuList.classList.add("close");

    } else {
        menuList.classList.remove("close");
        menuList.classList.add("open");
    }

    
}
function menuTransform2() {
    if (menuList.classList.contains("open")) {
        menuList.classList.remove("open");
        menuList.classList.add("close");
    }
    
}

menuList.addEventListener("click",menuTransform2)
buttonMenu.addEventListener("click", menuTransform)
closed.addEventListener("click", menuTransform)


const corps = document.getElementById('corps')

function backgroud() {
    if(corps.classList.contains("opened")){
        corps.classList.remove("opened")
        corps.classList.add("closer")
    }else {
        corps.classList.remove("closer")
        corps.classList.add("opened")
    }
}

buttonMenu.addEventListener('click',backgroud)

const navBar = document.getElementById('navBar')

function scrollBar (){
    if (window.scrollY >= 200){
        navBar.classList.add('scroller')
    }else{
        navBar.classList.remove('scroller')
    }
}

window.addEventListener("scroll", scrollBar)









