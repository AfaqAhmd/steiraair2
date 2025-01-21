
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });


  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


//calendly calling on different link/buttons
var calendyBtn = document.getElementById('calendlyBtn');
calendyBtn.addEventListener("click", function() {
Calendly.initPopupWidget({ url: 'https://calendly.com/steiraair/steiraairmeeting?back=1' });
  return false;
  });