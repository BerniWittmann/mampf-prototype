<template>
  <nav class="navbar navbar-default navbar-mampf">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link
          class="navbar-brand"
          :to="{ name: 'home.index' }"
        >
          Mampf
        </router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right" v-if="isLoggedIn">
          <li>
            <a href="#" @click.prevent="logout">
              {{ $t('nav.logout') }}
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if="isLoggedIn">
          <router-link
            :to="{ name: 'account.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a>
              {{ $t('nav.account') }}
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if="!isLoggedIn">
          <router-link
            :to="{ name: 'login.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a>
              {{ $t('nav.login') }}
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-right navbar-form">
          <router-link
            :to="{ name: 'meals.add' }"
            class="nav-item nav-item-button"
            tag="li"
          >
            <a class="btn btn-primary btn-sm">
              <i class="fa fa-plus"></i>
              {{ $t('nav.meals_add') }}
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
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
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters['auth/isLoggedIn'];
      },
    },
  };

</script>
