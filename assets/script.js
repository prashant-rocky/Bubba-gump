// / ---------------- Cookie Consent ----------------/
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    palette: {
      popup: { background: "#000" },
      button: { background: "#f1d600" }
    },
    theme: "classic",
    content: {
      message: "This website uses cookies to ensure you get the best experience.",
      dismiss: "Got it!",
      link: "Learn more",
      href: "https://bubba-gump.netlify.app/privacy-policy"
    }
  })
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000, // time between slides in ms (3000 = 3 seconds)
        disableOnInteraction: false, // keeps autoplay running after user swipes
    },
    loop: true, // makes it infinite
});
var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});
// menu
// First type of menu - Starters & Shrimp Specials
const menu1 = [
    {
        id: 1,
        name: "Shrimp Cocktail",
        description: "Chilled shrimp served with our signature tangy cocktail sauce.",
        price: "$12.99",
        image : "assets/images/menu1.webp"
    },
    {
        id: 2,
        name: "Cajun Shrimp Skillet",
        description: "Spicy sautéed shrimp tossed with Cajun butter and garlic bread.",
        price: "$14.99",
        image : "assets/images/menu2.jfif"
    },
    {
        id: 3,
        name: "Seafood Hush Puppies",
        description: "Golden-fried hush puppies stuffed with shrimp and crab, served with remoulade.",
        price: "$9.99",
        image : "assets/images/menu3.jfif"
    },
    {
        id: 4,
        name: "Calamari Rings",
        description: "Crispy fried calamari served with marinara and lemon aioli.",
        price: "$11.99",
        image : "assets/images/menu4.webp"
    },
    {
        id: 5,
        name: "Shrimp Mac & Cheese",
        description: "Creamy mac & cheese topped with buttery garlic shrimp.",
        price: "$13.99",
        image : "assets/images/menu5.jfif"
    }
];

// Second type of menu - Mains & Burgers
const menu2 = [
    {
        id: 1,
        name: "Captain’s Fish & Chips",
        description: "Beer-battered white fish served crispy with golden fries and tartar sauce.",
        price: "$18.99",
        image : "assets/images/menu6.jfif"
    },
    {
        id: 2,
        name: "Bubba’s Shrimp Burger",
        description: "Juicy shrimp patty topped with lettuce, tomato, and Bubba’s secret sauce.",
        price: "$16.99",
        image : "assets/images/menu7.jpg"
    },
    {
        id: 3,
        name: "Forrest’s Surf & Turf",
        description: "Tender steak paired with garlic shrimp, mashed potatoes, and veggies.",
        price: "$24.99",
        image : "assets/images/menu8.jfif"
    },
    {
        id: 4,
        name: "Southern Fried Chicken",
        description: "Crispy buttermilk fried chicken served with mashed potatoes and gravy.",
        price: "$19.99",
        image : "assets/images/menu9.webp"
    },
    {
        id: 5,
        name: "Seafood Alfredo Pasta",
        description: "Creamy Alfredo pasta tossed with shrimp, scallops, and fresh herbs.",
        price: "$21.99",
        image : "assets/images/menu10.jpg"
    }
];
menu1.forEach(menu => {
const menuBox1 = document.getElementById("menuBox1");
if (menuBox1) {
    menuBox1.innerHTML += 
        `
        <div class="col-md-12 text-start py-3" key="${menu.id}">
            <div class="products d-flex">
                <div class="img px-2">
                    <img src="${menu.image}" alt="${menu.name}" height="100" width="100" class="productImg">
                </div>
                <div class="productName pt-3">
                    <h4 class="d-inline">${menu.name} .....</h4>
                    <h3 class="d-inline float-end">${menu.price}</h3>
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>
    `;
   

} });
menu2.forEach(menu => {
const menuBox2 = document.getElementById("menuBox2");
if (menuBox2) {
    menuBox2.innerHTML += 
        `
        <div class="col-md-12 text-start py-3" key="${menu.id}">
            <div class="products d-flex">
                <div class="img px-2">
                    <img src="${menu.image}" alt="${menu.name}" height="100" width="100" class="productImg">
                </div>
                <div class="productName pt-3">
                    <h4 class="d-inline">${menu.name} .....</h4>
                    <h3 class="d-inline float-end">${menu.price}</h3>
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>
    `;
   

} });
(function () {
  'use strict'
  const form = document.getElementById('contactForm');
  const thankYouCard = document.getElementById('thankYouCard');

  if(form){

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          e.stopPropagation();
          form.classList.add('was-validated');
        } else {
          form.classList.add('d-none');
          thankYouCard.classList.remove('d-none');
    
          // Hide the thank you card after 4 seconds
          setTimeout(() => {
            thankYouCard.classList.add('d-none');
            form.reset(); // reset the form for new entries
            form.classList.remove('was-validated');
            form.classList.remove('d-none'); // show form again
          }, 4000);
        }
      }, false);
  }
})();
(function () {
  'use strict';
  const form = document.getElementById('bookingForm');
  const thankYouCard = document.getElementById('thankYouCard');
if(form){

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
      } else {
        form.classList.add('d-none');
        thankYouCard.classList.remove('d-none');
  
        // Hide thank you card after 4 seconds
        setTimeout(() => {
          thankYouCard.classList.add('d-none');
          form.reset();
          form.classList.remove('was-validated');
          form.classList.remove('d-none');
        }, 4000);
      }
    }, false);
}
})();