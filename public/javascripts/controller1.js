function controller($scope) {
    $scope.model = {};

    $scope.hello = function () {
        alert("Hello " + $scope.model.user)
    }
}