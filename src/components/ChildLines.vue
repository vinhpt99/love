<template>
  <div class="child-lines" ref="scrollContainer">
    <masonry-wall :items="items" :column-width="1000" :gap="5" :scroll-container="$refs.scrollContainer">
      <template #default="{ item, index }">
        <div
          :id="index"
          class="wow slideInLeft"
          data-wow-delay="1s"
          data-wow-duration="5s"
        >
          <img
            class="child-lines__img"
            v-lazy
            :data-src="require(`@/assets/u/${item.path}`)"
            :src="require(`@/assets/u/${item.path}`)"
            :alt="index"
            lazy-load
          />
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import WOW from "wow.js";

export default {
  name: "ChildLines",
  data() {
    return {
      items: [],
    };
  },
  computed: {},
  created() {
    new WOW().init();

    const all = require.context("@/assets/u/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    this.importAll(all);
  },
  mounted() {
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) => {
        const keyName = key.split('/')
        this.items.push({
          title: keyName.at(-1),
          path: key.replace("./", ""),
        })
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.child-lines {
  width: 100%;
  height: 100%;
  &__img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    image-orientation: from-image;
  }
}
</style>
