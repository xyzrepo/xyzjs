<template>
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
</template>
<style>
canvas {
  display: block;
  vertical-align: bottom;
} /* ---- particles.js container ---- */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #232741; */
  /* background-image: url("http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png"); */
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: 50% 50%;
    z-index: -1;
}
</style>