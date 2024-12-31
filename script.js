// script.js

// Position the hour hand at a fixed angle
const hourHand = document.querySelector('.hour');

// Fixed position for "Good Time"
const hourRotation = 0; // 12 o'clock position
hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
