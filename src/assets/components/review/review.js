// core version + navigation, pagination modules:
import Swiper from "swiper"
import {Navigation} from "swiper/modules"
import {moveElement} from "../../js/functions/moveElement"
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

if (window.innerWidth <= 768) {
	moveElement(".swiper-slide", ".review__btns", ".review__item")
}
