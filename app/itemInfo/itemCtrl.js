(function() {
  function itemCtrl($scope, $stateParams, itemDb) {
        var itemId = $stateParams.itemId
        
        $scope.item = itemDb.getItemById(itemId)[0];
    
    
  }

  angular
    .module('unwind')
    .controller('itemCtrl', itemCtrl);
})();

// app.controller('PostsCtrl',[
//   '$scope',
//   '$stateParams',
//   'posts',
//   function($scope, $stateParams, posts){
//     $scope.post = posts.posts[$stateParams.id];
    
//     $scope.incrementUpvotes = function(comment) {
//       comment.upvotes += 1;
//     };
    
//     $scope.addComment = function(){
//       if($scope.body === '') {return; }
//       $scope.post.comments.push({
//         body: $scope.body,
//         author: 'user',
//         upvotes: 0
//       });
//       $scope.body = '';
//     };
    
    
//   }]);