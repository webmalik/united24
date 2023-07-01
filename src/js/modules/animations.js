import gsap, { selector } from 'gsap'
import * as settings from './settings.js'

export function testAnimation() {
	gsap.from(settings.title_date, { duration: 3, x: -500, ease: "back.out", opacity: 0 })
}

export function init(animation, currentSlide) {
	if (animation == 'top_bottom') {
		top_bottom(currentSlide)
	} else {
		if (animation == 'left_right') {
			left_right(currentSlide)
		} else {
			top(currentSlide)
		}
	}
}

export function top_bottom(currentSlide) {
	let slide = currentSlide.querySelector('.main__slide')
	let title_date = currentSlide.querySelector('.main__title-date')
	let title_big = currentSlide.querySelector('.main__title-big')
	let title_quote = currentSlide.querySelector('.main__title-quote')
	let title_author = currentSlide.querySelector('.main__title-author')
	let tl = gsap.timeline()

	tl//.to(slide, { duration: 1.9, opacity: 1, ease: "back.out" })
		.from(title_date, { duration: 2.3, y: -800, opacity: 0, ease: "back.out" })
		.from(title_big, { duration: 2.1, y: 1000, opacity: 0, ease: "back.out" })
		.from(title_quote, { duration: 2.9, y: -800, opacity: 0, ease: "back.out" })
		.from(title_author, { duration: 3.5, opacity: 0, ease: "back.out" })
}

export function left_right(currentSlide) {
	let slide = currentSlide.querySelector('.main__slide')
	let title_top = currentSlide.querySelector('.main__title-top')
	let hr = currentSlide.querySelector('.main__hr')
	let title_bottom = currentSlide.querySelector('.main__title-bottom')
	let tl = gsap.timeline()

	tl//.to(slide, { duration: 1.9, opacity: 1, ease: "back.out" })
		.from(hr, { duration: 3.9, x: 2000, opacity: 1, ease: "back.out" })
		.from(title_top, { duration: 2.9, opacity: 0, x: 1000, ease: "back.out" })
		.from(title_bottom, { duration: 3, opacity: 0, x: -1000, ease: "back.out" })

}

export function top(currentSlide) {
	let slide = currentSlide.querySelector('.main__slide')
	let title_border = currentSlide.querySelector('.main__title-border')
	let title_text = currentSlide.querySelector('.main__title-text')
	let tl = gsap.timeline()

	tl//.to(slide, { duration: 1.9, opacity: 1, ease: "back.out" })
		.from(title_border, { duration: 3, y: -1000, opacity: 0, ease: "back.out" })
		.from(title_text, { duration: 3.5, y: -1000, opacity: 0, ease: "back.out" })
}

export function loading(currentSlideNumber) {
	//console.log(currentSlideNumber)
	let w = ((currentSlideNumber / settings.slideCount) + 0.1) * 100

	let loader = document.querySelector('.footer__loader')
	let list = document.querySelector('.footer__list')
	let item = document.querySelectorAll('.footer__item')

	list.classList.add('visible')
	loader.classList.add('visible')
	item.forEach((val) => {
		val.classList.add('visible')
	})
	//item.classList.add('visible')
	setTimeout(() => {
		loader.style.width = w + '%'
	}, 1000)
	setTimeout(() => {
		loader.classList.remove('visible')
		list.classList.remove('visible')
		item.forEach((val) => {
			val.classList.remove('visible')
		})
	}, 2000)

}

export function nav() {
	let footer_nav = document.querySelector('.footer__nav')
	let footer_list = document.querySelector('.footer__list')
	let footer_items = document.querySelectorAll('.footer__item')
	let footer_logo = document.querySelectorAll('.info__logo')

	let tl = gsap.timeline()

	tl.to(footer_nav, { duration: 1.2, y: 1000, opacity: 1, ease: "power4.out" })
		.to(footer_items, { duration: 1, x: 0, opacity: 1, ease: "power4.out" })
		.to(footer_logo, { duration: 1.5, y: 200, opacity: 1, ease: "power4.out" }, "=+0.2")
}

export function nav_reverce() {
	let footer_nav = document.querySelector('.footer__nav')
	let footer_list = document.querySelector('.footer__list')
	let footer_items = document.querySelectorAll('.footer__item')
	let footer_logo = document.querySelectorAll('.info__logo')

	let tl = gsap.timeline()

	tl.to(footer_logo, { duration: 0.5, y: -200, opacity: 0, ease: "power4.out" }, "=+0.2")
		.to(footer_items, { duration: 0.2, x: -200, opacity: 0, ease: "power4.out" })
		.to(footer_nav, { duration: 0.4, y: -1000, opacity: 0, ease: "power4.out" })
}