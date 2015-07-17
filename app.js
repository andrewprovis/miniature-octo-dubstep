/**
 * Created by aprovis on 17/07/15.
 */

(function () {
    // Creating our Store module which will run the Gem Store/Shop
    var app = angular.module('store', []);

    // Creating our controller to handle sending gem information to our storefront.
    app.controller('StoreController', function () {
        this.products = gem;
    });

    // This controller manages the product panels
    app.controller("PanelController", function () {
       this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        // Checks if the tab is selected
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    // Created a variable to hold product information of a gem.
    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'It\'s a gem... a really shiny gem. What more could you want?',
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "Another really shiny gem but this one has 5 sides. Oh my.",
            canPurchase: false,
            soldOut: false
        }
    ];

})();