<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('')
</script>

<template>
  <input v-model="msg" type="text" />

  <p>{{ msg }}</p>
</template>
