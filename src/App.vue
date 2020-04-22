<template>
  <div id="app">
    <Navbar msg="Welcome to Your Vue.js App" />
    <Sidebar msg="Welcome to Your Vue.js App" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
