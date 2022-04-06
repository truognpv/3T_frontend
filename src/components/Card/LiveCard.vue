<script setup lang="ts">
import Up from './Up.vue'
import CardContent from './CardContent.vue'
import Down from './Down.vue'
</script>

<template>
  <div class="liveCard w-[320px]">
    <div class="flex flex-col bg-white rounded-2xl">
      <div class="flex justify-between p-2 rounded-t-2xl livecard_hearder">
        <div class="flex">
          <svg
            viewBox="0 0 24 24"
            width="24px"
            color="secondary"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(118, 69, 217)"
          >
            <path
              d="M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            ></path>
          </svg>
          LIVE
        </div>
        <div>#28031997</div>
      </div>
      <div class="h-2 bg-gray-200">
        <div class="h-2 animation"></div>
      </div>

      <div class="p-4">
        <Up />

        <CardContent status="LAST PRICE" />

        <Down />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animation {
  animation: countdown 10s ease forwards;
  background-color: rgb(118, 69, 217);
}

@keyframes countdown {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.liveCard {
  background: linear-gradient(rgb(83, 222, 233), rgb(118, 69, 217)) 0% 0% / 400%
    400%;
  border-radius: 16px;
  overflow: hidden;
  animation: 3s ease 0s infinite normal none running idZEjz;
  padding: 1px 1px 3px;
}

.livecard_hearder {
  color: rgb(118, 69, 217);
}
@keyframes idZEjz {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>
