<template>
  <v-card>
    <v-card-text>{{ msg }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ToolBuilderTab extends Vue {
  @Prop({default: "Hi there!"}) public msg?: string;
}
</script>
