const app = Vue.createApp({
    data() {
      return{
        Title: 'My Location',
        Author: 'Christopher LaBarbera',
        Age: 21,
        userInput: 'GOOGLE LOCATION' // This line should input the user's geolocation
      }
    },
    methods: {
      changeTitle(Title) { //reference HTML Line 16
        this.Title = Title
      }
    }
  })

  app.mount('#app')