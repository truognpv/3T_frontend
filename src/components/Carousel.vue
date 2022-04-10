<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import ExpiredCardVue from './Card/ExpiredCard.vue'
import LiveCardVue from './Card/LiveCard.vue'
import NextCardVue from './Card/NextCard.vue'
import LaterCard from './Card/LaterCard.vue'
</script>

<template>
  <div class="z-1">
    <swiper :slides-per-view="3" :centered-slides="true" :mousewheel="true">
      <swiper-slide style="width: 320px">
        <ExpiredCardVue />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <ExpiredCardVue />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <ExpiredCardVue />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <LiveCardVue />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <NextCardVue />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <LaterCard />
      </swiper-slide>
      <swiper-slide style="width: 320px">
        <LaterCard />
      </swiper-slide>
    </swiper>
  </div>
</template>
