import './style.css';
import logo from './images/Famon_WEB.svg';
import img1 from './images/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg'
import workframe from './images/workframe.svg'
import nature from './images/nature.svg'
import dropdown from './images/dropdown_icon.svg'

// Set the image source dynamically in the DOM
document.getElementById('logo').src = logo;
document.getElementById('image').src = nature;
document.getElementById('dropdown-icon').src = dropdown;
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