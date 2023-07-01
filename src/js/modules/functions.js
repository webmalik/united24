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
		let item = document.querySelector('.footer__list')
		item.addEventListener('click', (e) => {
			let slideTo = e.srcElement.dataset.slide

			if (slideTo >= 1) {
				let current = document.querySelector('.main__slide--current')
				current.classList.remove('main__slide--current')
				animations.loading(e.srcElement.dataset.slide - 1)

				document.querySelectorAll('.main__slide').forEach((val) => {
					if (val.dataset.slide == slideTo) {
						animations.init(val.dataset.animation, val)
						val.classList.add('main__slide--current')
					}
				})
			}
		})

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
		let burger_icon = document.querySelector('#nav-icon4')
		let i = false
		burger_icon.addEventListener('click', () => {
			if (i == false) {
				burger_icon.classList.add('open')
				animations.nav()
				i = true
			} else {
				burger_icon.classList.remove('open')
				animations.nav_reverce()
				i = false
			}
		})
		//console.log(burger_icon_open)

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
export function audioPlay() {
	const audioFile = new Audio('../../files/audio.mp3')
	const volume = document.getElementById("volume");
	audioFile.muted = true
	audioFile.autoplay = true
	audioFile.loop = true
	audioFile.preload = true

	if (audioFile.muted == true) {
		document.querySelector('.info__icon-sound').classList.add('mute')
	} else { document.querySelector('.info__icon-sound').classList.remove('mute') }
	volume.addEventListener('click', function (e) {
		audioFile.play()
		audioFile.muted = (audioFile.muted == false) ? true : false
		if (audioFile.muted == true) {
			document.querySelector('.info__icon-sound').classList.add('mute')
		} else { document.querySelector('.info__icon-sound').classList.remove('mute') }
	});
}
