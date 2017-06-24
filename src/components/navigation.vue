<template>
  <el-menu :default-active="this.activeRoute" mode="horizontal" :router="true" class="nav">
    <router-link
      :to="{ name: 'home.index' }"
      class="nav-image-wrap"
      tag="a"
    >
      <img class="nav-image" src="static/images/logo.png" :alt="$t('nav.name')">
    </router-link>
    <el-menu-item v-if="backNavigation" index="meals.index" @click="back"><i class="fa fa-chevron-left"></i> {{backNavigation}}</el-menu-item>

    <div class="nav-right">
      <el-menu-item index="meals.add" :route="{ name: 'meals.add' }"><el-button type="primary" size="small"><i class="fa fa-plus"></i> {{ $t('nav.meals_add') }}</el-button></el-menu-item>
      <el-menu-item v-if="isLoggedIn" index="account.index" :route="{ name: 'account.index' }">{{ $t('nav.account') }}</el-menu-item>
      <el-menu-item @click="logout" v-if="isLoggedIn" index="login.logout">{{ $t('nav.logout') }}</el-menu-item>
      <el-menu-item v-if="!isLoggedIn" index="login.index" :route="{ name: 'login.index' }">{{ $t('nav.login') }}</el-menu-item>
    </div>
  </el-menu>
</template>
<script>
  /* ============
   * Navigation Component
   * ============
   *
   * Navigation Bar component.
   *
   * Renders the navigation Mar.
   */
  import authService from '@/services/auth';

  export default {
    methods: {
      logout() {
        authService.logout();
      },

      back() {
        this.$router.go(-2);
      },
    },

    props: {
      backNavigation: {
        type: String,
      },
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters['auth/isLoggedIn'];
      },
      activeRoute() {
        return this.$route.name;
      },
    },
  };

</script>
