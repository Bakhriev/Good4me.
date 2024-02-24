export const toggleCurrency = () => {
	const currencyToggle = document.querySelector(".currency__toggle")
	const currencyMenu = document.querySelector(".currency-menu")
	let opened = false

	currencyToggle.addEventListener("click", () => {
		opened = !opened
		currencyMenu.classList.toggle("active")
		currencyToggle.setAttribute("aria-expanded", opened)
	})
}

toggleCurrency()
