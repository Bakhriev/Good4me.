/**
  @param {string} sourceParentSelector - The CSS selector of the parent element(s) containing the element to be moved.
  @param {string} elementSelector - The CSS selector of the element to be moved.
  @param {string} destinationSelector - The CSS selector of the destination where the element will be moved.
  @param {number} [insertionOrder=999] - The index/order at which the element will be inserted within the destination. Default is 999.
*/

export const moveElement = (
	sourceParentSelector,
	elementSelector,
	destinationSelector,
	insertionOrder = 999
) => {
	const sourceParents = document.querySelectorAll(sourceParentSelector)

	sourceParents.forEach(sourceParent => {
		const destinations = sourceParent.querySelectorAll(destinationSelector)
		destinations.forEach(destination => {
			destination.insertBefore(
				sourceParent.querySelector(elementSelector),
				destination.children[insertionOrder]
			)
		})
	})
}
