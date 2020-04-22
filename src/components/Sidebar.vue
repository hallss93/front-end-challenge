<template>
  <div class="c-sidebar">
    <ul class="o-list">
      <li class="pointer" :class="{ active: routerName == 'Kanban' }">
        <router-link :to="{ name: 'Kanban' }">
          <div class="logo">
            <img src="@/assets/img/house.svg" alt="house" class="o-img small" />
          </div>
        </router-link>
      </li>
      <li class="pointer" :class="{ active: routerName == 'Store' }">
        <router-link :to="{ name: 'Store' }">
          <div class="logo">
            <img src="@/assets/img/store.svg" alt="store" class="o-img small" />
          </div>
        </router-link>
      </li>
      <li class="pointer">
        <div class="logo">
          <img
            src="@/assets/img/profile.svg"
            alt="profile"
            class="o-img small"
          />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img src="@/assets/img/user.svg" alt="user" class="o-img small" />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img
            src="@/assets/img/clock-paper.svg"
            alt="clock"
            class="o-img small"
          />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img src="@/assets/img/money.svg" alt="money" class="o-img small" />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img
            src="@/assets/img/favorite.svg"
            alt="favorite"
            class="o-img small"
          />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img src="@/assets/img/order.svg" alt="order" class="o-img small" />
        </div>
      </li>
      <li class="pointer">
        <div class="logo">
          <img src="@/assets/img/edit.svg" alt="edit" class="o-img small" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  routerName = "Kanban";
  @Prop() private msg!: string;
  @Watch("$route")
  teste(to, from) {
    this.routerName = to.name;
    Vue.nextTick(() => {
      this.$forceUpdate();
    });
  }
}
</script>