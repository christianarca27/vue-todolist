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
        ],

        input: "",
      }
    },

    methods: {
        removeTodo(index) {
            this.todoList.splice(index, 1);
        },
        
        addTodo() {
            newItem = {
                text: this.input,
                done: false
            }
            this.input = "";

            this.todoList.push(newItem);
        },

        toggleDone(index) {
            if(this.todoList[index].done) {
                this.todoList[index].done = false;
            }
            else {
                this.todoList[index].done = true;
            }
        }
    },

    mounted() {

    }
  }).mount('#app')