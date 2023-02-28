import restaurantItem from './index.html';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = restaurantItem;
  }

  // static get observedAttributes() {
  //   return ['title'];
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    console.log(title);
  }
}

export default RestaurantItem;
