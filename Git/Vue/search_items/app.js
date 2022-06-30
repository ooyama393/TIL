Vue.createApp({
  data: function () {
    return {
      items: [],
      filterText: '',
      activeTab: 1,
      filterText: '',
      filterPriceId: undefined,
    };
  },
  computed: {
    filteredItems: function () {
      const self = this;
      if (this.filterText) {
        return this.items.filter(function (item) {
          return item.name.indexOf(self.filterText) !== -1;
        });
      } else {
        return this.items;
      }
    },
    activeWordsTab: function () {
      return this.activeTab === 1;
    },
    activePriceTab: function () {
      return this.activeTab === 2;
    },
  },
  methods: {
    fetchItem: function () {
      const self = this;
      axios.get('./item.json').then(function (r) {
        self.items = r.data;
        console.log(r);
      });
    },
    changeTab: function (number) {
      this.initialize();
      this.activeTab = number;
    },
    initialize: function () {
      this.filterText = '';
      this.filterPriceId = undefined;
    },
  },
  mounted: function () {
    this.fetchItem();
  },
}).mount('#app');
