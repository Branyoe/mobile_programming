let navMenuButtonFlag = false;

document.querySelector('#nav-menu-button').addEventListener('click', e => {
  let self = e.target;
  let navMenuContainer = document.querySelector('#nav-menu');
  navMenuButtonFlag = !navMenuButtonFlag;
  if (navMenuButtonFlag) {
    navMenuContainer.style.display = 'block';
    self.classList.remove('fa-bars');
    self.classList.add('fa-x');
  } else {
    navMenuContainer.style.display = 'none';
    self.classList.remove('fa-x');
    self.classList.add('fa-bars');
  }
}); 

//utils
function elementSelector(elementId) {
  return document.querySelector(`#${elementId}`)
}

function setDropdown(buttonId, menuId) {
  const button = elementSelector(buttonId);
  button.addEventListener('click', ({ target }) => {
    button.classList.toggle('dropdown-button-active')
    elementSelector(menuId).classList.toggle('hidden')
  })
}


setDropdown('dropdown-button-fut', 'dropdown-menu-fut');
setDropdown('dropdown-button-mex', 'dropdown-menu-mex');
setDropdown('dropdown-button-america', 'dropdown-menu-america');
setDropdown('dropdown-button-europa', 'dropdown-menu-europa');
setDropdown('dropdown-button-more', 'dropdown-menu-more');

setDropdown('dropdown-button-motor', 'dropdown-menu-motor');
setDropdown('dropdown-button-nfl', 'dropdown-menu-nfl');
setDropdown('dropdown-button-other', 'dropdown-menu-other');

// document.querySelector('#dropdown-button-fut').addEventListener('click', () => {
//   document.querySelector('#dropdown-menu-fut').classList.toggle('hidden');
// });
