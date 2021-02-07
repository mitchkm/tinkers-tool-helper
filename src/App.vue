<template>
  <v-app>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#t1">
          Builder
          <v-icon>mdi-pickaxe</v-icon>
        </v-tab>

        <v-tab href="#t2">
          Materials
          <v-icon>mdi-nut</v-icon>
        </v-tab>

        <v-tab href="#t3">
          Traits + Modifiers
          <v-icon>mdi-chart-box-outline</v-icon>
        </v-tab>

        <v-tab href="#t4">
          Mods + Addons
          <v-icon>mdi-text-box-plus-outline</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="t1">
          <div class="spacer"></div>
          <tool-builder-tab />
        </v-tab-item>

        <v-tab-item value="t2">
          <div class="spacer"></div>
          <materials-tab />
        </v-tab-item>

        <v-tab-item value="t3">
          <div class="spacer"></div>
          <traits-modifiers-tab />
        </v-tab-item>

        <v-tab-item value="t4">
          <div class="spacer"></div>
          <addons-mods-tab />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ToolBuilderTab from "./components/ToolBuilderTab.vue";
import MaterialsTab from "./components/MaterialsTab.vue";
import TraitsModifiersTab from "./components/TraitsModifiersTab.vue";
import AddonsModsTab from "./components/AddonsModsTab.vue";

@Component({
  components: {
    ToolBuilderTab,
    MaterialsTab,
    TraitsModifiersTab,
    AddonsModsTab,
  },
})
export default class App extends Vue {
  set tab(tab: string) {
    this.$router.replace({ query: { ...this.$route.query, tab } });
  }
  get tab() {
    return this.$route.query.tab as string;
  }
}
</script>

<style lang="scss">
#app {
  width: 80%;
  margin: auto;
  background-color: bisque;
}
body {
  background-color: bisque;
}
div.spacer {
  display: block;
  opacity: 0;
  width: 100%;
  height: 20px;
}
</style>
