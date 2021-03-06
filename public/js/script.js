// Menu
const burger = document.querySelector("#burger");
const openMenu = `
<svg class="w-9 h-9 fill-current dark:text-accent" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>/svg>
`;

const closeMenu = `
<svg class="w-9 h-9 fill-current dark:text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
`;

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    burger.innerHTML = closeMenu;
  } else {
    burger.innerHTML = openMenu;
  }
});
