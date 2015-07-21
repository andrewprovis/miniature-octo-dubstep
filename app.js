/**
 * Created by aprovis on 17/07/15.
 */

(function () {
    // Creating our Store module which will run the Gem Store/Shop
    var app = angular.module('store', ['store-products']);

    // Creating our controller to handle sending gem information to our storefront.
    app.controller('StoreController', ['$http', function ($http) {

            var store = this;

            store.products = [];

            $http.get('products.json').success(function(data) {
                store.products = data;
            });
        }]
    );

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
})();