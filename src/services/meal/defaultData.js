import moment from 'moment';

export default [{
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
  date: moment('04.06.2017 18:00', 'DD.MM.YYYY HH:mm').toISOString(),
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
  guests: [],
  date: moment('02.06.2017 18:00', 'DD.MM.YYYY HH:mm').toISOString(),
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
  guests: [],
  date: moment('03.06.2017 18:00', 'DD.MM.YYYY HH:mm').toISOString(),
  free_places: 1,
  price: 1.9,
}];
