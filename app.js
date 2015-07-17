/**
 * Created by aprovis on 17/07/15.
 */

(function () {
    // Creating our Store module which will run the Gem Store/Shop
    var app = angular.module('store', []);

    // Creating our controller to handle sending gem information to our storefront.
    app.controller('StoreController', function () {
        this.product = gem;
    });

    // Created a variable to hold product information of a gem.
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'It\'s a gem... a really shiny gem. What more could you want?'
    }

})();