const checkbox = document.querySelector('#checkbox');
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
} else {
  console.log('false')
}

checkbox.addEventListener('change', function(e) {
  console.log('checked', e.target.checked)
  if (e.target.checked) {
    document.body.classList.add('is-dark-mode')
    document.body.classList.remove('is-light-mode')

  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
})