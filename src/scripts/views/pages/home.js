import RestaurantSource from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!--Daftar Restoran-->
    <div class="explore-list">
      <h1 class="explore-title">Explore Restaurant</h1>
    </div>
    <div id="restaurants" class="restaurants">
    </div>
    <!--End Daftar Restoran-->
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.HomeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
