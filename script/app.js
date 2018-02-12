(function (){
'use strict'

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);
   
    var shoppingList =[
        {
            name: "cookies",
            quantity: "10"
        },
        {
            name: "soap",
            quantity: "1"
        },
        {
            name: "cheese",
            quantity: "10"
        },
        {
            name: "milk",
            quantity: "2"
        },
        {
            name: "chicken",
            quantity: "5"
        }
    ];
    
    
    
    
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){   
        var toBuy = this;
        this.shoppingList = shoppingList;
        
        toBuy.removeItem = function (list, Itemindex) {
            
                ShoppingListService.removeItem(shoppingList, Itemindex);

           }
        
    }
    
    //second controller
   AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController (ShoppingListService){
        var boughtIt = this;       
        this.shoppingList = shoppingList;
        boughtIt.getItem = ShoppingListService.getItem();
       
    }
    
    //service functions
    function ShoppingListService(){
        var service = this;
        
        var items=[];
                    
        service.removeItem = function(list, $index){ 
           items.push(list[$index])
           list.splice($index,1);  
             
            }
        
        service.getItem = function(){
             
            return items;
            
        }
    }
    
})();

