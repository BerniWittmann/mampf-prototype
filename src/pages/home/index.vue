<template>
  <v-layout>
    <div class="row home-part home-part-image">
      <div class="home-header-image">
      </div>
    </div>

    <div class="row home-part">
      <div class="col-md-12">
        <h2>Bringt Leben an den Esstisch</h2>
        <h4>Mit Mampf essen Sie gemeinsam und sparen dabei sogar noch</h4>
        <router-link
          :to="{ name: 'meals.index' }"
          class="btn btn-primary"
          tag="a"
        >Essen finden
        </router-link>
      </div>
    </div>

    <div class="row home-part home-part-split-vertical">
      <div class="col-md-6">
        <div class="home-subheader-image"></div>
      </div>
      <div class="col-md-6">
        <h3>Gemeinsam essen lohnt sich</h3>
        <p class="lead">Essen anbieten. Gäste einladen. Kosten sparen</p>
        <router-link
          :to="{ name: 'meals.add' }"
          class="btn btn-primary"
          tag="a"
        >Essen anbieten
        </router-link>
      </div>
    </div>
    <div class="row home-part">
      <div class="col-md-12">
        <h3>{{ $t("general.welcome") }}</h3>
        <p>
          {{ $t("general.welcome_text") }}
        </p>
        <p>
          {{ $t("general.bug_notice") }}
        </p>
        <div>
          <a class="btn btn-primary" href="https://github.com/BerniWittmann/mampf-prototype/issues" target="_blank">
            <i class="fa fa-github fa-fw" aria-hidden="true"></i>
            <span class="padding-left">{{ $t("general.github") }}</span>
          </a>
          <a class="btn btn-primary" href="mailto:b.wittmann@mail.de">
            <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
            <span class="padding-left">{{ $t("general.email") }}</span>
          </a>
        </div>
        <br>
        <p v-html="$t('general.by_text')"></p>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  export default {
    components: {
      VLayout: require('@/layouts/fullWidth.vue'),
    },
  };
</script>
