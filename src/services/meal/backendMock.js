import moment from 'moment';
import { guid } from '../../utils/helpers';

let meals = [{
  id: 'c4ca4238a0b923820dcc509a6f75849b',
  name: 'Zucchininudeln Low Carb',
  image: {
    url: './static/images/meals/zuchininudeln.jpg',
  },
  author: {
    id: '1',
    name: 'Nina',
    rating: 3.5,
    image: {
      url: './static/images/users/nina.jpeg',
    },
  },
  message: 'Hallo Leute,\nIch koche heute ganz spontan eine ordentliche Portion Zucchininudeln "Low Carb" - bestens geeignet wenn ihr auch gerade noch an eurer Bikinifigur schleift!\nFreu mich',
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
    id: '2',
    name: 'Carolin',
    rating: 5,
    image: {
      url: './static/images/users/carolin.jpeg',
    },
  },
  message: 'Hi, ich mache einen Rostbraten nach dem Rezept von meiner Oma. Die Portionen werden üppig sein, also bringt einen guten Hunger mit ;)',
  location: {
    display_name: 'Zamenhofstraße 8',
  },
  guests: [{
    id: '1',
    name: 'Nina',
    rating: 3.5,
    image: {
      url: './static/images/users/nina.jpeg',
    },
  }, {
    id: '3',
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
    id: '3',
    name: 'Tim',
    rating: 4,
    image: {
      url: './static/images/users/tim.jpeg',
    },
  },
  message: 'Der Auflauf ist vegetarisch, also sind alle Vegetarier gerne willkommen.\n Bis dann',
  location: {
    display_name: 'Rhode-Island-Allee 50',
  },
  guests: [{
    id: '1',
    name: 'Nina',
    rating: 3.5,
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
    meal.author = {
      name: 'John',
      rating: 0,
      image: undefined,
      first_name: 'John',
      last_name: 'Doe',
      id: '4',
    };
    meal.guests = [];
    meal.id = guid().toString();
    meals.push(meal);
    return meal;
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
