import $ from "jquery";
import { swipedevents } from "swiped-events";
import * as animations from './animations.js'
import * as settings from './settings.js'


export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

}

export function start() {
	const showNextSlide = () => {
		let currentSlideNumber = document.querySelector('.main__slide--current').dataset.slide
		console.log(currentSlideNumber)
		if (currentSlideNumber < settings.slideCount) {

			let currentSlide = document.querySelector('.main__slide--current')
			currentSlide.nextElementSibling.classList.add('main__slide--current')
			let animate = currentSlide.nextElementSibling.dataset.animation
			animations.init(animate)
			currentSlide.classList.remove('main__slide--current')
			//settings.currentSlide = document.querySelector('.main__slide--current')
			console.log(currentSlide)
		}
	}

	const showPrevSlide = () => {
		let currentSlideNumber = document.querySelector('.main__slide--current').dataset.slide
		console.log(currentSlideNumber)
		if (currentSlideNumber > 1) {

			let currentSlide = document.querySelector('.main__slide--current')
			currentSlide.previousElementSibling.classList.add('main__slide--current')
			let animate = currentSlide.previousElementSibling.dataset.animation
			animations.init(animate)
			currentSlide.classList.remove('main__slide--current')
			//settings.currentSlide = document.querySelector('.main__slide--current')
			console.log(currentSlide)
		}
	}

	if (window.innerWidth >= 768) {
		window.addEventListener('wheel', (e) => {
			let delta = -e.deltaY

			if (delta > 0) {
				if (settings.helperInput.value == 1) {
					settings.helperInput.value = 0
					showPrevSlide()
					setTimeout(() => {
						settings.helperInput.value = 1
					}, 5000)
				}
			} else {
				if (settings.helperInput.value == 1) {
					settings.helperInput.value = 0
					showNextSlide()
					setTimeout(() => {
						settings.helperInput.value = 1
					}, 5000)
				}
			}
		})
	} else {
		window.addEventListener('swiped-left', () => {
			showNextSlide()
		})
		window.addEventListener('swiped-right', () => {
			showPrevSlide()
		})
		window.addEventListener('swiped-up', () => {
			showNextSlide()
		})
		window.addEventListener('swiped-down', () => {
			showPrevSlide()
		})
	}
}