<script setup lang="ts">
import Up from './Up.vue'
import Down from './Down.vue'
import { ref } from 'vue'
import SetPosition from '../SetPosition.vue'

const isFlip = ref(false)
function onToggleFlip() {
  isFlip.value = !isFlip.value
}
const isShowUp = ref(false)
function onShowUp() {
  isFlip.value = true
  isShowUp.value = true
  isShowDown.value = false
}
const isShowDown = ref(false)
function onShowDown() {
  isFlip.value = true
  isShowDown.value = true
  isShowUp.value = false
}
</script>

<template>
  <div class="nextcard w-[320px] bg-red-200">
    <div class="card_inner" :class="{ 'is-flipped': isFlip }">
      <div class="card_face card_face--front">
        <div class="flex flex-col bg-white rounded-2xl front">
          <div
            class="flex justify-between p-2 text-white rounded-t-2xl nextCard_header"
          >
            <div class="flex">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                color="secondary"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path
                  d="M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                ></path>
              </svg>
              Next
            </div>
            <div>#28031997</div>
          </div>

          <div class="p-4">
            <Up />

            <div class="rounded-2xl card">
              <div class="flex flex-col p-4 bg-white rounded-2xl">
                <div class="flex items-start justify-between p-2">
                  <h1>Prize Pool:</h1>
                  <h1>1000BNB</h1>
                </div>
                <div>
                  <button class="btnUp" @click="onShowUp">Enter UP</button>

                  <button class="btnDown" @click="onShowDown">
                    Enter DOWN
                  </button>
                </div>
              </div>
            </div>

            <Down />
          </div>
        </div>
      </div>

      <div class="card_face card_face--behind">
        <!-- Position Up -->
        <SetPosition
          @on-ToggleFlip="onToggleFlip"
          :class="{ 'is-showup': isShowDown }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-up"
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="16" y1="9" x2="12" y2="5" />
            <line x1="8" y1="9" x2="12" y2="5" />
          </svg>
          <h1>UP</h1>
        </SetPosition>

        <!-- Position Down -->
        <SetPosition
          @on-ToggleFlip="onToggleFlip"
          :class="{ 'is-showdown': isShowUp }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down"
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
          <h1>DOWN</h1>
        </SetPosition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nextcard {
  height: 100%;
  background: rgb(231, 227, 235);
  border-radius: 16px;
  color: rgb(40, 13, 95);
  overflow: hidden;

  padding: 1px 1px 3px;
}

.nextCard_header {
  background-color: rgb(122, 110, 170);
}

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

.card_inner {
  transform-style: preserve-3d;
  transition: transform 1s;
  position: relative;
  width: 320px;
  height: 386px;
}

.is-flipped {
  transform: rotateY(-180deg);
}

.card_face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
}
.card_face--behind {
  transform: rotateY(-180deg);
}

.is-showdown {
  display: none;
}

.is-showup {
  display: none;
}
</style>
