window.onload = () => {
  document.getElementById('mobile-side-bar-wrapper').onanimationend = (e) => {
    document.getElementById('mobile-side-bar-wrapper').className = "";
    console.log(e);
    if(e.animationName === 'slideout'){
      document.getElementById('mobile-side-bar-wrapper').style.display = "none"
    }
  };
  const btnHamburger = document.getElementById('btn-hamburger')
  btnHamburger.onclick = handleOpenMobileSidebar;

  function handleOpenMobileSidebar(e) {
    document.getElementById('mobile-side-bar-wrapper').style.display = "block"
    document.getElementById('mobile-side-bar-wrapper').classList.add('open-mobile-sidebar')
  }
};