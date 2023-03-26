<template>
  <div class="button">
    <span>{{ label }}</span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ButtonTemp",
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.button {
  position: fixed;
  bottom: 5vh;
  right: 5vw;
  z-index: 2;
  transition: all 0.2s ease;

  &.custom {
    span {
      color: $white;
    }
    svg {
      stroke: $white;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -17px;
    left: -17px;
    display: block;
    border-radius: 28px;
    background: #dd5353;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  &:hover {
    cursor: pointer;

    &::before {
      width: 125%;
      background: $red;
    }
    svg {
      transform: translateX(0);
    }
  }
  &:active {
    transform: scale(0.96);
  }

  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #111;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
}
</style>
