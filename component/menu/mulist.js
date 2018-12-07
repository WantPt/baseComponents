// component/menu/mulist.js
Component({
   properties: {
      menus: {
         type: "Array",
         value: []
      }
   },
   methods: {
      mytapMenu(evt) {
         this.triggerEvent('myselect', evt.currentTarget.dataset)
      }
   }
})