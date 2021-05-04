<template>
  <div position="relative" font="inter" text="white" flex="~ col">
    <!--  header  -->
    <Header />
    <!--  navigation  -->
    <Navigation />
    <!--  main  -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const getConfig = async() => store.dispatch('configuration/get', {})
onBeforeMount(async() => await getConfig())
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap');
</style>
