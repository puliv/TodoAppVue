const app = new Vue({
  el: "#app",
  data: {
    newItem: '',
    items: [
      {
        id: 1,
        name: 'Lavar loza',
        completed: true
      },
      {
        id: 2,
        name: 'Barrer',
        completed: false
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
    },
    toggleComplete: function (item) {
      item.completed = !item.completed;
    },
    removeItem: function (itemId) {
      this.items = this.items.filter((newItem) => newItem.id !== itemId);
    }
  }
});