(function (){
    const app = angular.module('mural');
    app.controller('ImcCtrl', function ImcCtrl(){
        const vm = this;
        vm.altura = 1.75;
        vm.peso = 63;
        vm.classificacao = "";
        vm.imc = function imc(){
                const result = (vm.peso / Math.pow(vm.altura,2)).toFixed(2); 
                if(result < 18.5) vm.classificacao = "Abaixo do peso";
                else if (result >= 18.5 && result <= 24.9) vm.classificacao = "Peso Normal";
                else if (result >= 25.0 && result <= 29.9) vm.classificacao = "Sobrepeso";
                else if (result >= 30.0 && result <= 34.9) vm.classificacao = "Obesidade grau 1";
                else if (result >= 35.0 && result <= 39.9) vm.classificacao = "Obesidade grau 2";
                else vm.classificacao = "Obesidade grau 3 ou mórbida";
                return result;
        };
    });
}());