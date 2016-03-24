angular.module('app',[])
    .controller('helloWorldController', ['$scope', function($scope){
        
        $scope.message = "";
        
        $scope.hello = function(){
            
            $scope.message = "Hello World";
        }
        
    }]);

