"use strict";

// ELEMENT/S
const slider = document.querySelector(".slider");
const controls = document.querySelectorAll(".control");

// EVENT LISTENER/S
controls.forEach((control, index) => {
	control.addEventListener("click", () => {
		// Increment the value slider's top property based on the index of the clicked control
		slider.style.top = `${-100 * index}%`;

		// Remove the active class from the previous control
		document.querySelector(".active.control").classList.remove("active");

		// Add the active class to the clicked control
		control.classList.add("active");
	});
});
