window.addEventListener('DOMContentLoaded', () => {
    // שינוי מחלקת סקרול על הנבאר
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // המבורגר ותפריט
    const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

  
    links.forEach(link => {
      link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("clicked")); // מסיר צבע אדום מקודם
        this.classList.add("clicked");                    // מוסיף צבע אדום לקישור שנבחר
        hamburger.classList.remove("active");             // סוגר את התפריט
        menu.classList.remove("active");
      });
    });
  });
  