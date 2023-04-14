<template>
  <div class="profile-card">
    <div class="profile-card-header">
      <div
        class = 'user-profile-photo'
        v-bind:style="{backgroundImage : 'url(' + imageSrc + ')'}" >
      </div>
      <div class = 'user-details'>
        <span class = 'user-name'>_iamRhM</span>
          <!-- word limit 26 -->
        <span class = 'user-work-hobbies'>
          Developer Designer Dreamer
        </span>
      </div>
    </div>
    <div class="user-bio">
      <span class='up-quote'>
        <md-icon  style='color: #f8f8ffb5; font-size: 32px!important;'>format_quote</md-icon>
        <hr class='top-line'/>
      </span>
      
      <!-- word limit 320 -->
      <span class ='user-bio-story' >
        Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
      </span>
      <span class= 'down-quote'>
        <md-icon  style='color: #f8f8ffb5; font-size: 32px!important;'>format_quote</md-icon>
        <hr class='bottom-line'/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imageSrc : 'https://s3.amazonaws.com/bloggedimages2019/gCvmljujs-1547281842145'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-card {
    width: 320px;
    height: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 12px;
    vertical-align: top;
    background-color: #232b2b;
    color: #fffafa;
    border-radius: 3%;
    justify-content: space-evenly;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.78), 0 5px 15px 0 rgba(0, 0, 0, 0.62);
  }

  .profile-card > *{
    width : 100%
  }

  .profile-card-header {
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .user-profile-photo{
    width: 60px;
    height: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #f8f8ffb5, 0 0 0 4px #232b2b, 0 0 4px 6px rgba(0, 0, 0, 0.37);
  }

  .user-name{
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
  }

  .user-work-hobbies{
    font-size: 13px;
    font-weight: 200;
    letter-spacing: 0;
    color: #f8f8ffb5;
  }

  .user-details{
    display : flex;
    flex-direction: column;
    align-items: end;
  }

  .user-bio{
    display: flex;
    flex-direction: column;
  }

  .up-quote, .down-quote{
    display: flex;
    flex-direction: row-reverse;
    text-align: right;
    width: 92%;
    margin: 5px auto ;
    opacity: .8;
  }
  .up-quote{
    transform: rotate(180deg);
    text-shadow: -5px 1px rgba(0, 0, 0, 0.37)
  }

  .down-quote{
    text-shadow: 5px 1px rgba(0, 0, 0, 0.37)
  }

  .user-bio-story{
    width: 85%;
    margin: 5px auto;
    text-align: justify;
    color: #f8f8ffb5;
  }

  hr{
    width: 78%;
    display: inline-block;
    position: relative;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: #f8f8ffb5;
    height: .5px ;
    opacity: .8;
  }
  .top-line{
    box-shadow: -4px -3px rgba(0, 0, 0, 0.37)
  }
  .bottom-line{
    box-shadow: 4px 3px rgba(0, 0, 0, 0.37)
  }

</style>
