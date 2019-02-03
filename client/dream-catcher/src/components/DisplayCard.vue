<template>
  <div class="display-card">
    <div class="display-card-header">
      <div class="title">
        <div class= 'user-profile-photo'>
          <md-avatar>
            <img src="../assets/avatar.jpg" alt="Avatar">
          </md-avatar>
        </div>
        <div class = 'user-details'>
          <span class = 'user-name'>_iamRhM</span>
           <!-- word limit 26 -->
          <span class = 'user-bio'>
            Developer Designer Dreamer
          </span>
        </div>
      </div>
    </div>
    <div class="display-card-content">
      <span class='up-comma'>
        <md-icon>format_quote</md-icon>
      </span>
      <!-- word limit 320 -->
      <span class ='user-words' >
        Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
      </span>
      <span class= 'down-comma'>
        <md-icon>format_quote</md-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display-card {
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
  .display-card > *{
    width : 100%
  }
  .display-card-header > .title{
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
  }

  .display-card-content{
    display: flex;
    flex-direction: column;
  }
  .user-details{
    display : flex;
    flex-direction: column;
    align-items: end;
  }
  .md-avatar{
    width: 50px;
    min-width: 50px;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
            0 2px 4px 0 rgba(0,0,0,0.08);
  }
  .user-name{
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
  }
  .user-bio{
    font-size: 13px;
    font-weight: 200;
    letter-spacing: 0;
    color: #f8f8ffb5;

  }
  .up-comma{
    transform: rotate(180deg);
    text-align: right;
    width: 92%;
    margin: 5px auto;
  }
  .down-comma{
    text-align: right;
    width: 92%;
    margin: 5px auto ;
  }
  .user-words{
    width: 90%;
    margin: 5px auto;
    text-align: center;
    color: #f8f8ffb5;
  }
</style>
