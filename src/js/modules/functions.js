import $ from "jquery";
import { swipedevents } from "swiped-events"
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
	let currentSlideNumber
	let currentSlide = document.querySelector('.main__slide--current')
	let animate = currentSlide.dataset.animation
	animations.init(animate, settings.slides)

	const showNextSlide = () => {
		currentSlideNumber = document.querySelector('.main__slide--current').dataset.slide
		if (currentSlideNumber < settings.slideCount) {
			currentSlide = document.querySelector('.main__slide--current')
			currentSlide.nextElementSibling.classList.add('main__slide--current')
			animate = currentSlide.nextElementSibling.dataset.animation
			animations.loading(currentSlide.dataset.slide)
			animations.init(animate, currentSlide.nextElementSibling)
		}
		currentSlide.classList.remove('main__slide--current')
	}

	const showPrevSlide = () => {
		currentSlideNumber = document.querySelector('.main__slide--current').dataset.slide

		if (currentSlideNumber > 1) {
			currentSlide = document.querySelector('.main__slide--current')
			currentSlide.previousElementSibling.classList.add('main__slide--current')
			let animate = currentSlide.previousElementSibling.dataset.animation
			animations.loading(currentSlide.dataset.slide)
			animations.init(animate, currentSlide.previousElementSibling)
			currentSlide.classList.remove('main__slide--current')

		}
	}

	if (window.innerWidth >= 768) {
		let main = document.querySelector('.main')
		main.addEventListener('click', (e) => {
			if (settings.helperInput.value == 1) {
				settings.helperInput.value = 0
				showNextSlide()
				setTimeout(() => {
					settings.helperInput.value = 1
				}, 2000)
			}
		})
		window.addEventListener('wheel', (e) => {
			let delta = -e.deltaY


			if (delta > 0) {
				if (settings.helperInput.value == 1) {
					settings.helperInput.value = 0
					showPrevSlide()
					setTimeout(() => {
						settings.helperInput.value = 1
					}, 2000)
				}
			} else {
				if (settings.helperInput.value == 1) {
					settings.helperInput.value = 0
					showNextSlide()
					setTimeout(() => {
						settings.helperInput.value = 1
					}, 2000)
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