const openMenu = document.querySelector('.dropdown-toggle');
const closeMenu = document.querySelector('.dropdown-close');
const navigation = document.querySelector('header .navigation');

openMenu.addEventListener("click", () => {
  console.log("I'm being clicked");
  navigation.classList.add('active')
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  navigation.classList.remove('active')
});
