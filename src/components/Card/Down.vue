<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isActive: Boolean,
})

const bgColor = computed(() => {
  return props.isActive ? '#ED4B9E' : 'gray'
})

console.log(props.isActive)
</script>

<template>
  <div class="max-w-[240px] mx-auto relative">
    <svg
      height="65px"
      width="240px"
      viewBox="0 0 240 65"
      color="text"
      xmlns="http://www.w3.org/2000/svg"
      class="sc-5a69fd5e-0 fIBjTm"
    >
      <g filter="url(#filter0_i)">
        <path
          d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
          :fill="bgColor"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="10.0001"
          y="1"
          width="224"
          height="62.9688"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow"
          ></feBlend>
        </filter>
      </defs>
    </svg>
    <div
      class="absolute flex flex-col items-center justify-center top-2 right-24"
    >
      <h2>Payout</h2>
      <h1>DOWN</h1>
    </div>
  </div>
</template>
