var app = angular.module('fileApp',[]);
app.controller('mainController', function($scope,$http){
    $scope.submit = function(){
        var formData = new FormData();
        for(key in $scope.product){
            // console.log($scope.product[key]);
            formData.append(key,$scope.product[key]);
        }
        var file = $('#file')[0].files[0];
        formData.append('image',file);
        $http.post('/posts',formData,{
            tranformRequest : angular.identity,
			headers:{
				'Content-Type': undefined
			}
        })
             .then(function(res){
                $scope.item = res.data;
             },function errorCallback(err){
                console.log(err);
             });        
    }
})