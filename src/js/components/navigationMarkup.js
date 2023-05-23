export const navigationMarkup = () => {
  // updates checkup needed to make it work correct with changws of screensize //

  const isMobile = screen.width < 768;
  let markup;

  if (isMobile) {
    markup = `
      <img src="../../src/images/icons/menu.svg" alt="menu" class="menu" height="50" width="50" />
      `;
  } else if (!isMobile) {
    markup = `
    <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
              <a class="navigation__link" href="/">Home</a>
          </li>
          <li class="navigation__item">
              <a class="navigation__link" href="/contacts">Contacts</a>
          </li>
          <li class="navigation__item">
              <a class="navigation__link" href="/profile">My profile</a>
          </li>
        </ul>
    </nav>
    `;
  }
  return markup;
};
