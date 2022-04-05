<script lang="ts" setup></script>

<template>
  <div class="flex flex-col justify-center">
    <div class="p-4 bg-white">
      <div class="flex items-center justify-between">
        <div class="flex">
          <button @click="$emit('onToggleFlip')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-left"
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </button>
          <h1>Set Position</h1>
        </div>
        <div class="flex">
          <slot />
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center gap-3 p-6">
      <div class="flex justify-between">
        <h2>Commit:</h2>
        <div class="flex">
          <svg
            viewBox="0 0 96 96"
            color="text"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-5a69fd5e-0 fjAkFI"
          >
            <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
            <path
              d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
              fill="white"
            ></path>
          </svg>
          <h3>BNB</h3>
        </div>
      </div>

      <div>
        <input placeholder="0.0" class="w-full text-right" />
        <div class="flex justify-end">
          <small>Balance:1000</small>
        </div>
      </div>

      <div>
        <input type="range" class="w-full" />
        <div class="grid grid-cols-5">
          <button class="btn">10%</button>
          <button class="btn">25%</button>
          <button class="btn">50%</button>
          <button class="btn">75%</button>
          <button class="btn">Max</button>
        </div>
      </div>

      <div class="text-center confirm">
        <button>Enter an mount</button>
      </div>

      <div>
        <small>
          You won’t be able to remove or change your position once you enter it.
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirm {
  align-items: center;
  border: 0px px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
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
  background-color: rgb(31, 199, 212);
  color: white;
  width: 100%;
}

.is-flip {
  transform: rotateY(-180);
}

.btn {
  align-items: center;
  border: 0px;
  border-radius: 16px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 20px;
  font-size: 12px;
  padding: 0px 8px;
  background-color: rgb(239, 244, 245);
  box-shadow: none;
  color: rgb(31, 199, 212);
}

.btn:hover {
  opacity: 0.5;
}
</style>
