<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <button v-on:click="getUser({id: 1})">getUser</button>
    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getUser']),
  },
}
</script>

