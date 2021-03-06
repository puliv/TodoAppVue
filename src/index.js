const app = new Vue({
  el: "#app",
  data: {
    currentDate: '',
    newItem: '',
    items: [
      {
        id: 1,
        name: 'Estudiar',
        completed: true
      },
      {
        id: 2,
        name: 'Entrenar',
        completed: false
      }
    ]
  },
  methods: {
    addItem: function () {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem.charAt(0).toUpperCase() + this.newItem.slice(1),
        completed: false,
      });
      this.newItem = '';
    },
    toggleComplete: function (item) {
      item.completed = !item.completed;
    },
    removeItem: function (itemId) {
      this.items = this.items.filter((newItem) => newItem.id !== itemId);
    },
    getDate: function () {
      var options = { year: 'numeric', month: 'short', day: 'numeric' };
      var date = new Date()
        .toLocaleDateString('es', options)
        .replace(/ /g, ' ')
        .replace('.', '')
        .replace(/-([a-z])/, function (x) { return ' ' + x[1].toUpperCase() });

      this.currentDate = date;
    }
  },
  computed: {
    reversedItems: function () {
      return this.items.slice(0).reverse()
    }
  },
  mounted() {
    this.getDate();
  }
});
