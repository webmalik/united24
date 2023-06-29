import * as settings from './settings.js'
import gsap from 'gsap'
const tl = gsap.timeline()

export function animation__top() {
	tl.from(settings.title_text, { duration: 3, x: -100, opacity: 0 })
		.from(settings.title_border, { duration: 2, y: -400, opacity: 0 }, "=-1")
}