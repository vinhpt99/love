<template>
  <div class="text-typing">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TextTyping',
  props: {
    text: String,
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.text-typing {
  display: grid;
  place-content: center;
  text-align: center;
  font-family: Courier New, monospace;
  background: $background--end;
  overflow-x: hidden;

  h1 {
    font-size: 2vw;
    position: relative;
    width: max-content; 
    font-weight: normal;

    &:before, &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    &::before {
      background: $background--end;
      animation: write 2.5s steps(25) 0.5s forwards; /* Number of steps */
      width: 100%;
    }

    &::after {
      opacity: 1;
      width: 0.15em; 
      background: black;
      animation: write 2.5s steps(25) 0.5s forwards, blink 0.75s steps(2) infinite;
    }
  }
}

@keyframes write {
  to {
    left: 100%;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  } 
  49.9% {
     opacity: 0;
  }
  50% {
     opacity: 1;
  }
  100% {
     opacity: 1;
  }
}
</style>