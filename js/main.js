var togglers = document.querySelectorAll(".collapsible__toggler");

togglers.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.parentElement.classList.toggle("collapsible--expanded");
  })
})
