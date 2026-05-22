const text =
"Web Developer | Programmer | AI Enthusiast";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.querySelector(".typing")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }

}

typeEffect();

/* SCROLL ANIMATION */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});