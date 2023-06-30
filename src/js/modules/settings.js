export const slides = document.querySelector('.main__slides')
export const slideList = document.querySelectorAll('.main__slide')
export const slideCount = document.querySelectorAll('.main__slide').length
export const slide = document.querySelector('.main__slide')
export const image = document.querySelector('.main__image')
export const animation = slide.dataset.animation
export const helperInput = document.querySelector('#helper')

export let currentSlide = document.querySelector('.main__slide--current')
export let currentSlideNumber = document.querySelector('.main__slide--current').dataset.slide

// Titles

export const title_big = document.querySelector('.main__title-big')
export const title_quote = document.querySelector('.main__title-quote')
export const title_author = document.querySelector('.main__title-author')
export const title_border = document.querySelector('.main__title-border')
export const title_text = document.querySelector('.main__title-text')
export const title_top = document.querySelector('.main__title-top')
export const title_bottom = document.querySelector('.main__title-bottom')
export const title_date = document.querySelector('.main__title-date')
