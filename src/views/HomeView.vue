<template>
  <div class="home">
    <div class="home__welcome" v-if="pages.poster === isChange">
      <home-poster @change-to-details="changePage" />
    </div>
    <div class="home__detail" v-else-if="pages.details === isChange">
      <home-details @change-to-details="changePage" />
    </div>
    <div class="home__end" v-else-if="pages.end === isChange">
      <home-end @change-to-details="changePage" />
    </div>
  </div>
</template>

<script>
import { CONST } from '@/constants/constants';
import HomePoster from '@/views/ViewsComponent/HomePoster.vue';
import HomeDetails from '@/views/ViewsComponent/HomeDetails.vue';
import HomeEnd from '@/views/ViewsComponent/HomeEnd.vue';

export default {
  name: "HomeView",
  components: {
    HomePoster,
    HomeDetails,
    HomeEnd,
  },
  data() {
    return {
      isChange: CONST.PAGES.poster,
      pages: CONST.PAGES,
    };
  },
  computed: {
  },
  methods: {
    changePage(pageName) {
      this.isChange = CONST.PAGES[pageName];
    },
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/home';
</style>
