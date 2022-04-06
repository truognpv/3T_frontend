<script setup lang="ts">
import { ref } from 'vue'

const isFlip = ref(false)

function onToggleFlip() {
  isFlip.value = !isFlip.value
}
console.log(onToggleFlip)
</script>

<template>
  <div class="rounded-2xl card">
    <div class="flex flex-col p-4 bg-white rounded-2xl">
      <div class="flex items-start justify-between p-2">
        <h1>Prize Pool:</h1>
        <h1>1000BNB</h1>
      </div>
      <div>
        <button class="btnUp" @click="onToggleFlip">Enter UP</button>
        <button class="btnDown">Enter DOWN</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btnUp,
.btnDown {
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  color: white;
  width: 100%;
  margin-bottom: 4px;
}

.btnUp {
  background: rgb(49, 208, 170);
}
.btnDown {
  background: rgb(237, 75, 158);
}

.card {
  background: linear-gradient(rgb(83, 222, 233) 0%, rgb(118, 69, 217) 100%);
  padding: 2px;
}
</style>
