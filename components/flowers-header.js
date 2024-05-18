class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .flowers-container {
          display: flex;
          width: 100%;
          left: 0;
          top: 0;
          right: 0;
          position: absolute;
          justify-content: space-between;
          z-index: -1;
        }

        img.flowers {
          box-shadow: none !important;
          max-width: 25%;
          opacity: 70%;
        }

        .center-flowers {
          flex-shrink: 1;
          opacity: 70%;
          min-width: 0;
        }

        .center-flowers img {
          width: 100%;
          height: auto;
        }

        @media screen and (max-width: 768px) {
          .center-flowers {
            display: none;
          }

          img.flowers {
            max-width: 40%;
          }
        }
      </style>
      <div class="flowers-container">
        <img
          src="/assets/images/sprites/corner.png"
          class="flowers"
          width="250"
        />
        <div class="center-flowers">
          <img src="/assets/images/sprites/center.png" />
        </div>
        <div class="center-flowers">
          <img
            src="/assets/images/sprites/center.png"
            style="transform: rotateY(180deg)"
          />
        </div>
        <img
          src="/assets/images/sprites/corner.png"
          class="flowers"
          style="transform: rotateY(180deg)"
          width="250"
        />
      </div>
    `;
  }
}

customElements.define("flowers-header", Header);
