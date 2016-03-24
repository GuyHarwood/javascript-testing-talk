angular.module('app',[])
    .controller('HelloWorldController', ['$scope', function($scope){
        
        $scope.hello = function(){
            
            return "Yo World";
        }
        
    }]);

