export const toggleCurrency = () => {
	const currencyToggle = document.querySelector(".currency__toggle")
	const currencyMenu = document.querySelector(".currency-menu")

	currencyToggle.addEventListener("click", () => {
		currencyMenu.classList.toggle("active")
	})
}

toggleCurrency()
