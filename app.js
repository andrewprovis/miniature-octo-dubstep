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

        // Sets the tab value/state
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        // Checks if the tab is selected
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    // Controller to manage the review form
    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            // Pushes 'review' into this products 'reviews' array.
            product.reviews.push(this.review);

            // Clears form and empties live preview
            this.review = {};
        };
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        }
    });

    // Created a variable to hold product information of a gem.
    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'It\'s a gem... a really shiny gem. What more could you want?',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!',
                    author: 'joe@bloggs.com'
                },
                {
                    stars: 1,
                    body: 'This product sucks',
                    author: 'tim@hater.com'
                }
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "Another really shiny gem but this one has 5 sides. Oh my.",
            canPurchase: false,
            soldOut: false,
            reviews: [
                {
                    stars: 1,
                    body: 'This product sucks',
                    author: 'tim@hater.com'
                },
                {
                    stars: 3,
                    body: 'I\'s alright but not the best.',
                    author: 'joe@bloggs.com'
                }
            ]
        }
    ];

})();