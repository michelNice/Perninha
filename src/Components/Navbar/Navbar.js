class NavbarToggler {
    #togglerBtn = document.querySelector(".navbar-toggler");
    #togglerContent = document.querySelector(".navbar-toggle-content");
    #activeClassName = "open";
  
    constructor() {
      this.#onInit();
    }
  
    close() {
      this.#togglerBtn.classList.remove(this.#activeClassName);
      this.#togglerContent.classList.remove(this.#activeClassName);
    }
  
    toggle() {
      this.#togglerBtn.classList.toggle(this.#activeClassName);
      this.#togglerContent.classList.toggle(this.#activeClassName);
    }
  
    #onInit() {
      this.#togglerBtn.addEventListener("click", () => this.toggle());
    }
  }
  
  class Navbar {
    #navbar = document.querySelector(".navbar");
    #activeClassName = "active";
  
    constructor(toggler) {
      this.toggler = toggler;
      this.#onInit();
    }
  
    setActive() {
      this.#navbar.classList.add(this.#activeClassName);
    }
  
    removeActive() {
      this.#navbar.classList.remove(this.#activeClassName);
    }
  
    #onInit() {
      this.#setLinksEventListener();
    }
  
    #setLinksEventListener() {
      const linksList = document.querySelectorAll(".navbar a[data-anchor-link]");
  
      linksList.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
  
          this.toggler.close();
  
          if (!link.getAttribute("href") || link.getAttribute("href") === "#") {
            return;
          }
  
          const section = document.querySelector(link.getAttribute("href"));
  
          window.scrollTo({
            top: section.offsetTop - this.#navbar.offsetHeight,
            behavior: "smooth"
          });
        });
      });
    }
  }
  
  const navbarToggler = new NavbarToggler();
  const navbar = new Navbar(navbarToggler);
  
  window.addEventListener("scroll", () => {
    const heightActivateState = 400;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrolled > heightActivateState) {
      navbar.setActive();
    } else {
      navbar.removeActive();
    }
  });
  