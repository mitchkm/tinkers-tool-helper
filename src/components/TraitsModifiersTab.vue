<template>
  <v-card>
    <v-card-text>[Traits and Modifers Tab Incomplete]</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TraitsModifiersTab extends Vue {
  @Prop({default: "Hi there!"}) public msg?: string;
}
</script>
