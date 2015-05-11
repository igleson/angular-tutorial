function controller($scope) {

    $scope.busca = {}
    $scope.busca.nome = ""

    $scope.model = {};
    $scope.model.ordem = "nome";
    $scope.pop = function (indice) {
        $scope.model.alunos.splice(indice, 1);
    }
    $scope.model.alunos = [
        {'nome': 'hugo silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafael sousa', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'iaron araujo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur costa', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'edval galdino', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'natalia amorim', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'emanoel oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'fabio junior', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel baia', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'luiz nascimen', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'pedro oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafael dantas', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafaela araujo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'andre lopes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur rodrigues', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ellen oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel dantas', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'hadrizia santos', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'henrique silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jaaziel moura', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'joao mafra', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'lucas santos', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'maria albuquerque', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'maria fernandes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ravi lopes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ronan souza', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'alberto figueiredo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'anderson palmeira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur leal', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'bruno farias', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'debora silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jose nunes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jose souza', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'juliana nobre', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'luiz fonseca', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'natan ribeiro', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'valgone bezerra', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'hugo silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafael sousa', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'iaron araujo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur costa', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'edval galdino', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'natalia amorim', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'emanoel oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'fabio junior', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel baia', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'luiz nascimen', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'pedro oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafael dantas', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'rafaela araujo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'andre lopes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur rodrigues', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ellen oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel dantas', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'hadrizia santos', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'henrique silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jaaziel moura', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'joao mafra', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'lucas santos', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'maria albuquerque', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'maria fernandes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ravi lopes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'ronan souza', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'alberto figueiredo', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'anderson palmeira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'arthur leal', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'bruno farias', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'debora silva', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'gabriel oliveira', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jose nunes', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'jose souza', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'juliana nobre', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'luiz fonseca', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'natan ribeiro', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()},
        {'nome': 'valgone bezerra', 'p_open': numero(), 'p_closed': numero(), 'lastsubmission': timestamp()}
    ];

    function numero() {
        return Math.floor(Math.random() * 100);
    }

    function timestamp() {
        return new Date(new Date() - Math.floor(Math.random() * 10000000000));
    }
}