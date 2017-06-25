<template>
  <v-layout back-navigation="Zurück zu den Essen">
    <el-row slot="side">
      <el-col :span="24">
        <v-user-panel :user="this.meal.author"></v-user-panel>
      </el-col>
    </el-row>

    <el-row slot="body">
      <el-col :span="24">
        <v-panel id="scroll-panel">
          <h1 class="panel-title" slot="header">
            <h1 class="text-center big">{{this.meal.name}}
              <el-button :disabled="alreadyJoined || bookedOut" v-if="!isAuthor" class="pull-right" type="primary" @click="join">
                <span v-if="alreadyJoined">Bereits angemeldet</span>
                <span v-if="!alreadyJoined && bookedOut">Keine Plätze mehr frei</span>
                <span v-if="!alreadyJoined && !bookedOut">Teilnehmen</span>
              </el-button>
            </h1>
            <span class="meal-single-header-additional-info-wrap">
              <span class="meal-single-header-additional-info"><i class="fa fa-calendar-o"></i> {{this.meal.displayDate}}</span>
              <span class="meal-single-header-additional-info"><i
                class="fa fa-map-marker"></i> {{this.locationName}}</span>
              <span class="meal-single-header-additional-info"><i class="fa fa-euro"></i> {{this.meal.price}}</span>
            </span>
          </h1>
          <div slot="body" class="meal-single-body">
            <el-row class="meal-single-body-part">
              <el-col :span="24">
                <h2>Gäste</h2>
                <span class="meal-single-body-guests-wrap">
                  <span class="meal-single-body-guest" v-for="guest in this.meal.guests">
                    <v-user-avatar :show-popover="true" :size="52" :user="guest"></v-user-avatar>
                  </span>
                </span>
                <p>
                  <v-free-places-text :free-places="this.meal.freePlaces" classes="" :highlight="true"></v-free-places-text>
                </p>
              </el-col>
            </el-row>
          </div>
        </v-panel>
      </el-col>
    </el-row>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Singe Page
   * ============
   *
   * Page where the user can view a single meal
   */

  import loadingMixin from '@/mixins/loading';
  import mealService from '@/services/meal';

  export default {
    mixins: [loadingMixin],
    components: {
      VLayout: require('@/layouts/backgroundWithLeftRail.vue'),
      VPanel: require('@/components/panel.vue'),
      VUserPanel: require('@/components/userpanel.vue'),
      VUserAvatar: require('@/components/useravatar.vue'),
      VFreePlacesText: require('@/components/freePlacesText.vue'),
    },

    computed: {
      meal() {
        return this.$store.state.meal.currentMeal || {};
      },

      bookedOut() {
        return this.meal.freePlaces === 0;
      },

      locationName() {
        return this.meal.location ? this.meal.location.displayName : 'Noch keine Adresse angegeben';
      },

      currentUser() {
        return this.$store.getters['account/userDetails'];
      },

      alreadyJoined() {
        if (!this.currentUser || !this.meal || !this.meal.guests ||
          this.meal.guests.length === 0) return false;
        return !!this.meal.guests.find(single => single.id === this.currentUser.id);
      },

      isAuthor() {
        return this.meal.author.id === this.currentUser.id;
      },
    },

    beforeMount() {
      if (!this.meal) this.$router.replace({ name: 'meals.index' });
    },

    destroyed() {
      this.$store.dispatch('meal/unsetCurrent');
    },

    methods: {
      join() {
        mealService.join(this.meal.id);
      },
    },
  };
</script>
