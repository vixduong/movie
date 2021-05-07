<template>
  <TrendingGallery />
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

const store = useStore()
const getTrending = async() => store.dispatch('trending/get', {})
onBeforeMount(async() => await getTrending())
</script>
