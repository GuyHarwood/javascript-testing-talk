
describe('helloWorldController', function(){
    
    beforeEach(module('app'));
    
    var $scope, sut, $controllerFactory;
    
    beforeEach(inject(function(_$controller_){
        $controllerFactory = _$controller_
        $scope = {};
        sut = $controllerFactory('helloWorldController', { $scope : $scope });
    }))
    
    it('should return hello world', function(){
        
        $scope.hello();
        
        expect($scope.message).toBe('Hello World');
        
    })
    
})