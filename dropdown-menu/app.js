const dropBtn = document.querySelector('.dropBtn');
const dropItemsContainer = document.querySelector('.dropdownItems');
const dropItems = document.querySelectorAll('.item');

//hiding items initially
const hideDropdownItems = function(dropdownContainer) {
  dropdownContainer.style.display = "none";
};

hideDropdownItems(dropItemsContainer);

const revealDropdownItems = function(dropdownButton, dropdownContainer, dropdownItemsList) {
  dropdownButton.style.marginBottom = '7px';
  dropdownContainer.style.padding = '20px';
  dropdownContainer.style.width = '10%';
  dropdownContainer.style.display = 'flex';
  dropdownContainer.style.flexDirection = 'column';
  dropdownContainer.style.boxShadow = '2px 2px 5px lightgrey';
  dropdownContainer.style.backgroundColor = 'white';
  dropdownContainer.style.gap = '7px';
  dropdownItemsList.forEach(item => {
    item.style.color = 'black';
    item.style.textDecoration = 'none';
    item.style.fontSize = '1.1rem';
  });
};

dropBtn.addEventListener('mouseenter', () => {
  revealDropdownItems(dropBtn, dropItemsContainer, dropItems);
});

dropBtn.addEventListener('mouseleave', () => {
  hideDropdownItems(dropItemsContainer);
});
