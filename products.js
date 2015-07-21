/**
 * Created by aprovis on 21/07/15.
 */

(function() {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            // This controller manages the product panels
            controller: function () {
                this.tab = 1;

                // Sets the tab value/state
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                // Checks if the tab is selected
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();
