const app = Vue.createApp({
    data() {
      return {
        itemName: null,
        itemNumber: null,
        important: false,
        shoppingList: [
          { name: 'Tomatoes', number: 5, important: false, found: false }
        ]
      }
    },
    methods: {
      addItem() {
        let item = {
          name: this.itemName,
          number: this.itemNumber,
          important: this.important,
          found: false
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null
        this.important = false
      }
    },
    computed:{
        isImportant(){
            if(this.important){
                return 'es importante';
            }else{
                return 'no es importante'
            }
        }
    }
  })