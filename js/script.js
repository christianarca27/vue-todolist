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
        ]
      }
    },

    methods: {
        
    },

    mounted() {

    }
  }).mount('#app')