angular.module("listatelefonica").provider("serialgenerator", function(){
    var _length = 10;
    this.getlength = function(){
        return _length;
    }
    this.setlength = function(length){
        _length = length;
    }
    this.$get = function(){
        return{
            generate: function(){
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) +32);                    
                }
                return serial;
            }
        }
        
    }
})