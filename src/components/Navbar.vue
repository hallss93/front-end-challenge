<template>
  <div class="c-navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" class="o-img" />
    </div>
    <div class="flex1 c-container-flex">
      <span class="c-icon indent-increase ml-30"></span>
      <span class="ml-10">Tela Inicial</span>
    </div>
    <span class="c-icon user-logo large"></span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  @Prop() private msg!: string;
}
</script>
