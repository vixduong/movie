<template>
  <div class="bg-gray flex h-screen bg-opacity-60 justify-center items-center">
    <div class="flex w-8/10 lg:space-x-32">
      <div class="flex-auto space-y-5 md:flex-1/2">
        <BaseInformation :key="key" />
      </div>
      <div class="flex-1/2 hidden md:block">
        <div class="flex flex-col space-y-16 w-full">
          <h3>
            <span
              class="border-white font-bold border-b-2 text-2xl hover:(border-red text-red text-opacity-80)"
            >Casts & Crew</span>
          </h3>
          <VideoTrainer :key="key" />
          <ImagePoster :key="key" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const key = computed(() => store.getters['setting/union'] as Number)
</script>
