var app = angular.module('fileApp',['ngRoute','angularTrix','ngFileUpload','ngResource']);
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
        .when('/allmaterials',{
            templateUrl: 'allmaterials.html',
            controller: 'allmaterialsController'
        });
        // .when('/materialItem',{
        //     templateUrl: 'materialItem.html',
        //     controller: 'materialItemController'
        // });

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
            console.log(key);
            console.log($scope.material[key]);
            formData.append(key, $scope.material[key]);
        }
        for(key in $scope.material){
            switch (key) {
                case 'firstCategory':
                    let files_1 = $('#materialItem-file-1')[0].files;
                    for(let i=0;i<files_1.length;i++){
                        formData.append('firstCategory',files_1[i]);
                    }
                    //formData.append('firstCategory',getFile($('#materialItem-file-1')[0]));
                    break;
                case 'secondCategory':
                    let files_2 = $('#materialItem-file-2')[0].files;
                    for(let i=0;i<files_2.length;i++){
                        formData.append('secondCategory',files_2[i]);
                    }
                    //formData.append('secondCategory',getFile($('#materialItem-file-2')[0]));
                    break;
                case 'thirdCategory':
                    let files_3 = $('#materialItem-file-3')[0].files;
                    for(let i=0;i<files_3.length;i++){
                        formData.append('thirdCategory',files_3[i]);
                    }
                    //formData.append('thirdCategory',getFile($('#materialItem-file-3')[0]));
                    break;
                case 'fourthCategory':
                    let files_4 = $('#materialItem-file-4')[0].files;
                    for(let i=0;i<files_4.length;i++){
                        formData.append('fourthCategory',files_4[i]);
                    }
                    //formData.append('fourthCategory',getFile($('#materialItem-file-4')[0]));
                    break;
                case 'fifthCategory':
                    let files_5 = $('#materialItem-file-5')[0].files;
                    for(let i=0;i<files_5.length;i++){
                        formData.append('fifthCategory',files_5[i]);
                    }
                    //formData.append('fifthCategory',getFile($('#materialItem-file-5')[0]));
                    break;
                case 'sixthCategory':
                    let files_6 = $('#materialItem-file-6')[0].files;
                    for(let i=0;i<files_6.length;i++){
                        formData.append('sixthCategory',files_6[i]);
                    }
                    //formData.append('sixthCategory',getFile($('#materialItem-file-6')[0]));
                    break;
                default:
                    break;
            }
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
        }).then(function success(){
            console.log({"message": "success"});
        },function error(err){
            console.error("error");
        })
    }
});


app.controller('allmaterialsController',['$scope','$resource','$http',function($scope,$resource,$http){
    var Posts = $resource('http://localhost:8888/material');
    Posts.query(function(posts){
        // console.log(posts);
        $scope.posts = posts;
        
        $scope.pageSize = 4;
        $scope.pages = Math.ceil($scope.posts.length / $scope.pageSize);
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        $scope.setData = function(){
            $scope.items =  $scope.posts.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));
        }
        $scope.items = $scope.posts.slice(0,$scope.pageSize);
         for (var i = 0; i < $scope.newPages; i++) {
                $scope.pageList.push(i + 1);
            }
          //打印当前选中页索引
        $scope.selectPage = function (page) {
            //不能小于1大于最大
            if (page < 1 || page > $scope.pages) return;
            //最多显示分页数5
            if (page > 2) {
                //因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
                    newpageList.push(i + 1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("选择的页：" + page);
        };
        //设置当前选中页样式
        $scope.isActivePage = function (page) {
            return $scope.selPage == page;
        };
        //上一页
        $scope.Previous = function () {
            $scope.selectPage($scope.selPage - 1);
        }
        //下一页
        $scope.Next = function () {
            $scope.selectPage($scope.selPage + 1);
        };

        // console.log($scope.items);
        
        $scope.delete = function(post){
            console.log(post);
            $scope.items.splice($scope.items.indexOf(post),1);
            $http({
                method : 'DELETE',
                url :'/material/' + post._id
            }).then(function success(){
                console.log({"message": "success"});
            },function error(err){
                console.error(err);
            })
        }
    });
}]);

// //上传入驻商家素材
// app.controller('materialItemController', function($scope,$http){
//     $scope.materialItem = {
//         singleSelect : null,
//         name : []
//     }
//     //获取供应商
//     $http.get('/material',{
//         tranformRequest : angular.identity,
//         headers: {
//             'Content-Type': undefined
//         }
//     }).then(function(res){
//         res.data.map(data => $scope.materialItem.name.push(data.name))
//     });
//     //下拉菜单选项
    
//     $scope.submit = function(){
//         var formData = new FormData();
//         console.log($scope.blah);
//         formData.append('name',$scope.blah);
//         for(key in $scope.materialItem){
//             switch (key) {
//                 case 'firstCategory':
//                     let files_1 = $('#materialItem-file-1')[0].files;
//                     for(let i=0;i<files_1.length;i++){
//                         formData.append('firstCategory',files_1[i]);
//                     }
//                     //formData.append('firstCategory',getFile($('#materialItem-file-1')[0]));
//                     break;
//                 case 'secondCategory':
//                     let files_2 = $('#materialItem-file-2')[0].files;
//                     for(let i=0;i<files_2.length;i++){
//                         formData.append('secondCategory',files_2[i]);
//                     }
//                     //formData.append('secondCategory',getFile($('#materialItem-file-2')[0]));
//                     break;
//                 case 'thirdCategory':
//                     let files_3 = $('#materialItem-file-3')[0].files;
//                     for(let i=0;i<files_3.length;i++){
//                         formData.append('secondCategory',files_3[i]);
//                     }
//                     //formData.append('thirdCategory',getFile($('#materialItem-file-3')[0]));
//                     break;
//                 case 'fourthCategory':
//                     let files_4 = $('#materialItem-file-4')[0].files;
//                     for(let i=0;i<files_4.length;i++){
//                         formData.append('secondCategory',files_4[i]);
//                     }
//                     //formData.append('fourthCategory',getFile($('#materialItem-file-4')[0]));
//                     break;
//                 case 'fifthCategory':
//                     let files_5 = $('#materialItem-file-5')[0].files;
//                     for(let i=0;i<files_5.length;i++){
//                         formData.append('secondCategory',files_5[i]);
//                     }
//                     //formData.append('fifthCategory',getFile($('#materialItem-file-5')[0]));
//                     break;
//                 case 'sixthCategory':
//                     let files_6 = $('#materialItem-file-6')[0].files;
//                     for(let i=0;i<files_6.length;i++){
//                         formData.append('secondCategory',files_6[i]);
//                     }
//                     //formData.append('sixthCategory',getFile($('#materialItem-file-6')[0]));
//                     break;
//                 default:
//                     break;
//             }
//         }
//         $http.post('/material/createItem',formData,{
//             tranformRequest : angular.identity,
//             headers: {
//                 'Content-Type': undefined
//             }
//         })
//     }
// })