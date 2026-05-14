const themeButton = document.getElementById('themeButton');
const applicationForm = document.getElementById('applicationForm');

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  themeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

applicationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const position = document.getElementById('position').value;
  if (!fullName || !position) {
    showToast('Please complete your name and position selection.');
    return;
  }

  showToast(`Thanks, ${fullName}! Your application for ${position} has been received.`);
  applicationForm.reset();
});

themeButton.addEventListener('click', toggleTheme);
document.querySelector("form").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Application submitted successfully!");
});
