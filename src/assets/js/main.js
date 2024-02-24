import "../components/header/currency/currency"
import {rippleEffect} from "./functions/rippleEffect"

rippleEffect(".ripple-effect")

// core version + navigation, pagination modules:
import Swiper from "swiper"
import {Navigation} from "swiper/modules"
// import Swiper and modules styles

const swiper1 = new Swiper(".review__carousel", {
	direction: "horizontal",
	grabCursor: true,
	slidesPerView: 1,

	navigation: {
		nextEl: ".review__next",
		prevEl: ".review__prev",
	},

	// Modules
	modules: [Navigation],
})

/**
 * Moves the specified element to a new location within the DOM.
 * @param {string} elem - The CSS selector of the element to be moved.
 * @param {string} where - The CSS selector of the destination where the element will be moved.
 * @param {number} [order=999] - The index/order at which the element will be inserted within the destination. Default is 999.
 */

export const moveElement = (parentNode, elem, where, order = 999) => {
	const parents = document.querySelectorAll(parentNode)

	parents.forEach(parent => {
		const destinations = parent.querySelectorAll(where)
		destinations.forEach(destination => {
			destination.insertBefore(
				parent.querySelector(elem),
				destination.children[order]
			)
		})
	})
}

if (window.innerWidth <= 768) {
	moveElement(".swiper-slide", ".review__btns", ".review__item")
}
