<template>
  <div bg="gray opacity-60" h="screen" justify="center" align="items-center" class="flex">
    <div w="8/10" space="lg:x-32" class="flex">
      <div flex="auto md:1/2" space="y-5">
        <BaseInformation :key="key" />
      </div>
      <div flex="1/2" display="hidden md:block">
        <div flex="col" space="y-16" w="full" class="flex">
          <h3>
            <span
              border="white b-2" font="bold" text="2xl red"
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
