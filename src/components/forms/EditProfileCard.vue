<template>
  <div class="edit-profile-card">
    <form>
    <div class="edit-profile-card-header">
      <div class='edit-profile-photo'>
        <input type="file" name="file" id="file" class="profile-pic" v-on:change="onChange($event)"/>
          <label for="file"
            v-if ="imgSrc === null" 
            class='add-image-button'
            >
              <md-icon
                style='color: #f8f8ffb5;'> 
                add_circle
              </md-icon>
          </label>
          <label for="file"
            v-else
            class ='edit-image-button'
          >
            <md-icon
              style='color: #f8f8ffb5;'> 
              edit
            </md-icon>
          </label>
          <div 
            v-bind:style="{backgroundImage : 'url(' +imgSrc+')' }" 
            class='uploaded-photo'
          >
          </div>
        </div>

      <div class = 'user-details'>
        <span class = 'user-name'>
          <md-field >
            <label style = 'color: rgba(255,255,255,0.48);'>User Name</label>
            <md-input style = 'color: rgba(255,255,255,0.48);    
              -webkit-text-fill-color: rgba(255,255,255,0.48);' 
              type = 'text'
              v-model="userName">
            </md-input>
          </md-field>
        </span>
          <!-- word limit 26 -->
        <span class = 'user-work-hobbies'>
          <md-field>
            <label style='color: rgba(255,255,255,0.48);'>Interests</label>
            <md-input 
              style='color: rgba(255,255,255,0.48);    
              -webkit-text-fill-color: rgba(255,255,255,0.48);' 
               v-model.trim ="interests"
               :maxlength ="26"
               ></md-input>
          </md-field>
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
        <md-field class= 'user-bio-story-input'>  
          <label style='color: rgba(255,255,255,0.48);'>Bio</label>
          <md-textarea  
              v-model ="bioStory"
              :maxlength ="320"
              style='color: rgba(255,255,255,0.48);    
              -webkit-text-fill-color: rgba(255,255,255,0.48);' >
          </md-textarea>
        </md-field>
      </span>
      <span class= 'down-quote'>
        <md-icon  style='color: #f8f8ffb5; font-size: 32px!important;'>format_quote</md-icon>
        <hr class='bottom-line'/>
      </span>
    </div>
    <p class="error-msg" v-if="errorMsg!==null">{{errorMsg}}</p>
    <md-button v-on:click="onSubmit" class = 'save-button' style='color: rgba(255,255,255,0.48);'>
      Save
    </md-button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgSrc : null,
      userName : null,
      interests : null,
      bioStory: null,
      fileInput : null,
      errorMsg :null,
    }
  },
    methods : {
      onChange : function (e) {
        e.preventDefault()
        if(e.target.files[0] !== undefined){
          this.imgSrc = URL.createObjectURL(e.target.files[0])
          this.fileInput = e.target.files[0]
        }
        else{
          this.fileInput = null
          this.imgSrc = null
        }
      },
      onSubmit : function(){
        if(this.userName !== null && this.interests !== null
        && this.bioStory !== null && this.fileInput !== null){
            const formData = new FormData();
            formData.append('username',this.userName)
            formData.append('interests',this.interests)
            formData.append('bioStory',this.bioStory)
            formData.append('profilepicture',this.fileInput)
        }else{
          if(this.userName === null && this.interests === null
        && this.bioStory === null && this.fileInput === null){
          this.errorMsg = "Input Fields can't be empty"
        }
        else if(this.userName === null){
          this.errorMsg = "User Name can't be empty"
        }
        else if(this.interests === null){
          this.errorMsg = "Interests can't be empty"
        }
        else if(this.bioStory === null){
          this.errorMsg = "User BioStory can't be empty"
        }
        else if(this.fileInput === null){
          this.errorMsg = "Profile picture can't be empty"
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .edit-profile-card {
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
    align-items:center;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.78), 0 5px 15px 0 rgba(0, 0, 0, 0.62);
  }

  .edit-profile-card > *{
    width : 100%
  }

  .edit-profile-card-header {
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .edit-profile-photo{
    position: relative;
  }
  .profile-pic{
      display : none
  }
  .uploaded-photo{
    width: 60px;
    height: 60px;
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
    position: absolute;
    text-align: center;
    z-index: 5;
  }
  .add-image-button{
    right : 0;
    top : -5px;
    text-shadow: 3px -2px rgba(0, 0, 0, 0.37);
  }
  .edit-image-button{
    left: 0;
    bottom: -5px;
    text-shadow: 3px 2px rgba(0, 0, 0, 0.37);
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

  .md-field{
    margin: 14px 0 6px;
  }
  .md-field.md-theme-default:after {
    background-color: rgba(255,255,255,0.48);
  }
  .md-field.md-theme-default:before {
    background-color: rgba(255,255,255,0.54);
  }
  .md-field.md-theme-default.md-has-textarea:not(.md-autogrow):after {
    background-color: rgba(255,255,255,0.48);
    border-color: rgba(255,255,255,0.48);
  }
  .md-field.md-theme-default.md-has-textarea:not(.md-autogrow):before{
    background-color: rgba(255,255,255,0.54);
    border-color: rgba(255,255,255,0.54);
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

  .user-bio-story{
    width: 85%;
    margin: 5px auto;
    text-align: justify;
    color: #f8f8ffb5;
  }
  .user-bio-story-input:before{
    color: rgba(255,255,255,0.5);
  }
  .user-bio-story-input:after{
    color: rgba(255,255,255,0.54);
  }

  .save-button{
    background: 	#3b444b;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.48);
    width: 40%;
  }

  .save-button:active  {
    box-shadow: 0 0 0 1px rgba(255,255,255,0.54);
    transform: translateY(2px);
  }
  .char-counter{
    float: right;
    position: relative;
    z-index: 4;
  }
</style>
