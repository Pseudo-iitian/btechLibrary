var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: false,
  centerSlide: true,
  fade: true,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop: false,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2, 
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView:3,
    }
  },
});



const goUp = document.getElementById('scrollToTopBtn');

goUp.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

// Show the "Scroll to Top" button when scrolling down
window.onscroll = function() {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}


const allCards = document.querySelectorAll('.cards');
allCards.forEach((card)=>{
  console.log(card);
})













const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  // Get the current theme from body classes
  let theme = document.body.classList.value;

  // Toggle between dark-theme and light-theme
  var newTheme = (theme === 'dark-theme') ? 'light-theme' : 'dark-theme';
  document.body.classList.toggle('dark-theme', newTheme === 'dark-theme');
  document.body.classList.toggle('light-theme', newTheme === 'light-theme');

  // Update localStorage with the new theme
  localStorage.setItem('backgroundColor', newTheme);

  // Get the current state from the toggle element classes
  let currentState = toggle.classList.value;

  // Toggle between active and inactive
  var newState = (currentState === 'active') ? 'inactive' : 'active';

  // Remove all existing classes from toggle
  toggle.classList = '';

  // Add the new state to toggle
  toggle.classList.add(newState);

  // Update localStorage with the new state
  localStorage.setItem('state', newState);
});



function setInitialBackgroundColor() {
  // Retrieve the color from localStorage
  var savedColor = localStorage.getItem('backgroundColor');
  var savedState = localStorage.getItem('state');
  // If a color is found in localStorage, set it as the background color
  if (savedColor && savedState) {
    document.body.classList.toggle(savedColor);
    toggle.classList = '';
    toggle.classList.toggle(savedState);
  }
};

setInitialBackgroundColor();


