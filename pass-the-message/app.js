const form = document.getElementById('form');

const displayInputValue = (value) => {
  const messageSpan = document.getElementById('msg-span');
  messageSpan.textContent = value;
};

const clearInputValue = (input) => {
  input.value = '';
};

const showError = () => {
  alert('This field is required');
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById('form-input');
  if (!input.value) {
    showError();
  } else {
    displayInputValue(input.value);
    clearInputValue(input);
  }
};

form.addEventListener('submit', handleFormSubmit);
