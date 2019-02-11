<template>
  <div class="login-card">
    <div class = 'login-header'>
    </div>
    
    <form class="login-form">
      <div>
        <img class ='dream-logo' src="../../assets/dream_icon.svg" />
      </div>
      <md-field >
        <label style='color: rgba(255,255,255,0.48);'>User Name</label>
        <md-input style='color: rgba(255,255,255,0.48);    
         -webkit-text-fill-color: rgba(255,255,255,0.48);' 
         type='text'
         v-model.trim="userName"
         >
         </md-input>
      </md-field>
      <md-field :md-toggle-password="false">
        <label style='color: rgba(255,255,255,0.48);' >Password</label>
        <md-input style='color: rgba(255,255,255,0.48);   
         -webkit-text-fill-color: rgba(255,255,255,0.48);' 
         type="password"
         v-model.trim="password"
         >
         </md-input>
      </md-field>
       <p class='error-msg' v-if="errorMsg!==null">{{errorMsg}}</p>
      <md-button class = 'login-button' style='color: rgba(255,255,255,0.48);'
      v-on:click="onSubmit">
        Login
      </md-button>
      
    </form>

  </div>
</template>

<script>
export default {
  data(){
    return{
      userName : null,
      password : null,
      errorMsg : null
    }
  },
  methods : {
    onSubmit : function(){
      if(this.userName !== null && this.password !== null){
        const formData = new FormData();
        formData.append('username', this.userName)
        formData.append('password', this.password)
      }else{
        if(this.userName === null && this.password === null){
          this.errorMsg = "User Name Password can't be blank"
        }
        else if(this.userName === null){
          this.errorMsg = "User Name can't be blank"
        }else if(this.password === null){
          this.errorMsg = "Password can't be blank"
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-card {
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

  .login-form{
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: auto;
    align-items: center;
  }

  .md-field.md-theme-default:after {
    background-color: rgba(255,255,255,0.48);
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
    background: 	#3b444b;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.48);
  }
  .login-button:active  {
    box-shadow: 0 0 0 1px rgba(255,255,255,0.54);
    transform: translateY(4px);
  }
</style>
