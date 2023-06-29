import $ from "jquery";
import { swipedevents } from "swiped-events";
import * as animations from './animations.js'

const helperInput = document.querySelector('#helper')

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
		animations.animation__top_bottom()
	}

	const showPrevSlide = () => {
		animations.animation__top()
	}

	if (window.innerWidth >= 768) {
		window.addEventListener('wheel', (e) => {
			let delta = -e.deltaY

			if (delta > 0) {
				if (helperInput.value == 1) {
					helperInput.value = 0
					showPrevSlide()
					setTimeout(() => {
						helperInput.value = 1
					}, 1500)
				}
			} else {
				if (helperInput.value == 1) {
					helperInput.value = 0
					showNextSlide()
					setTimeout(() => {
						helperInput.value = 1
					}, 1500)
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