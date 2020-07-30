angular.module("listatelefonica").factory("contactosAPI", function ($http, config) {
    var _getcontactos = function(){
        return $http.get(config.baseURL + '/contactos.json');
    };
    var _savecontactos = function(contacto){
        return $http.post(config.baseURL + '/reenviar.php', contacto);
    };
    return {
        getcontactos: _getcontactos,
        savecontactos: _savecontactos
    }
});