import moment from 'moment';

let meals = [{
  id: 'c4ca4238a0b923820dcc509a6f75849b',
  name: 'Zucchininudeln Low Carb',
  image: {
    url: './static/images/meals/zuchininudeln.jpg',
  },
  author: {
    name: 'Nina',
    rating: 3,
    image: {
      url: './static/images/users/nina.jpeg',
    },
  },
  location: {
    display_name: 'Durlacher Allee 19',
  },
  guests: [],
  date: moment()
    .add(3, 'days')
    .hour(19)
    .minute(0)
    .toISOString(),
  free_places: 3,
  price: 2.5,
}, {
  id: 'c81e728d9d4c2f636f067f89cc14862c',
  name: 'Rostbraten mit Spätzle',
  image: {
    url: './static/images/meals/rostbraten.jpg',
  },
  author: {
    name: 'Carolin',
    rating: 5,
    image: {
      url: './static/images/users/carolin.jpeg',
    },
  },
  location: {
    display_name: 'Zamenhofstraße 8',
  },
  guests: [{
    name: 'Nina',
    rating: 3,
    image: {
      url: './static/images/users/nina.jpeg',
    },
  }, {
    name: 'Tim',
    rating: 4,
    image: {
      url: './static/images/users/tim.jpeg',
    },
  }],
  date: moment()
    .add(1, 'days')
    .hour(18)
    .minute(30)
    .toISOString(),
  free_places: 0,
  price: 4.3,
}, {
  id: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
  name: 'Maultaschenauflauf',
  image: {
    url: './static/images/meals/maultaschenauflauf.jpg',
  },
  author: {
    name: 'Tim',
    rating: 4,
    image: {
      url: './static/images/users/tim.jpeg',
    },
  },
  location: {
    display_name: 'Rhode-Island-Allee 50',
  },
  guests: [{
    name: 'Nina',
    rating: 3,
    image: {
      url: './static/images/users/nina.jpeg',
    },
  },
  ],
  date: moment()
    .hour(18)
    .minute(0)
    .toISOString(),
  free_places: 1,
  price: 1.9,
}];

export default {
  add(meal) {
    meals.push(meal);
  },
  get() {
    return meals;
  },
  getByID(id) {
    return meals.find(single => single.id === id);
  },
  join(id, guest) {
    let meal = this.getByID(id);
    if (!meal) return undefined;
    // Cloning object to prevent vuex state manipulation error
    meal = JSON.parse(JSON.stringify(meal));

    meal.guests.push(guest);
    meal.free_places = Math.max(meal.free_places - 1, 0);

    meals = meals.map((single) => {
      if (single.id === id) {
        return meal;
      }
      return single;
    });
    return meal;
  },
};
