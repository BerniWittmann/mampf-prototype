<template>
  <v-layout>
    <el-row>
      <el-col :span="12" :offset="6">
        <v-panel>
          <h1 class="panel-title" slot="header">
            <h2 class="text-center">Ein Essen anbieten</h2>
          </h1>
          <div slot="body">
            <el-form ref="form" :model="meal" label-width="200px" @submit.prevent="add()">
              <el-form-item :label="$t('meal.name_label')">
                <el-input v-model="meal.name"
                          :placeholder="$t('meal.name')"
                          type="text"></el-input>
              </el-form-item>
              <el-form-item :label="$t('meal.places_label')">
                <el-input-number v-model="meal.places"
                                 :placeholder="$t('meal.places')"
                                 :min="1"
                                 type="number"></el-input-number>
              </el-form-item>
              <el-form-item :label="$t('meal.price_label')">
                <el-input v-model="meal.price"
                                 :placeholder="$t('meal.price')"
                                 step="any"
                                 min="0"
                                 type="number"></el-input>
              </el-form-item>
              <el-form-item :label="$t('meal.datetime_label')">
                <el-date-picker type="datetime" :placeholder="$t('meal.datetime')" v-model="meal.date"
                                format="dd.MM.yyyy HH:mm" :picker-options="pickerOptions"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="add">{{ $t('meal.create') }}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </v-panel>
      </el-col>
    </el-row>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Add Page
   * ============
   *
   * Page where the user can add a new meal.
   */

  import moment from 'moment';

  import mealService from '../../services/meal';

  export default {
    components: {
      VLayout: require('@/layouts/background.vue'),
      VPanel: require('@/components/panel.vue'),
    },

    data() {
      return {
        meal: {
          name: null,
          places: null,
          price: null,
          date: null,
        },
        pickerOptions: {
          disabledDate(date) {
            return moment(date).isBefore(moment(), 'minute');
          },
        },
      };
    },

    methods: {
      add() {
        mealService.add(this.meal);
      },
    },
  };
</script>
