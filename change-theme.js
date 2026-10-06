function setTheme(theme) {
  const link = document.getElementById('theme-css');
  const info = document.getElementById('theme-info');
  if (theme === 'light') {
    link.href = 'styles-light.css';
    info.innerHTML = 'Текущая тема: <b>Светлая (для ЧБ печати)</b>';
  } else {
    link.href = 'styles-dark.css';
    info.innerHTML = 'Текущая тема: <b>Тёмная</b>';
  }
}