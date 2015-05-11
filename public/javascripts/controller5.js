app = angular.module("ExemploApp", []);

app.controller("controller", controller);

app.service("AlunosService", AlunosService);

function AlunosService($http) {
    this.getAlunos = function () {
        return $http.get('/alunos')
    }
}

function controller($scope, AlunosService) {

    $scope.busca = {}

    $scope.busca.nome = ""

    $scope.model = {};

    $scope.model.ordem= "nome"
    $scope.model.message = "Por favor aguarde, baixando dados dos alunos"
    $scope.pop = function (indice) {
        $scope.model.alunos.splice(indice, 1);
    }
    $scope.model.alunos = []

    AlunosService.getAlunos().
        success(function (data, status, headers, config) {
            $scope.model.alunos = data
            $scope.model.message = "Não há alunos para exibir"
        }).
        error(function (data, status, headers, config) {
            $scope.model.message = "Houve um erro ao baixar os dados dos alunos"
        })

    //$timeout(function () {
    //        AlunosService.getAlunos().
    //            success(function (data, status, headers, config) {
    //                $scope.model.alunos = data
    //            }).
    //            error(function (data, status, headers, config) {
    //                $scope.model.message = "Houve um erro ao baixar os dados dos alunos"
    //            })
    //    },
    //    5000
    //)
}