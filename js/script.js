const dataDesc = document.querySelector("#data")
const tooltip = document.querySelector("#tooltip")
const arrow = document.querySelector("#p-arrow")
const disclaimer = document.querySelector("#disclaim")
Popper.createPopper(dataDesc, tooltip, { placement: 'bottom' })

disclaimer.addEventListener('mouseover', () => {
  tooltip.classList.remove('hidden');
  [...tooltip.children].forEach(child => child.classList.remove('hidden'))
})

disclaimer.addEventListener('mouseout', () => {
  tooltip.classList.add('hidden');
  [...tooltip.children].forEach(child => child.classList.add('hidden'))
})