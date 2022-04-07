<script lang="ts" setup>
import TabPage from '../components/TabPage.vue'
import Layout from '../components/Layout/Layout.vue'
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <Layout>
    <TabPage />
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider"
          ></v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Home"
              value="home"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-forum"
              title="About"
              value="about"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px">
          <div class="justify-center d-flex align-center h-100">
            <v-btn color="primary" @click.stop="drawer = !drawer">
              Toggle
            </v-btn>
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </Layout>
</template>
