import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="explore-list">
      <h1 class="explore-title">Favorite Restaurant</h1>
    </div>
    <div id="restaurants" class="restaurants"></div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = '<h2 class="restaurants-not-found">Tidak ada restaurant untuk ditampilkan</h2>';
    }
  },
};

export default Favorite;
