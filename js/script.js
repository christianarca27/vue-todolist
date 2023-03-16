const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: [
            {
                text: "latte",
                done: false
            },
            {
                text: "uova",
                done: true
            },
            {
                text: "pane",
                done: false
            },
            {
                text: "pasta",
                done: false
            },
            {
                text: "tonno",
                done: true
            },
            {
                text: "fagioli",
                done: false
            }
        ]
      }
    },

    methods: {
        removeTodo(index) {
            this.todoList.splice(index, 1);
        }
    },

    mounted() {

    }
  }).mount('#app')