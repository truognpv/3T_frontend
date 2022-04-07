<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <div class="p-4 cursor-pointer border-y" @click="isActive = !isActive">
    <div class="flex items-center justify-between">
      <div class="flex gap-10">
        <div class="flex flex-col items-center justify-center">
          <h1>Round</h1>
          <h2>Collected</h2>
        </div>
        <div class="flex flex-col items-center justify-center">
          <h1>Your Result</h1>
          <h2>10</h2>
        </div>
      </div>
      <!-- selector down -->
      <div v-if="!isActive">
        <svg
          viewBox="0 0 24 24"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-5a69fd5e-0 fIBjTm"
        >
          <path
            d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
          ></path>
        </svg>
      </div>
      <!-- selector up -->
      <div v-if="isActive">
        <svg
          viewBox="0 0 24 24"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-5a69fd5e-0 fIBjTm"
        >
          <path
            d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="p-4" v-if="isActive">
    <div>
      <!-- Your history -->
      <div>
        <div class="flex justify-between">
          <h1>Your history</h1>
          <div class="flex">
            <h2>LOSE</h2>
            <svg
              viewBox="0 0 24 24"
              color="textSubtle"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-5a69fd5e-0 jNuCsa"
            >
              <path
                d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="p-2 border rounded-2xl">
          <div class="flex justify-between">
            <h3>Your direction:</h3>
            <h3 class="flex">
              <svg
                viewBox="0 0 24 24"
                color="white"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-5a69fd5e-0 hxTTmP"
              >
                <path
                  d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"
                ></path>
              </svg>
              UP
            </h3>
          </div>
          <div class="flex justify-between">
            <h3>Your position</h3>
            <h3>0,020 BNB</h3>
          </div>
          <div class="flex justify-between">
            <h2>Your Result:</h2>
            <h3>- 0,020 BNB</h3>
          </div>
        </div>

        <div></div>
      </div>
      <!-- Round History -->
      <div>
        <div>
          <h1>Round History</h1>
        </div>

        <div class="p-1 bg-red-200 rounded-2xl">
          <div class="p-4 bg-white rounded-2xl">
            <p>CLOSED PRICE</p>
            <div class="flex justify-between">
              <h2>$445,750</h2>
              <p class="flex">
                <svg
                  viewBox="0 0 24 24"
                  color="white"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-5a69fd5e-0 hxTTmP"
                >
                  <path
                    d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
                  ></path>
                </svg>
                $-0,070
              </p>
            </div>

            <div class="flex justify-between">
              <p>Locked Price:</p>
              <p>$445,820</p>
            </div>

            <div class="flex justify-between">
              <p><b>Prize Pool:</b></p>
              <p><b>24,077 BNB</b></p>
            </div>

            <div class="flex justify-between">
              <p>UP:</p>
              <small><b>1,94x Payout|</b> 12,394 BNB</small>
            </div>

            <div class="flex justify-between">
              <p>DOWN:</p>
              <small><b>2,06x Payout |</b>11,683 BNB</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
