<template>
  <div class="registration-card">
    <form class="registration-form">
      <div class ='registration-header' >
        <input type="file" name="file" id="file" class="profile-pic" v-on:change="onChange($event)"/>

        <label for="file"
            v-if ="imgSrc === null"
            class='add-image-button'
          >
            <span
              style='color: #f8f8ffb5;'>
              add_circle
            </span>
        </label>

        <label for="file"
          v-else
          class ='edit-image-button'
        >
          <span
            style='color: #f8f8ffb5;'>
            edit
          </span>
        </label>

        <div
          v-bind:style="{backgroundImage : 'url(' +imgSrc+')' }"
          class='uploaded-photo'
        >
        </div>

      </div>
      <div class='registration-content'>
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
        <md-field :md-toggle-password="false">
          <label style='color: rgba(255,255,255,0.48);' > Re Enter Password</label>
          <md-input style='color: rgba(255,255,255,0.48);
          -webkit-text-fill-color: rgba(255,255,255,0.48);'
          type="password"
          v-model.trim="reEnteredPassword"
          >
          </md-input>
        </md-field>
      </div>
      <p class='error-msg' v-if="errorMsg!==null">{{errorMsg}}</p>
      <md-button
        class = 'registration-button'
        style='color: rgba(255,255,255,0.48);'
        v-on:click='onSubmit'
        >
        registration
      </md-button>
      </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgSrc : null,
      file : null,
      userName : null,
      password : null,
      reEnteredPassword : null,
      errorMsg : null,
    }
  },
    methods : {
      onChange : function (e) {
        e.preventDefault()
        if(e.target.files[0] !== undefined){
          this.file = e.target.files[0]
          this.imgSrc = URL.createObjectURL(e.target.files[0])
        }
        else{
          this.file = null
          this.imgSrc = null
        }
      },
      onSubmit : function(){
        if(this.userName !== null && this.password !== null
        && this.reEnteredPassword !== null && this.file !== null){
          if(this.password === this.reEnteredPassword){
            const formData = new FormData();
            formData.append('username', this.userName)
            formData.append('password', this.password)
            formData.append('profilepicture', this.file)
            console.log(formData)
          }
        }else{
          if(this.userName === null && this.password === null
        && this.reEnteredPassword === null && this.file === null){
          this.errorMsg = "Input Fields can't be blank"
        }else if(this.userName === null ){
          this.errorMsg = "User Name can't be blank"
        }else if(this.password === null
         || this.reEnteredPassword === null){
          this.errorMsg = "Password can't be blank"
        }else if(this.password !== this.reEnteredPassword){
          this.errorMsg = "Password can't be different"
        }else if(this.file === null){
          this.errorMsg = "Add a dope profile picture"
        }
        }
      }
    },
  }
</script>


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

  .registration-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 110px;
    position: relative;
  }

  .profile-pic{
      display : none
  }

 .uploaded-photo{
    width: 90px;
    height: 90px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #f8f8ffb5, 0 0 0 4px #232b2b, 0 0 4px 6px rgba(0, 0, 0, 0.37);
    }

  .add-image-button, .edit-image-button{
    min-width: 8px;
    height: 24px; margin: auto;
    width: 24px;border-radius: 50%;
    position: absolute;text-align: center;
    z-index: 5;
  }

  .add-image-button{
    right : 0;
    top : 8px;
    text-shadow: 3px -2px rgba(0, 0, 0, 0.37);
  }

  .edit-image-button{
    left : 0;
    bottom : 18px;
    text-shadow: 3px 1px rgba(0, 0, 0, 0.37);
  }

  .md-field.md-theme-default:after {
    background-color: rgba(255,255,255,0.48);
  }

  .md-field.md-theme-default:before {
    background-color: rgba(255,255,255,0.54);
  }

  .registration-button{
    background: 	#3b444b;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.48);
  }

  .registration-button:active  {
    box-shadow: 0 0 0 1px rgba(255,255,255,0.54);
    transform: translateY(2px);
  }

</style>
