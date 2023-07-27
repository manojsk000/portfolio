// width: 1536
// height: 864

/** navbar icon toggle */
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); //bx-x(x mark)
    navbar.classList.toggle('active');
}

/** Scroll section active link */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    // 1st
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset  + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                // console.log(top + " h " + offset + " i " + height + " j " + id);
            });
        };
    });
    /** Sticky navbar */
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 50)

    /** remove toggle icon and navbar when clicked */
    menuIcon.classList.remove('bx-x'); //bx-x(x mark)
    navbar.classList.remove('active');

};

/** scroll reveal */
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); //reveal the content from top and display
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin: 'bottom' }); //reveal the content from bottom and display
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); //reveal the content from left and display
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); //reveal the content from right and display

/** typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend development', 'Backend Development', 'AWS Basics'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/** access form data and store in json */
let formEl = document.querySelector(".form");

formEl.addEventListener("submit", event => {
    event.preventDefault();

    let a = "https://contact-bn3b.onrender.com/contactme"
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    fetch("https://contact-bn3b.onrender.com/contactme", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(window.location.assign("https://contact-bn3b.onrender.com/contactme"))
      .catch(error => console.log("404 error"))
})

/**  project preview links */
    const openBtn = document.querySelectorAll("[data-open]")
    const closeBtn = document.querySelectorAll("[data-close]")
    const modal = document.querySelectorAll(".dialogue")
    function changeFreq(element)
    {
        // console.log(element);
        // this is reference to the a tag you clicked on
        var i = parseInt(element.id);
        // console.log(i);

        openBtn[i].addEventListener('click', (e) => {
            e.preventDefault()
            modal[i].showModal();
    });

    // to close when the button is clicked
    closeBtn[i].addEventListener('click', () => {
        modal[i].close();
    });
    return false;
    }




/** code working 1st
 *  About: top:- 745  offsetTop:- 596  height:- 870  id:- about
 *  if(745 >= 596 && 745 < (596+870 = 1466))
 * {
 *      links.classList.remove('active') i.e home.class=active will remove.
 *      'header nav a[href*=' + id + ']'].classList.add('active) i.e in a href= about.classList.add('active')
 * }
*/



