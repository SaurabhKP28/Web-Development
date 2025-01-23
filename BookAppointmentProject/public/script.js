// script.js
const form = document.getElementById('registration-form');
const userList = document.getElementById('user-list');

// Handle form submission for creating a user
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone }),
  });

  const newUser = await response.json();
  if (response.status === 201) {
    addUserToList(newUser);
  } else {
    alert('Error: ' + newUser.error);
  }
});

// Fetch users and display them on page load
window.onload = async () => {
  const response = await fetch('/api/users');
  const users = await response.json();
  users.forEach(user => addUserToList(user));
};

// Add a user to the user list in the UI
function addUserToList(user) {
  const li = document.createElement('li');
  li.setAttribute('data-id', user.id);

  li.innerHTML = `
    ${user.name} - ${user.email} - ${user.phone}
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  // Attach event listeners to the Edit and Delete buttons
  li.querySelector('.edit-btn').addEventListener('click', () => editUser(user.id));
  li.querySelector('.delete-btn').addEventListener('click', () => deleteUser(user.id));

  userList.appendChild(li);
}

// Handle delete user
async function deleteUser(id) {
  const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
  if (response.status === 200) {
    const userItem = document.querySelector(`li[data-id="${id}"]`);
    userList.removeChild(userItem);
  } else {
    alert('Error deleting user');
  }
}

// Handle edit user
async function editUser(id) {
  const userItem = document.querySelector(`li[data-id="${id}"]`);

  // Get updated details from the user
  const name = prompt('Enter new name:', userItem.childNodes[0].textContent.split(' - ')[0]);
  const email = prompt('Enter new email:', userItem.childNodes[0].textContent.split(' - ')[1]);
  const phone = prompt('Enter new phone:', userItem.childNodes[0].textContent.split(' - ')[2]);

  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone }),
  });

  const updatedUser = await response.json();
  if (response.status === 200) {
    // Update the user details in the UI
    userItem.innerHTML = `
      ${updatedUser.name} - ${updatedUser.email} - ${updatedUser.phone}
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    // Reattach event listeners
    userItem.querySelector('.edit-btn').addEventListener('click', () => editUser(updatedUser.id));
    userItem.querySelector('.delete-btn').addEventListener('click', () => deleteUser(updatedUser.id));
  } else {
    alert('Error updating user');
  }
}
