Vue.createApp({
  data: function () {
    return {
      todoCategories: [],
      message: 'aaaa',
    };
  },
  computed: {
    joinedToDoCategories: function () {
      return this.todoCategories.join(' / ');
    },
    categoryText: function () {
      return 'ggg' + this.joinedToDoCategories;
    },
  },
}).mount('#app');
