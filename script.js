const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');

studentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const course = document.getElementById('course').value.trim();

  if (name && roll && course) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${name}</td>
      <td>${roll}</td>
      <td>${course}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    studentList.appendChild(row);

    studentForm.reset();
  }
});

studentList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.parentElement.remove();
  }
});


