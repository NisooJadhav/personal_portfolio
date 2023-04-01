/*==================== toggle icon navbar====================*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=() =>{
  sections.forEach(sec=> {
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top>=offset && top< offset+height ){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });
  /*==================== sticky navbar ====================*/
let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);
/*==================== remove toggle icon and navbar when click navbar link====================*/
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

};
/*==================== scroll reveal====================*/
ScrollReveal({
  // reset: true,
  distance:'80px',
  duration:2000,
  delay:200

});
ScrollReveal().reveal('.home-content, .section__title,section__subtitle',{ origin:'top' });
ScrollReveal().reveal('.home-img, .about__data,.skills__container,.qualification__container,.portfolio__container,.eve__container,.contact__container',{ origin:'bottom' });
ScrollReveal().reveal('.home-content h2,about__img',{ origin:'left' });
ScrollReveal().reveal('.home-content p',{ origin:'right' });

/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementsByClassName('skills__content'),
skillsHeader=document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass= this.parentNode.className;
    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className= 'skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className ='skills__content skills__open';
    }
}

skillsHeader.forEach((el)=>{
el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
  tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
/*==================== SHOW SCROLL UP ====================*/ 

