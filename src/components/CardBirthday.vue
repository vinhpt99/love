<template>
  <div class="birthday-card">
    <div class="card-front">
      <div class="front-text">
        <h3 class="happy">{{labels.happy}}</h3>
        <h3 class="bday">{{labels.birthday}}</h3>
        <h3 class="toyou">{{labels.you}}</h3>
      </div>
      <div class="wrap-deco">
        <div class="decorations"></div>
        <div class="decorations-two"></div>
      </div>
      <div class="wrap-deco-two">
        <div class="decorations"></div>
        <div class="decorations-three"></div>
      </div>
      <div class="plate">
        <div class="cake"></div>
        <div class="flame"></div>
      </div>
    </div>

    <div class="card-inside">
      <div class="inside-text">
        <h3 class="happy custom">{{labels.happy}}</h3>
        <h3 class="bday custom">{{labels.birthday}}</h3>
        <h3 class="toyou custom">{{labels.you}}</h3>
      </div>
      <div class="wishes">
        <p class="to">{{contents.to}}</p>
        <p>{{contents.wishes}}</p>
        <p>{{contents.wishesAfter}}</p>
        <p class="name">{{contents.from}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBirthday",
  data() {
    return {
      labels: {
        happy: 'happy',
        birthday: 'one year',
        you: 'anniversary',
      },
      contents: {
        to: 'Dear Sweetheart,',
        wishes: 'You are the reason why I smile every day. Our flames of passion will never be extinguished and may our love shine brightly to bring you a wonderful birthday.',
        wishesAfter: 'I LOVE YOU and Happy Birthday!',
        from: 'Parker Vu.',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Titan+One");
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush");
@import url("https://fonts.googleapis.com/css?family=Pacifico");
@import "@/scss/variables.scss";
@import "@/scss/extends/display.scss";

$card-width: 350px;
$card-height: 450px;

.birthday-card {
  position: relative;
  width: $card-width;
  height: $card-height;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(2500px);
  transition: 4s;

  &:hover {
    transform: perspective(2500px) rotate(5deg);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.15),
      0 10px 100px rgba(0, 0, 0, 0.3);

    .card-front {
      transform: rotateY(-160deg);
    }
    .front-text,
    .wrap-deco,
    .wrap-deco-two,
    .plate {
      display: none;
    }
  }

  .card-front {
    position: relative;
    background-color: #fff;
    width: $card-width;
    height: $card-height;
    overflow: hidden;
    transform-origin: left;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.13),
      30px 0 50px rgba(0, 0, 0, 0.1);
    transition: 0.4s;

    .front-text {
      position: relative;
      top: 5%;
    }
    .wrap-deco {
      position: absolute;
      top: -255px;
      left: -194px;
    }
    .wrap-deco-two {
      transform: scaleX(-1);
      position: absolute;
      top: -181px;
      left: 539px;
    }
    .plate {
      position: absolute;
      width: 130px;
      height: 5px;
      background-color: #00bbf9;
      left: 50%;
      transform: translateX(-50%);
      top: 213px;

      &:before {
        content: "";
        position: absolute;
        background: repeating-linear-gradient(
          -45deg,
          #9b5de5,
          #9b5de5 3px,
          #00f5d4 3px,
          #00f5d4 6px
        );
        width: 7px;
        height: 25px;
        top: -75px;
        left: 61px;
      }

      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 5px;
        background-color: #333;
        top: -80px;
        left: 64px;
      }

      .cake {
        position: absolute;
        overflow: hidden;
        width: 100px;
        height: 50px;
        background-color: #f15bb5;
        border-radius: 10px 10px 0 0;
        top: -50px;
        left: 15px;
        box-shadow: inset 0 -15px #f9c74f, inset 0 15px #432818;

        &:before {
          content: "";
          position: absolute;
          background-color: #432818;
          width: 10px;
          height: 20px;
          top: 5px;
          border-radius: 20px;
          box-shadow: 10px 5px #f15bb5, 20px 0px #432818, 30px 2px #f15bb5,
            40px 5px #432818, 50px 5px #f15bb5, 60px 0px #432818,
            70px 5px #f15bb5, 80px 5px #432818, 90px 5px #f15bb5;
        }
      }
      .flame {
        position: absolute;
        background-color: #fb5607;
        border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
        transform: rotate(-45deg);
        width: 15px;
        height: 15px;
        opacity: 0.7;
        top: -93px;
        left: 57px;
      }
    }
  }
  .card-inside {
    position: absolute;
    background-color: #fff;
    width: $card-width;
    height: $card-height;
    z-index: -1;
    left: 0;
    top: 0;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2);

    .inside-text {
      position: relative;
      top: -160px;
      transform: scale(0.7);
    }
    .wishes {
      position: relative;
      top: -110px;
      margin: 25px;

      p {
        font-family: "Caveat Brush", "Brush Script MT", cursive;
        color: #333;
        font-size: 20px;
        text-align: justify;

        &.to {
          text-align: left;
          padding-left: 5px;
        }
        &.name {
          text-align: right;
          padding-right: 10px;
        }
      }
    }
  }

  .happy,
  .bday,
  .toyou {
    @extend %effect-text-shadow;
    position: relative;
    font-family: "Pacifico", sans-serif;
    text-align: center;
    backface-visibility: hidden;
    font-size: 30px;
    color: $brown;
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  .happy {
    top: 200px;
  }
  .bday {
    top: 165px;
  }
  .toyou {
    top: 130px;
  }

  .decorations {
    position: absolute;
    width: 400px;
    height: 300px;
    border: 3px solid #333;
    border-radius: 50%;

    &:before,
    &:after,
    &-two:before,
    &-two:after,
    &-three:before,
    &-three:after {
      content: "";
      position: absolute;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      width: 0;
      height: 0;
    }
    &:before {
      border-top: 40px solid #f15bb5;
      top: 297px;
      left: 210px;
      transform: rotate(-5deg);
    }
    &:after {
      border-top: 40px solid #f4d35e;
      top: 288px;
      left: 260px;
      transform: rotate(-17deg);
    }
    &-two:after,
    &-three:after {
      border-top: 40px solid #9b5de5;
      top: 238px;
      left: 355px;
      transform: rotate(-40deg);
    }
    &-two:before {
      border-top: 40px solid #00f5d4;
      top: 268px;
      left: 315px;
      transform: rotate(-30deg);
    }
    &-three:before {
      border-top: 40px solid #00bbf9;
      top: 268px;
      left: 315px;
      transform: rotate(-30deg);
    }
  }
}
</style>
