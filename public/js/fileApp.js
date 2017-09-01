var app = angular.module('fileApp',['ngRoute','angularTrix','ngFileUpload']);
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
        })
        .when('/material',{
            templateUrl: 'material.html',
            controller: 'materialController'
        })
        .when('/materialItem',{
            templateUrl: 'materialItem.html',
            controller: 'materialItemController'
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


//上传入驻商家
app.controller('materialController',function($scope,Upload,$http,$timeout){

    $scope.submit = function() {
        var formData = new FormData();
        for(key in $scope.material){
            // console.log(key);
            // console.log($scope.material[key]);
            formData.append(key, $scope.material[key]);
        }
        var files = $('#material-file')[0].files;
        for(var i=0;i<files.length;i++){
            formData.append('vendor', files[i]);
        }
        $http.post('/material/create',formData,{
            tranformRequest : angular.identity,
            headers: {
                'Content-Type': undefined
            }
        })
    }
});


//上传入驻商家素材
app.controller('materialItemController', function($scope,$http){
    $scope.materialItem = {
        singleSelect : null,
        name : []
    }
    //获取供应商
    $http.get('/material',{
        tranformRequest : angular.identity,
        headers: {
            'Content-Type': undefined
        }
    }).then(function(res){
        res.data.map(data => $scope.materialItem.name.push(data.name))
    });
    //下拉菜单选项
    
    function getFile(input){
        let files = input.files
        for(let i=0;i<files.length;i++){
            return files[i];
        }
    }
    $scope.submit = function(){
        console.log($scope.blah)
        var formData = new FormData();
        formData.append('name',$scope.blah);
        for(key in $scope.materialItem){
            switch (key) {
                case 'firstCategory':
                    formData.append('firstCategory',getFile($('#materialItem-file-1')[0]));
                    break;
                case 'secondCategory':
                    formData.append('secondCategory',getFile($('#materialItem-file-2')[0]));
                    break;
                case 'thirdCategory':
                    formData.append('thirdCategory',getFile($('#materialItem-file-3')[0]));
                    break;
                case 'fourthCategory':
                    formData.append('fourthCategory',getFile($('#materialItem-file-4')[0]));
                    break;
                case 'fifthCategory':
                    formData.append('fifthCategory',getFile($('#materialItem-file-5')[0]));
                    break;
                case 'sixthCategory':
                    formData.append('sixthCategory',getFile($('#materialItem-file-6')[0]));
                    break;
                default:
                    break;
            }
        }
        $http.post('/')
    }
})