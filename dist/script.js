window.onscroll = function() {
    const navbar = document.querySelector("header");
    const navbarHeight = navbar.offsetTop;

    if (window.pageYOffset > navbarHeight) {
        navbar.classList.add("navbar-fixed");
        // profilMenu.classList.add("profil-menu");
    } else {
        navbar.classList.remove("navbar-fixed");
        // profilMenu.classList.remove("lg:profil-menu");
    }
}

const hambuger = document.querySelector("#hambuger");
const sidenav = document.querySelector("#sidenav");

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("hambuger-active");
    sidenav.classList.toggle("translate-x-full");
})

const bgImg = document.querySelector('#bg-img');
let fotoKe = 1;

setInterval(() => {
    fotoKe++
    // console.log(fotoKe)
    
    
    if (fotoKe > 4) {
        fotoKe = 1;
    }
    if (fotoKe == 1) {
        // bgImg.style.backgroundImage = url('../img/foto-1.jpeg');
        bgImg.classList.remove('bg-img-4')
        bgImg.classList.add('bg-img-1')

        bgImg.classList.remove('bg-[center_bottom_4rem]');
        bgImg.classList.add('bg-[center_bottom_7rem]');

        bgImg.classList.toggle('fade')
        setTimeout(function () {
            bgImg.classList.toggle('fade')
        }, 700)
    } else if (fotoKe == 2) {
        // bgImg.style.backgroundImage = url('../img/foto-2.jpeg');
        bgImg.classList.remove('bg-img-1')
        bgImg.classList.add('bg-img-2')
        
        bgImg.classList.remove('bg-[center_bottom_7rem]');
        bgImg.classList.add('bg-[center_bottom_12rem]');
        
        bgImg.classList.toggle('fade')
        setTimeout(function () {
            bgImg.classList.toggle('fade')
        }, 700)
        
    } else if (fotoKe == 3) {
        // bgImg.style.backgroundImage = url('../img/foto-3.jpeg');
        bgImg.classList.remove('bg-img-2')
        bgImg.classList.add('bg-img-3')
        
        bgImg.classList.remove('bg-[center_bottom_12rem]')
        bgImg.classList.add('bg-[center_bottom_9rem]')

        bgImg.classList.toggle('fade')
        setTimeout(function () {
            bgImg.classList.toggle('fade')
        }, 700)
    } else {
        bgImg.classList.remove('bg-img-3')
        bgImg.classList.add('bg-img-4')
        
        bgImg.classList.remove('bg-[center_bottom_9rem]')
        bgImg.classList.add('bg-[center_bottom_4rem]')

        bgImg.classList.toggle('fade')
        setTimeout(function () {
            bgImg.classList.toggle('fade')
        }, 700)
    }

}, 7000);

const kelas = document.querySelectorAll("#kelas path");

for (let i = 0; i < kelas.length; i++) {
    console.log(`Huruf ${i} adalah ${kelas[i].getTotalLength()}`)
}

const link1 = document.querySelectorAll('#topnav a'); 
const link2 = document.querySelectorAll('#sidenav a')

for (let i = 0; i < link1.length; i++) {
    // console.log(`LINK 1.${i} = ${link1[i]}`);

    link1[i].addEventListener('click', (e) => {
        // e.defaultPrevented;
        playAudio2();
        console.log(link1[i])
    })
}

for (let i = 0; i < link2.length; i++) {
    const tautan = link2[i];

    tautan.addEventListener('click', (e) => {
        e.defaultPrevented;
        playAudio2();
    })
    
}

let audio = new Audio('../audio/audio1.mp3');
let audio2 = new Audio('../audio/audio2.mp3');

function playAudio() {
    audio.play();
}
function stopAudio(){
    audio.pause();
}

function playAudio2() {
    audio2.play();
}