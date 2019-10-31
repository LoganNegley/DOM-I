const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// a tags
let anchorTags = document.querySelectorAll("a");
anchorTags[0].textContent = siteContent["nav"]["nav-item-1"];
anchorTags[1].textContent = siteContent["nav"]["nav-item-2"];
anchorTags[2].textContent = siteContent["nav"]["nav-item-3"];
anchorTags[3].textContent = siteContent["nav"]["nav-item-4"];
anchorTags[4].textContent = siteContent["nav"]["nav-item-5"];
anchorTags[5].textContent = siteContent["nav"]["nav-item-6"];

//Changing all a tags to green
let changedAnchorTags = document.querySelectorAll("a");
changedAnchorTags.forEach(function(item){
item.style.color = 'green'
})

// Adding anchor tags to nav
let newNode = document.createElement('a');




//button
const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];
btn.style.color = "black"

//Main header H1
const mainHeader = document.querySelector("h1");
mainHeader.textContent = siteContent["cta"]["h1"];
//Cta image
const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
//h4s
const headerFours = document.querySelectorAll("h4");
headerFours[0].textContent = siteContent["main-content"]["features-h4"];
headerFours[1].textContent = siteContent["main-content"]["about-h4"];
headerFours[2].textContent = siteContent["main-content"]["services-h4"];
headerFours[3].textContent = siteContent["main-content"]["product-h4"];
headerFours[4].textContent = siteContent["main-content"]["vision-h4"];
//paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
//Middle Image
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact
const contactInfo = document.getElementsByTagName("h4");
contactInfo[5].textContent = siteContent["contact"]["contact-h4"];

let addressInfo = document.querySelectorAll('.contact p');
addressInfo[0].textContent = siteContent["contact"]["address"]; 
addressInfo[1].textContent = siteContent["contact"]["phone"]; 
addressInfo[2].textContent = siteContent["contact"]["email"]; 
//footer
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];
