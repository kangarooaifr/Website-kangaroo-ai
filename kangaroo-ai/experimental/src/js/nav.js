
class Nav extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="navbar" class="nav-container">
          <nav>
              <button id="nav-btn" class="navbtn" onclick="navBtn()">\u{00D7}</button>
              <ul id="navitems" class="nav-menu">
                  <li>
                      <a href="accueil.html">
                          <i class="fas fa-home"></i>
                          <strong>Accueil</strong>
                      </a>
                  </li>
                  <li>
                      <a href="data-science.html">
                          <i class="fas fa-flask"></i>
                          <strong>Data Science</strong>
                      </a>
                  </li>
                  <li>
                      <a href="intelligence-artificielle.html">
                          <i class="fas fa-brain"></i>
                          <strong>IA</strong>
                      </a>
                  </li>
                  <li>
                      <a href="profil.html?filter=all">
                          <i class="far fa-address-card"></i>
                          <strong>Profil</strong>
                      </a>
                  </li>
                  <li>
                      <a href="projets.html?filter=all">
                          <i class="fas fa-project-diagram"></i>
                          <strong>Projets</strong>
                      </a>
                  </li>
                  <li>
                      <a href="a-propos.html">
                          <i class="fas fa-info-circle"></i>
                          <strong>A propos</strong>
                      </a>
                  </li>
                  <li>
                      <a href="contact.html">
                          <i class="fa fa-envelope-o"></i>
                          <strong>Contact</strong>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>

    `;
  }
}

customElements.define('nav-component', Nav);

/* Set the width of the sidebar to 250px (show it) */
function navBtn() {

  const btn = document.getElementById("nav-btn");

  if(btn.innerText === '\u{2630}'){
      btn.innerText = '\u{00D7}';
      document.getElementById("navbar").className = "nav-container";
      document.getElementById("navitems").className = "nav-menu";
  }else{
      btn.innerText= '\u{2630}';
      document.getElementById("navbar").className = "nav-container-collapsed";
      document.getElementById("navitems").className = "nav-menu-collapsed";
  }
}

navBtn()
