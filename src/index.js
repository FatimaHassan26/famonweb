import './style.css';
import logo from './images/Famon_WEB.svg';
import workframe from './images/workframe.svg'
import nature from './images/nature.svg'
import dropdown from './images/dropdown_icon.svg'

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
  const natureImageElement = document.getElementById('image');
  if (natureImageElement) {
      natureImageElement.src = nature;
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
});
//document.getElementById('slide2').src = nature;
//document.getElementById('slide3').src = img1;
let frames = document.querySelectorAll('.workframe');
frames.forEach(frame => {
  frame.src = workframe;
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

