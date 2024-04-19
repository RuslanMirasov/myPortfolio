window.addEventListener('scroll', function () {
  const spinner = document.querySelector('[data-name="spinner"]');
  if (spinner) {
    spinner.style.transform = `rotate(${window.scrollY}deg)`;
  }
});
