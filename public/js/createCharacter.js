const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#char-name').value.trim();
    const classType = document.querySelector('#class-selection').value.trim();
  
    if (name && classType) {
      const response = await fetch(`/api/characters`, {
        method: 'POST',
        body: JSON.stringify({ name, classType }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/game');
      } else {
        alert('Failed to create character');
      }
    }
};
  
const delButtonHandler = async (event) => {
if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/characters/${id}`, {
    method: 'DELETE',
    });

    if (response.ok) {
    document.location.replace('/game');
    } else {
    alert('Failed to delete character');
    }
}
};
  
document
  .querySelector('.new-character-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.char-list')
  .addEventListener('click', delButtonHandler);
