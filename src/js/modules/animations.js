import gsap from 'gsap'
import * as settings from './settings.js'


export function testAnimation() {
	gsap.from(settings.title_date, { duration: 3, x: -500, ease: "back.out", opacity: 0 })
}


export function top_bootom() {
	let tl = gsap.timeline()

	tl.from(settings.image, { duration: 2, x: -1000, opacity: 0, ease: "back.out" })
		.from(settings.title_date, { duration: 1.3, y: -800, opacity: 0, ease: "back.out" })
		.from(settings.title_big, { duration: 2, y: 1000, opacity: 0, ease: "back.out" })
		.from(settings.title_quote, { duration: 1.6, y: -800, opacity: 0, ease: "back.out" })
		.from(settings.title_author, { duration: 3, opacity: 0, ease: "back.out" })
}