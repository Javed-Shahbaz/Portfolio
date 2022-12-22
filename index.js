const init = () => {
  const menuItems = document.getElementsByClassName('mobile-item');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const menuContainer = document.getElementById('menu-container');

  openBtn.addEventListener('click', () => {
    menuContainer.styles.display = 'flex';
    openBtn.styles.display = 'none';
  });

  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', () => {
      menuContainer.styles.display = 'none';
      openBtn.styles.display = 'block';
    });
  }

  closeBtn.addEventListener('click', () => {
    menuContainer.styles.display = 'none';
    openBtn.styles.display = 'block';
  });
};

init();