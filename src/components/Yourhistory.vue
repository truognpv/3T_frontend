<script setup lang="ts">
import Entered from './Entered.vue'
</script>

<template>
  <div class="p-4">
    <div>
      <h1>Your history</h1>
      <div class="flex items-center justify-start">
        <div>
          <div class="w-32 h-32">
            <svg viewBox="0 0 128 128" class="sc-27c98e05-0 ceIHvL">
              <circle
                r="54"
                cx="64"
                cy="64"
                class="sc-27c98e05-1 sc-27c98e05-2 kUYxTR knhldX"
              ></circle>
              <circle
                r="54"
                cx="64"
                cy="64"
                offset="158.33626666666666"
                class="sc-27c98e05-1 sc-27c98e05-3 dXbPrF eatKVC"
              ></circle>
            </svg>
          </div>
        </div>
        <div>
          <p>Net results</p>
          <h1>+0,119 BNB</h1>
          <span>~$51.34</span>
        </div>
      </div>

      <div>
        <h1>Average return / round</h1>
        <p>+0,008 BNB</p>
        <span>~$3.42</span>
      </div>

      <div>
        <h1>Best round: #58240</h1>
        <p>+0,064 BNB<span>(2.67x)</span></p>
        <span>~$27.32</span>
      </div>

      <div>
        <h1>Average position entered / round</h1>
        <h2>0,027 BNB</h2>
        <span>~$11.75</span>
      </div>
    </div>

    <hr />
    <div>
      <Entered result="Won" rounds="8">
        <span>53.33%</span>
      </Entered>
      <Entered result="Lose" rounds="7">
        <span>46.67%</span>
      </Entered>
      <Entered result="Entered" rounds="15">
        <span>Total</span>
      </Entered>
    </div>
  </div>
</template>
<style scoped>
.kUYxTR {
  fill: none;
  stroke-width: 16;
  stroke-dasharray: 158.336, 339.292;
}
.knhldX {
  stroke: rgb(237, 75, 158);
  animation: 1s ease 0s 1 normal none running ctMpS;
}

@keyframes ctMps {
  0% {
    stroke-dasharray: 0, 339.292;
  }
  100% {
  }
}

.eatKVC {
  stroke: rgb(49, 208, 170);
  stroke-dashoffset: -158.336;
  animation: 1s ease 0s 1 normal none running ctMpS,
    1s ease 0s 1 normal none running kXiOey;
}
.dXbPrF {
  fill: none;
  stroke-width: 16;
  stroke-dasharray: 180.956, 339.292;
}
@keyframes ctMpS {
  0% {
    stroke-dasharray: 0, 339.292;
  }
  100% {
  }
}
@keyframes kXiOey {
  0% {
    stroke-dashoffset: 0;
  }
}
</style>
