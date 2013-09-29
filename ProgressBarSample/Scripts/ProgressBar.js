var progressBarApp = angular.module('progressBarApp', []);

progressBarApp.controller('ProgressBarCtrl', ['$scope', function ($scope) {
    $scope.selectedProgressBar = "progressBar1";
    $scope.progressBarData = [{ "value": "progressBar1", "name": "Progress Bar 1", "width": 0, "displayWidth": 0, "class": "" },
							   { "value": "progressBar2", "name": "Progress Bar 2", "width": 0, "displayWidth": 0, "class": "" },
						       { "value": "progressBar3", "name": "Progress Bar 3", "width": 0, "displayWidth": 0, "class": "" }];

    $scope.changeProgress = function (progress, progressAdd) {

        angular.forEach($scope.progressBarData, function (attr) {
            if (attr.value === $scope.selectedProgressBar) {
                if (progressAdd) {
                    attr.displayWidth = attr.displayWidth + progress;
                }
                else {
                    attr.displayWidth = attr.displayWidth - progress;
                }

                if (attr.displayWidth > 0 && attr.displayWidth <= 100) {
                    attr.class = "backGroundColorBlue";
                    attr.width = attr.displayWidth
                }
                else if (attr.displayWidth > 100) {
                    attr.width = 100;
                    attr.class = "backGroundColorRed";
                }
                else if (attr.displayWidth <= 0) {
                    attr.width = attr.displayWidth = 0;
                    attr.class = "";
                }
            }
        });
    };

    $scope.widthStyle = function (item) {
        return {
            width: item.width + "%"
        };
    };
}]);