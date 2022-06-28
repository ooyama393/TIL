Vue.createApp({
  data: function () {
    return {
      todoCategories: [],
      message: 'aaaa',
      count: 0,
      todoTitle: '',
    };
  },
  watch: {
    todoTitle: function (next, prev) {
      console.log('nexttt' + next);
      console.log('prevvv' + prev);
    },
  },
  computed: {
    joinedToDoCategories: function () {
      return this.todoCategories.join(' / ');
    },
    categoryText: function () {
      return 'ggg' + this.joinedToDoCategories;
    },
  },
  methods: {
    onClickCountUp: function (event) {
      console.log(this.categoryText);
      return this.count++;
    },
  },
}).mount('#app');
