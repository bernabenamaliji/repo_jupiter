angular.module("listatelefonica").service("operadorasAPI", function($http, config){
    this.getoperadoras = function(){
        return $http.get(config.baseURL + '/operadoras.json');
    }
})