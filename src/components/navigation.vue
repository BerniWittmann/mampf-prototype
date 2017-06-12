<template>
  <nav class="navbar navbar-default">
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
        <ul class="nav navbar-nav">
          <router-link
            :to="{ name: 'home.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a>
              {{ $t('nav.home') }}
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav">
          <router-link
            :to="{ name: 'meals.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a>
              {{ $t('nav.meals') }}
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav">
          <router-link
            :to="{ name: 'meals.add' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a>
              {{ $t('nav.meals_add') }}
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav">
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
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click.prevent="logout">
              <i class="fa fa-sign-out"></i>
            </a>
          </li>
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
  };

</script>
