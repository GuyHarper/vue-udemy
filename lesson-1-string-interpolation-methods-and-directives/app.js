new Vue({
  el: '#app',
  data: {
    firstName: 'Guy',
    lastName: 'Harper',
    blogUrl: 'http://www.google.com',
    filmTitle: 'The Matrix',
    released: 1999
  },
  methods: {
    getFullName: function(first, last) {
      return {
        name: `${first} ${last}`
      };
    },
    isFilmOld: function(year) {
      return year < 2000;
    }
  }
});
