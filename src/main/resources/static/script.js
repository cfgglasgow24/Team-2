function changeFontSize(size) {
  let root = document.documentElement;
  
  switch(size) {
    case 'small':
      root.style.setProperty('--font-size-default', '0.75rem');
      break;
    case 'default':
      root.style.setProperty('--font-size-default', '1rem');
      break;
    case 'large':
      root.style.setProperty('--font-size-default', '1.25rem');
      break;
    case 'huge':
      root.style.setProperty('--font-size-default', '1.5rem');
      break;
    case 'massive':
      root.style.setProperty('--font-size-default', '2rem');
      break;
    default:
      root.style.setProperty('--font-size-default', '1rem');
  }
}
