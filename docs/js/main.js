window.addEventListener('load', function () {
  // helper
  //const sleep = (ms) => { return new Promise((resolve) => { setTimeout(resolve, ms); }); }

  // sidebar toggle
  const burgers = document.querySelector('.burgers');
  const navMobile = document.querySelector('.nav-mobile');
  let menuOpen = false;
  burgers.addEventListener('click', () => {
    if (menuOpen) {
      burgers.classList.remove('toggle');
      navMobile.classList.remove('open');
      menuOpen = false;
    } else {
      burgers.classList.add('toggle');
      navMobile.classList.add('open');
      menuOpen = true;
    }
  });
});