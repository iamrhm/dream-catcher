<template>
  <div class="edit-dreams">
    <div>
        <img class ='dream-logo' src="../../assets/dream_icon.svg" />
      </div>
    <form>
      <div class="edit-dream-content">
        <div class = 'dream-date'>
          <md-datepicker id="md-date-icon"
          v-model="dreamDate">
            <label style='color: rgba(255,255,255,0.48);'>Select Date</label>
          </md-datepicker> 
        </div>
      <hr>
        <span class ='edit-dream-story' >
          <md-field class= 'edit-story-input'>  
            <label style='color: rgba(255,255,255,0.48);'>Your Dream</label>
            <div class='multiline-input'>
            <md-textarea  
                v-model.trim="dreamStory"
                style='color: rgba(255,255,255,0.48);  
                height: 100%;
                width:100%;  
                margin:auto;
                -webkit-text-fill-color: rgba(255,255,255,0.48);' >
            </md-textarea>
            </div>
          </md-field>
        </span>
        <hr>
      </div>
      <p v-if="errorMsg!==null">{{errorMsg}}</p>
      <div class = 'submit-edit-dream'
     >
        <md-button v-on:click='onSubmit' class = 'save-button' style='color: rgba(255,255,255,0.48);'>
          Save
        </md-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dreamDate : null,
      dreamStory : null,
      errorMsg : null
    }
  },
  mounted(){
    if(document.getElementsByTagName('svg') !== undefined){
      document.getElementsByTagName('svg')[0].style.cssText = "fill : #f8f8ffb5; color :#f8f8ffb5;"
      document.getElementsByClassName('md-input')[0].style.cssText = "-webkit-text-fill-color:#fff"
    }
  },
  methods : {
    onSubmit : function(){
      if(this.dreamDate !== null && this.dreamStory !== null){
        console.log('http request to edit post')
      }else{
        if(this.dreamDate === null){
          this.errorMsg = 'Please select a date'
        }else if(this.dreamStory === null){
          this.errorMsg = 'Please enter your story'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit-dreams {
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
    justify-content: start;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.78), 0 5px 15px 0 rgba(0, 0, 0, 0.62);
  }
  .edit-dreams-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    text-align: right
  }
  
  .dream-date{
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
  }
  .edit-dream-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    overflow: auto;
  }
  .edit-dream-story{
    width: 90%;
    height:60%;
    margin: 5px auto;
    text-align: center;
    color: #f8f8ffb5;
    padding: 0 14px;
  }
 .edit-story-input{
    height: 100%;
    margin: auto;
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
  .submit-edit-dream{
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
    .save-button{
    background: 	#3b444b;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.48);
    width: 40%;
  }

  .save-button:active  {
    box-shadow: 0 0 0 1px rgba(255,255,255,0.54);
    transform: translateY(2px);
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

  .md-field.md-theme-default>.md-icon:after {
      background-color: transparent;
  }
  .md-input{
     background-color: rgba(255,255,255,0.48);
     color:wheat;
  }
 
  .multiline-input{
  margin: 4% auto 0%;
  }

  .dream-logo{
      width: 124px;
    }
 .md-input {
    color:wheat !important;
  }
   .md-input{
    -webkit-text-fill-color: red !important;
}

</style>
