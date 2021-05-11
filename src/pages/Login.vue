<template>
  <form method="post" @submit="">
    <input/>
    <button type="submit">login</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions({
      loginAction: 'auth/login'
    }),
    login() {
      this.loginAction({})
    }
  }
}
</script>