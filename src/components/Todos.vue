<template>
  <!-- Html for our view -->
  <div class="todos">
    <h1>{{ msg }}</h1>
    <!-- our property in props: msg -->
    <p>{{ greeting }}</p>
    <!-- Our greeting from data().greeting -->
  </div>
</template>

<script>
//Logic for our view.

// Include the service from parent directory.
import RestService from "../RESTService";
// Instanciate our service.
const service = new RestService();

export default {
  name: "Todos",
  data() {
    //Return a object which represent our data in this view.
    return {
      greeting: "Hello and welcome to part two!",
      todos: null, //Instanciated with null to let vue know were going to use this later
      form: {
        // Empty object, add our form data
      },
    };
  },
  props: {
    // Gets populated from App.vue in the <todos> element
    // Name "msg" is a attribute on the todos element
    // see App.vue for clarification
    msg: String,
  },
  created() {
    //Gets called when the view is created
    //Good for fetching data that is needed at the time
    //the view is rendered.
    //Is part of "this" so everything needs to be prefixed
    //with "this"
    this.getTodos();
  },
  methods: {
    getTodos: async () => {
      try {
        let result = await service.getTodos();
        this.todos = result.data;
      } catch (error) {
        //console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- SCSS for this component/view/ -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
