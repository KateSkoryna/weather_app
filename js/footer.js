export const createFooter = () => {
  const footer = document.createElement('footer');
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('container', 'footer__container');
  const footerContent = document.createElement('p');
  footerContent.classList.add('footer__content');
  footerContent.textContent = 'Copyright © 2024.';
  const footerAuthorContent = document.createElement('p');
  footerAuthorContent.classList.add('footer__content');
  footerAuthorContent.textContent = 'Create by Kate Skoryna';
  footerContainer.append(footerContent, footerAuthorContent);
  footer.append(footerContainer);
  footer.classList.add('footer');
  return footer;
};
