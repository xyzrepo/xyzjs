<template>
  <div>
    
    <div class="ui inverted vertical center aligned segment">
       <particles />
      <nav class="ui container">
        <h1 class="ui inverted header">Cover</h1>
        <div class="ui borderless inverted compact menu">
          <a class="item" href="/">Home</a>
          <a class="item" href="/semantic">Feature</a>
          <a class="item" href="/contact">Contact</a>
        </div>
      </nav>
      <div class="ui content container">
        <h1 class="ui inverted header">Cover your page.</h1>
        <p>
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <div class="ui huge button">Learn more</div>
      </div>
      <footer class="ui inverted vertical segment">
        Cover template for
        <a href="http://semantic-ui.com">Semantic-UI</a>, by
        <a href="https://github.com/semantic-ui-forest">@Semantic-UI-Forest</a>.
      </footer>
    </div>
  </div>
</template>
<style>
body {
    
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
}
@media only screen and (min-width: 768px) {
  .ui.container {
      z-index: 1;
    width: 700px;
    max-width: 700px;
  }
  nav.ui.container .ui.header {
      z-index: 1;
    float: left;
    margin-top: 12px;
  }
  nav.ui.container .ui.inverted.compact.menu {
      z-index: 1;
    float: right;
  }
}
.ui.inverted.vertical.center.aligned.segment {
    z-index: 1;
  padding-top: 36px;
}
nav.ui.container .ui.inverted.compact.menu {
    z-index: 1;
  background-color: rgba(51, 51, 51);
}
nav.ui.container .ui.inverted.compact.menu .item {
    z-index: 1;
  padding-bottom: 0;
}
nav.ui.container .ui.inverted.compact.menu .item {
    z-index: 1;
  font-size: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 14px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 0;
}
nav.ui.container .ui.inverted.compact.menu .active.item {
    z-index: 1;
  background-color: inherit;
  border-bottom-color: white;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.ui.inverted.vertical.segment {
  z-index: 1;
  height: 100vh;
  background-color: rgb(51, 51, 51);
}
.ui.content.container {
    z-index: 1;
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.ui.content.container h1.header {
    z-index: 1;
  font-size: 36px;
}
.ui.content.container p {
    z-index: 1;
  font-size: 21px;
  line-height: 1.6;
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.ui.inverted.vertical.segment footer.ui.segment {
    z-index: 1;
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: gray;
}
.ui.inverted.vertical.segment footer.ui.segment a {
    z-index: 1;
  color: white;
}
</style>