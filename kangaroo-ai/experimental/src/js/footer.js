class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- Footer template -->
    <div id="footer" class="footer">
      <p class="copyright">© Copyright 2022 - Kangaroo.AI</p>
      <nav>
      <ul>
        <li>
          <a>mentions legales</a>
        </li>
        <li>
          <a>about</a>
        </li>
      </ul>
      </nav>
      <p class="tagline">There is an Art to problem solving.</p>
    </div>

    `;
  }
}

customElements.define('footer-component', Footer);
