var app = new Vue ({
    el: '#app',
    data: {
       
         },
         gwrg: [
              
         ]
    }),
    mounted() {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(json => console.log(json))
    }