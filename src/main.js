import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'
import ('animate.css')
import ('hover.css')

let app = createApp(App);
app.config.ignoredElements = [/^ion-/];
app.use(router);
app.mount('#app');
app.use(MasonryWall);

const LazyLoadDirective = {
  mounted(el) {
 
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            imageObserver.unobserve(el);
          }
        }
      });
    });
    imageObserver.observe(el);
  },
};
app.directive("lazy", LazyLoadDirective);
