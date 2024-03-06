const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  const userData = { email, message };

  saveToLS('feedback-form-state', userData);
});

function init() {
  const data = loadFromLS('feedback-form-state');

  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
}
init();

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  const userData = { email, message };

  e.target.reset();

  localStorage.removeItem('feedback-form-state');
});
