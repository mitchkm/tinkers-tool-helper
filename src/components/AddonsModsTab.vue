<template>
  <v-card>
    <v-card-text>[Addons and Mods Tab Incomplete]</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class AddonsModsTab extends Vue {
  @Prop({default: "Hi there!"}) public msg?: string;
}
</script>
