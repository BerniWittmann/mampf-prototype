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
              <el-button :disabled="bookedOut" class="pull-right" type="primary" @click="join"><span v-if="bookedOut">Keine Plätze mehr frei</span><span
                v-else>Teilnehmen</span></el-button>
            </h1>
            <span class="meal-single-header-additional-info-wrap">
              <span class="meal-single-header-additional-info"><i class="fa fa-calendar-o"></i> {{this.meal.displayDate}}</span>
              <span class="meal-single-header-additional-info"><i class="fa fa-map-marker"></i> {{this.locationName}}</span>
              <span class="meal-single-header-additional-info"><i class="fa fa-euro"></i> {{this.meal.price}}</span>
            </span>
          </h1>
          <div slot="body" class="meal-single-body">

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

  export default {
    mixins: [loadingMixin],
    components: {
      VLayout: require('@/layouts/backgroundWithLeftRail.vue'),
      VPanel: require('@/components/panel.vue'),
      VUserPanel: require('@/components/userpanel.vue'),
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
    },

    beforeMount() {
      if (!this.meal) this.$router.replace({ name: 'meals.index' });
    },

    destroyed() {
      this.$store.dispatch('meal/unsetCurrent');
    },

    methods: {
      join() {
        this.$message({
          showClose: true,
          message: 'Not implemented yet',
          type: 'warning',
          duration: 2000,
        });
      },
    },
  };
</script>
