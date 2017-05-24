export default ngModule => {

    
    if (ON_TEST) {
        require('./kcd-hello.test')(ngModule);
    }

    //using ng-annotate ;pader, allowing minification wihout annotaing dependancy injection
    //such as ngModule.directive('kcdHello', ['$log', function($log){...}]
    ngModule.directive('kcdHello', ($log) => {
        require('./kcd-hello.styl');
        return {
            restrict: 'E',
            scope: {},
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.greeting = 'Hello Webpack';
                $log.info('I have some info');
            }
        };
    });
};
