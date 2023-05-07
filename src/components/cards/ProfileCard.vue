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
        <span  style='color: #f8f8ffb5; font-size: 32px!important;'>format_quote</span>
        <hr class='top-line'/>
      </span>
      <!-- word limit 320 -->
      <span class ='user-bio-story' >
        Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
      </span>
      <span class= 'down-quote'>
        <span  style='color: #f8f8ffb5; font-size: 32px!important;'>format_quote</span>
        <hr class='bottom-line'/>
      </span>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
</style>
