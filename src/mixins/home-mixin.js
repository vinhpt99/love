import { CONST } from "@/constants/constants";
import WOW from "wow.js";

export const homeMixin = {
  data() {
    return {
      timelines: CONST.TIMELINE,
      pages: CONST.PAGES,
      wishes: CONST.wishes,
    }
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    changeToDetails(moveTo) {
      this.$emit("change-to-details", moveTo);
    },
  }
}