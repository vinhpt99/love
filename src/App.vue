<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <audio id="myAudio" style="margin-top: 10px;" controls ref="audio" autoplay>
      <source  src="@/assets/audio/2AM-JustaTee-BigDaddy.mp3" type="audio/ogg"> 
  </audio>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {

    let audio = this.$refs.audio;
  
      
          audio.play();
        
        }
//     console.log('Will it play here?? lol');
//     console.log('Play outside of');
    
//     var audio = new Audio(require('../src/assets/audio/GheQuaRapcoustic-TaynguyenSoundTofuPC-7031398.mp3')); // path to file
//     audio.play();
// console.log(1111) // I'm text inside the component.


}
</script>


<style lang="scss">
@import '@/scss/main.scss';
</style>
