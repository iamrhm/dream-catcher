<template>
  <div class="dream-display-card">
    <div class = 'dream-display-header'>
        <md-icon class="md-size-3x bookmark" 
        style='color: #3b444b;'> bookmark </md-icon>
    </div>
    
    <div class="dream-display-content">
      <!-- word limit 26 -->
      <span class = 'dream-date'>31-JAN-2019</span>
     <hr>
      <!-- word limit 320 -->
      <span class ='dream-story' >
        Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
      </span>
      <hr>
    </div>

    <!-- <div class = 'dream-sentiments'>
      <div class = 'happy-sentiment'>
        😃
      </div>
      <div class = 'sad-sentiment'>
        😭
      </div>
      <div class = 'angry-sentiment'>
        😡
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dream-display-card {
    position: relative;
    width: 280px;
    height: 500px;
    margin: 0 auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    vertical-align: top;
    background-color: #232b2b;
    color: #fffafa;
    border-radius: 3%;
    justify-content: space-evenly;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.78), 0 5px 15px 0 rgba(0, 0, 0, 0.62);
  }
  .dream-display-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    text-align: right
  }
  .bookmark{
    margin-top: -9px;
    color: #c5d1da;
    /* color: #f8f8ff30; onclick */
  }
  .dream-date{
      font-family: "Lucida Sans Typewriter", "Lucida Console", monaco, 
                    "Bitstream Vera Sans Mono", monospace; 
      font-size: 24px; font-style: normal; font-variant: normal; 
      font-weight: 700; 
      line-height: 26.4px;
  }

  .dream-display-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    overflow: auto;
  }
  .dream-story{
    width: 90%;
    height: 98%;
    margin: 5px auto;
    text-align: center;
    color: #f8f8ffb5;
    overflow: auto;
    padding: 0 14px;
  }
  hr {
    width : 20%;
    display: inline-block;
    position: relative;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
    margin: 15px auto 10px;

  }
  .dream-sentiments{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    left: 0;
    height: 20%;
  }
</style>
