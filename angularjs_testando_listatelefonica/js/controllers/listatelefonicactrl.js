angular.module("listatelefonica").controller("listatelefonicactrl",function($scope, contactosAPI, operadorasAPI, serialgenerator){
    $scope.app = "Lista Telefonica";
    $scope.contactos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contactosAPI.getcontactos().success(function (data) {
                $scope.contactos = data;
            })
            .error(function (data) {
                $scope.message = "Aconteceu um problema: " + data;
            });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getoperadoras().success(function (data) {
                $scope.operadoras = data;
            })
            .error(function (data) {
                $scope.message = "Aconteceu um problema: " + data;
            });
    };

    $scope.adicionarcontacto = function(contacto){
        contacto.data = new Date();
        contacto.serial = serialgenerator.generate();
        contactosAPI.savecontactos(contacto).success(function (data) {
                delete $scope.contacto;
                $scope.contactoform.$setPristine();
                carregarContatos();
            });
    };

    carregarContatos();
    carregarOperadoras();

    $scope.apagarcontacto = function(contactos){
        $scope.contactos = contactos.filter(function(contacto){
            if (!contacto.selecionado) return contacto;
        });
    };

    $scope.iscontactoselecionado = function(contactos){
        return contactos.some(function(contacto){
            return contacto.selecionado;
        });
    };

});