<script setup lang="ts">
const props = defineProps({
  result: String,
  rounds: String,
})
</script>

<template>
  <div>
    <div>
      <h1>{{ result }}</h1>
      <div class="flex gap-5">
        <div>
          <h2>{{ rounds }} rounds</h2>
          <slot />
        </div>
        <div>
          <h2>+0,249 BNB</h2>
          <span>~$106.93</span>
        </div>
      </div>
    </div>
  </div>
</template>
