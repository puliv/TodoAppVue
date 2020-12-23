const app = new Vue({
  el: "#app",
  data: {
    newItem: '',
    items: [
      {
        id: 1,
        name: 'Lavar loza'
      },
      {
        id: 2,
        name: 'Barrer'
      }
    ]
  },
  methods: {
    addItem: function () {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem,
        completed: false,
      });
      this.newItem = '';
    }
  }
});