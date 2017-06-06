<template>
  <v-layout>
    <v-panel
      contextual-style="primary"
    >
      <h1 class="panel-title" slot="heading">
        {{ $t("general.welcome") }}
      </h1>
      <div slot="body">
        <p>
          {{ $t("general.welcome_text") }}
        </p>
        <p>
          {{ $t("general.bug_notice") }}
        </p>
        <a class="btn btn-primary" href="https://github.com/BerniWittmann/mampf-prototype/issues" target="_blank">
          <i class="fa fa-github fa-fw" aria-hidden="true"></i>
          <span class="padding-left">{{ $t("general.github") }}</span>
        </a>
        <a class="btn btn-primary" href="mailto:b.wittmann@mail.de">
          <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
          <span class="padding-left">{{ $t("general.email") }}</span>
        </a>
      </div>
      <div slot="footer" v-html="$t('general.by_text')">
      </div>
    </v-panel>
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
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
