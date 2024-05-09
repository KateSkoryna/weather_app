export const showError = (el, message) => {
  el.classList.add('show-error');
  el.textContent = message;
};
