<template>
  <div class="text-blobs">
    <h1><span>05-2022</span></h1>

    <div class="blobs_1"></div>
    <div class="blobs_2"></div>
    <div class="blobs_3"></div>
    <div class="blobs_4"></div>
    <div class="blobs_5"></div>
    <div class="blobs_6"></div>
    <div class="blobs_7"></div>
  </div>
</template>

<script>
export default {
  name: "TextBlobs",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Titan+One");

div {
  display: block;
  position: absolute;
}

.text-blobs {
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -5%);
  overflow: hidden;

  h1 {
    background: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: "Titan One", cursive;
    font-size: 60px;
    font-weight: 700;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;

    span {
      width: 100%;
      position: relative;

      &::before {
        background: linear-gradient(45deg, #fc5c7d, #6a82fb, #fc5c7d);
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        content: "";
        mix-blend-mode: screen;
      }
    }
  }
}

[class*="blobs"] {
  mix-blend-mode: color;
  animation: blobs 5s ease-in-out infinite alternate;
}

.blobs_1 {
  background: #ff1493;
  width: 60px;
  height: 60px;
  top: 35px;
  left: 200px;
}

.blobs_2 {
  background: #ff4500;
  width: 80px;
  height: 80px;
  top: 10px;
  left: 255px;
}

.blobs_3 {
  background: #00ff00;
  width: 60px;
  height: 60px;
  top: 0;
  left: 20px;
}

.blobs_4 {
  background: #ff0000;
  width: 100px;
  height: 100px;
  top: 20px;
  left: 100px;
}

.blobs_5 {
  background: #ffff00;
  width: 50px;
  height: 50px;
  top: 0;
  left: 70px;
}

.blobs_6 {
  background: #00ffff;
  width: 60px;
  height: 60px;
  top: 34px;
  left: -5px;
}

.blobs_7 {
  background: #ff8c00;
  width: 50px;
  height: 50px;
  top: 0;
  left: 180px;
}

@keyframes blobs {
  0% {
    border-radius: 26% 74% 61% 39% / 54% 67% 33% 46%;
  }
  10% {
    border-radius: 74% 26% 47% 53% / 68% 46% 54% 32%;
  }
  20% {
    border-radius: 48% 52% 30% 70% / 27% 37% 63% 73%;
  }
  30% {
    border-radius: 73% 27% 57% 43% / 28% 67% 33% 72%;
  }
  40% {
    border-radius: 63% 37% 56% 44% / 25% 28% 72% 75%;
  }
  50% {
    border-radius: 39% 61% 70% 30% / 61% 29% 71% 39%;
  }
  60% {
    border-radius: 27% 73% 29% 71% / 73% 51% 49% 27%;
  }
  70% {
    border-radius: 39% 61% 65% 35% / 74% 65% 35% 26%;
  }
  80% {
    border-radius: 55% 45% 37% 63% / 38% 30% 70% 62%;
  }
  90% {
    border-radius: 25% 75% 70% 30% / 39% 50% 50% 61%;
  }
  100% {
    border-radius: 66% 34% 33% 67% / 65% 73% 27% 35%;
  }
}
</style>
