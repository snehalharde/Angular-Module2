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

           }; 
        toBuy.msg = "Everything is bought.";
        console.log("inside to buy")    
         
        
        
    }
    
   AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController (ShoppingListService){
        var boughtIt = this;       
        boughtIt.shoppingList = shoppingList;
        boughtIt.getItem = ShoppingListService.getItem();
         console.log("inside to already")   
        boughtIt.msg = "Nothing bought yet.";
    }
    
    function ShoppingListService(){
        var service = this;
        
        var items=[];
        
        service.addItem = function(list){
            return list;
        }
            
        service.removeItem = function(list, $index){ 
           items.push(list[$index])
           list.splice($index,1);  
            console.log("inside to service remove")   
            }
        
        service.getItem = function(){
             console.log("inside to service get")   
            return items;
            
        }
        

    }
    
})();

