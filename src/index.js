import './style.css';
import logo from './images/Famon_WEB.svg';
import workframe from './images/workframe.svg'
import blackrice from './images/blackrice.jpg'
import dropdown from './images/dropdown_icon.svg'
import phone from './images/phone.svg'
import tutoricon from './images/book.svg'
import maintenanceicon from './images/web_maintenance.svg'
import customicon from './images/custom_web.svg'
import shopifyicon from './images/shopify.svg'
import pasta from './images/pasta.jpg'
import sunset from './images/sunset.jpg'

// Set the image source dynamically in the DOM
document.addEventListener('DOMContentLoaded', () => {
  // Set logo if it exists
  const logoElement = document.getElementById('logo');
  if (logoElement) {
      logoElement.src = logo;
  }

  // Set contact logo if it exists
  const contactLogoElement = document.getElementById('contact-logo');
  if (contactLogoElement) {
      contactLogoElement.src = logo;
  }

  // Set nature image if it exists
  const natureImageElement = document.getElementById('slide0');
  if (natureImageElement) {
      natureImageElement.src = blackrice;
  }

  const pastaImageElement = document.getElementById('slide2');
  if (pastaImageElement) {
      pastaImageElement.src = pasta;
  }

  const sunsetImageElement = document.getElementById('slide3');
  if (sunsetImageElement) {
      sunsetImageElement.src = sunset;
  }


  // Set dropdown icon if it exists
  const dropdownIconElement = document.getElementById('dropdown-icon');
  if (dropdownIconElement) {
      dropdownIconElement.src = dropdown;
  }

  // Set contact dropdown icon if it exists
  const contactDropdownIconElement = document.getElementById('contact-dropdown-icon');
  if (contactDropdownIconElement) {
      contactDropdownIconElement.src = dropdown;
  }

  const cellIconElement = document.getElementById('cell');
  if (cellIconElement) {
      cellIconElement.src = phone;
  }

  const tutorIconElement = document.getElementById('tutor');
  if (tutorIconElement) {
      tutorIconElement.src = tutoricon;
  }

  const maintenanceIconElement = document.getElementById('maintenance');
  if (maintenanceIconElement) {
    maintenanceIconElement.src = maintenanceicon;
  }

  const customIconElement = document.getElementById('custom');
  if (customIconElement) {
    customIconElement.src = customicon;
  }

  const shopifyIconElement = document.getElementById('shopify');
  if (shopifyIconElement) {
    shopifyIconElement.src = shopifyicon;
  }
});
//document.getElementById('slide2').src = nature;
//document.getElementById('slide3').src = img1;
let frames = document.querySelectorAll('.workframe');
frames.forEach(frame => {
  frame.src = workframe;
});

let portframes = document.querySelectorAll('.port-image');
portframes.forEach(portframe => {
  portframe.src = workframe;
});

document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', function() {
 
      const dropdownContent = this.nextElementSibling;
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-button')) {
      document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
      });
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    } 
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex].style.display = "block";  
}

// Optional: Automatically change slide every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 4000);

