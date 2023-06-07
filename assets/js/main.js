/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Array of skills in the desired order
const skillsOrder = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Jest',
    'Docker', 'Git', 'MongoDB', 'Postgres', 'GraphQL', 'Jira', 'AWS', 'MySQL',
    'RESTful APIs', 'JQuery', 'JSON', 'Software Architecture', 'XML', 'SOAP',
    'DIY', 'Apigee', 'Node.js', 'Express'
  ];
  
  // Function to create the skills elements dynamically
  function createSkillsElements() {
    const skillsList = document.querySelector('.skills__list');
  
    // Add the top 5 skills to the skills list
    for (let i = 0; i < 5; i++) {
      const skillName = skillsOrder[i];
      const skillElement = createSkillElement(skillName);
      skillsList.appendChild(skillElement);
    }
  
    // Add the remaining skills to the skills list with display: none
    for (let i = 5; i < skillsOrder.length; i++) {
      const skillName = skillsOrder[i];
      const skillElement = createSkillElement(skillName);
      skillElement.style.display = 'none';
      skillsList.appendChild(skillElement);
    }
  }
  
  // Function to create a single skill element
  function createSkillElement(skillName) {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skills__data');
  
    const skillNamesElement = document.createElement('div');
    skillNamesElement.classList.add('skills__names');
  
    const skillIconElement = document.createElement('i');
    skillIconElement.classList.add(`bx`, `bxl-${skillName.toLowerCase().replace('.', '')}`, `skills__icon`);
    skillNamesElement.appendChild(skillIconElement);
  
    const skillNameElement = document.createElement('span');
    skillNameElement.classList.add('skills__name');
    skillNameElement.textContent = skillName;
    skillNamesElement.appendChild(skillNameElement);
  
    skillElement.appendChild(skillNamesElement);
  
    const skillBarElement = document.createElement('div');
    const skillBarClass = `skills__bar skills__${skillName.toLowerCase().replace('.', '')}`;
    skillBarElement.classList.add(skillBarClass);
    skillElement.appendChild(skillBarElement);
  
    const skillPercentageElement = document.createElement('div');
    const skillPercentage = '95%'; // Set the desired percentage
    skillPercentageElement.innerHTML = `<span class="skills__percentage">${skillPercentage}</span>`;
    skillElement.appendChild(skillPercentageElement);
  
    return skillElement;
  }
  
  // Create the skills elements when the page has finished loading
  window.addEventListener('load', createSkillsElements);
  

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
