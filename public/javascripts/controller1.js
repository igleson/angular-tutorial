function controller($scope) {
    $scope.model = {};

    $scope.hello = function () {
        alert("igleson")
        alert("Hello " + $scope.model.user)
    }
}
