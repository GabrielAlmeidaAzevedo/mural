(function (){
    const app = angular.module('mural');
    app.controller('MensagensCtrl', function MensagensCtrl(Mensagens){
        const vm = this;
        vm.mensagens = Mensagens.mensagens;
    });
}());
