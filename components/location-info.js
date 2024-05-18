class LocationInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div>Mendocino Coast Botanical Gardens</div>
      <div class="address" style="margin-bottom: 1em">
        <div>18220 CA-1</div>
        <div>Fort Bragg, CA</div>
        <div>95437</div>
      </div>
    `;
  }
}

customElements.define("location-info", LocationInfo);
