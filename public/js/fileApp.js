var app = angular.module('fileApp',['ngRoute','angularTrix']);
app.config(function($routeProvider){
    $routeProvider
        .when('/products',{
            templateUrl: 'product.html',
            controller: 'mainController'
        })
        .when('/allproducts',{
            templateUrl: 'allproducts.html',
            controller: 'querycontroller'
        })
        .when('/companys',{
            templateUrl: 'company.html',
            controller: 'companyController'
        })
        .when('/allcompanys',{
            templateUrl: 'allcompanys.html',
            controller: 'allCompanysController'
        });
});

// 上传公司产品
app.controller('mainController', function($scope,$http){
    $scope.submit = function(){
        var formData = new FormData();
        for(key in $scope.product){
            console.log($scope.product[key]);
            formData.append(key,$scope.product[key]);
        }
        var file = $('#product-file')[0].files;
        for (var i = 0; i < file.length; i++) {
            formData.append('images',file[i]);
        }
        $http.post('/products/create',formData,{
            tranformRequest : angular.identity,
			headers:{
				'Content-Type': undefined
			}
        })
             .then(function(res){
                 
             },function errorCallback(err){
                console.log(err);
             });        
    }
});




//上传公司
app.controller('companyController', function($scope,$http){
    $scope.submit = function(){
        var formData = new FormData();
        for(key in $scope.company){
            console.log($scope.company[key]);
            formData.append(key, $scope.company[key]);
        }
        var file = $('#company-file')[0].files[0];
        // console.log(file);
        formData.append('images',file);
        $http.post('/companys/create',formData,{
            tranformRequest : angular.identity,
            headers: {
                'Content-Type': undefined
            }
        })
        .then(function(res){

        })
    }
})