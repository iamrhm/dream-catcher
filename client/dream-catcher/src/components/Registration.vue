<template>
  <div class="registration-card">
    <div class = 'registration-header'>
      
    </div>
    
    <div class="registration-form">
      <div >
        <img class ='dream-logo' src="../assets/dream_icondream.svg" />
      </div>
      <md-field >
        <label style='color: #fffafa7a;'>User Name</label>
        <md-input style='color: #fffafa7a;    
         -webkit-text-fill-color: #fffafa;' 
         type='text'>
         </md-input>
      </md-field>
      <md-field :md-toggle-password="false">
        <label style='color: #fffafa7a' >Password</label>
        <md-input style='color: #fffafa7a;   
         -webkit-text-fill-color: #fffafa;' 
         type="password">
         </md-input>
      </md-field>
      <md-button class = 'login-button'>
         <img class ='login-logo' src="../assets/login.svg" />
      </md-button>
      
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.registration-card {
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

  .registration-form{
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: auto;
    align-items: center;
  }

  .md-field.md-theme-default:after {
    background-color: #fffafa7a;
  }

  .md-field.md-theme-default:before {
    background-color: rgba(255,255,255,0.54);
  }
  .dream-logo{
    width: 150px;
  }
  .login-logo{
    width: 68px;
    margin-top: 16px;
  }
  .login-button{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgb(49, 60, 65);
  }
</style>
