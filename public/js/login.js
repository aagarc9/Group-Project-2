const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const user = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (user && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();


  const user = document.querySelector('#user-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (user && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
