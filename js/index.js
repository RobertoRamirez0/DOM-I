const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Night Mode",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Items
let navOne = document.querySelectorAll('a');
navOne[0].textContent = siteContent["nav"]["nav-item-1"];
navOne[1].textContent = siteContent["nav"]["nav-item-2"];
navOne[2].textContent = siteContent["nav"]["nav-item-3"];
navOne[3].textContent = siteContent["nav"]["nav-item-4"];
navOne[4].textContent = siteContent["nav"]["nav-item-5"];
navOne[5].textContent = siteContent["nav"]["nav-item-6"];

// Header Section

let headerOne = document.getElementsByTagName('h1');
headerOne[0].textContent = siteContent["cta"]['h1'];

let buttonOne = document.getElementsByTagName('button');
buttonOne[0].textContent = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Body Section

let mainHeader = document.getElementsByTagName('h4');
mainHeader[0].textContent = siteContent["main-content"]["features-h4"];
mainHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainHeader[4].textContent = siteContent["main-content"]["vision-h4"];
// Contact Header
mainHeader[5].textContent = siteContent["contact"]["contact-h4"];

let mainImage = document.getElementById("middle-img");
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainContent = document.getElementsByTagName('p');
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];
// Contact Content
mainContent[5].textContent = siteContent["contact"]["address"];
mainContent[6].textContent = siteContent["contact"]["phone"];
mainContent[7].textContent = siteContent["contact"]["email"];
// Footer Content
mainContent[8].textContent = siteContent["footer"]["copyright"];

// Changes Navigation Text to Green 
navOne[0].style.color = "green";
navOne[1].style.color = "green";
navOne[2].style.color = "green";
navOne[3].style.color = "green";
navOne[4].style.color = "green";
navOne[5].style.color = "green";

// Appends and Prepends Content
navOne[0].prepend("Hello -");
navOne[5].append(" -World!");

//Stretch Goal 
buttonOne[0].addEventListener('click', function(){
  let bodyChange = document.querySelector('body');
  bodyChange.style.backgroundColor = "black";
  bodyChange.style.color = "white";
})