import gsap from 'gsap'
import * as settings from './settings.js'

export function testAnimation() {
	gsap.from(settings.title_date, { duration: 3, x: -500, ease: "back.out", opacity: 0 })
}

export function init(animation) {
	if (animation == 'top_bottom') {
		top_bottom()
	} else {
		if (animation == 'left_right') {
			left_right()
		} else {
			top()
		}
	}
}

export function top_bottom() {
	console.log('animate')
	let tl = gsap.timeline()

	tl.from(settings.image, { duration: 3, opacity: 1, ease: "back.out" })
		.from(settings.title_date, { duration: 1.3, y: -800, opacity: 0, ease: "back.out" })
		.from(settings.title_big, { duration: 1, y: 1000, opacity: 0, ease: "back.out" })
		.from(settings.title_quote, { duration: 1.6, y: -800, opacity: 0, ease: "back.out" })
		.from(settings.title_author, { duration: 0.9, opacity: 0, ease: "back.out" })
}

export function left_right() {
	console.log('animate')
	let tl = gsap.timeline()

	tl.from(settings.image, { duration: 3, opacity: 1, ease: "back.out" })

}

export function top() {
	console.log('animate')
	let tl = gsap.timeline()

	tl.from(settings.image, { duration: 3, opacity: 1, ease: "back.out" })
}