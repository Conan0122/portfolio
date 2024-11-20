const hamburger = document.getElementById('hamburger');
  const dropdown = document.getElementById('dropdown');
  const overlay = document.getElementById('overlay');

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });

  overlay.addEventListener('click', () => {
    dropdown.classList.add('hidden');
    overlay.classList.add('hidden');
  });