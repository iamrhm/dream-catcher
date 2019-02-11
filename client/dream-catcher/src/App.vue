<template>
  <div id="app">
    <Login />
    <ProfileCard/>
    <DreamCard/>
  </div>
</template>

<script>
import DreamCard from './components/DreamCard.vue'
import ProfileCard from './components/ProfileCard.vue'
import Login from './components/forms/Login.vue'
import Registration from './components/forms/Registration.vue'
import EditProfileCard from './components/forms/EditProfileCard.vue'
import EditDream from './components/forms/EditDream.vue'

export default {
  name: 'app',
  components: {
    DreamCard,
    ProfileCard,
    Login,
    Registration,
    EditProfileCard,
    EditDream,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background : #0e1111;
  height: 100vh;
  width:100vw;
  overflow: hidden;
}
</style>
