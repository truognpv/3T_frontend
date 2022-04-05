<script setup lang="ts">
import Up from './Up.vue'
import CardContentVue from './CardContent.vue'
import Down from './Down.vue'

const props = defineProps({
  status: String,
})
</script>

<template>
  <div class="expired w-[320px]">
    <div class="flex flex-col bg-white rounded-2xl">
      <div class="flex justify-between p-2 bg-gray-500 rounded-t-2xl">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-ban"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
          </svg>
          Expired
        </div>
        <div>#28031997</div>
      </div>

      <div class="p-4">
        <Up :is-active="props.status === 'up'" />

        <CardContentVue
          :is-active="props.status === 'up'"
          status="CLOSE PIRECE"
        />

        <Down :is-active="props.status === 'down'" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.expired {
  background: rgb(231, 227, 235);
  border-radius: 16px;
  color: rgb(40, 13, 95);
  overflow: hidden;
  position: relative;
  padding: 1px 1px 3px;
}
</style>
