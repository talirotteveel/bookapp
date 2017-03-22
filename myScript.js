function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
 

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function(){
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.books= [
        {book: 'Head First Java', author: 'Kathy Sierra', subject: 'Java Programming' },
        {book: 'Design Patterns', author: 'Erich Gamma', subject: ''},
        {book: 'C++ Primer', author: 'Stanley B. Lippman', subject: 'C++'},
        {book: 'Python Pocket Reference', author: 'Mark Lutz', subject: 'Python'}     
      ];   
    $scope.name="Anonymous"
    $scope.topics=["AngularJs", "SQL", "React"];
    $scope.addTopic=function(){
        $scope.topics.push($scope.newTopic);
    }
  
    $scope.featuredTutorials=[
        {pic: 'img/codecademy.jpg', link: 'http://www.codeacademy.com', title: 'Code Academy'},
        {pic: 'img/codeavengers.jpg', link: 'http://www.codeavengers.com', title: 'Code Avengers'},
        {pic: 'img/codeschools.jpg', link: 'http://www.codeschool.com', title: 'CodeSchool'},
        {pic: 'img/treehouse.jpg', link: 'http://www.teamtreehouse.com', title: 'Treehouse'},
        {pic: 'img/udacity.jpg', link: 'http://www.udacity.com', title: 'Udacity'},
        {pic: 'img/codehs.jpg', link: 'http://www.codehs.com"', title: 'CodeHS'},
        {pic: 'img/khanacademy.jpg', link: 'http://www.khanacademy.com', title: 'KhanAcademy'},
        {pic: 'img/scratch.jpg', link: 'http://www.scratch.mit.edu', title: 'Scratch 2.0'},
        {pic: 'img/sqlzoo.jpg', link: 'http://www.sqlzoo.net', title: 'SQL Zoo'}
        ];
    $scope.programmingChannels=[
        {pic: 'img/thenewboston.jpg', link: 'http://www.thenewboston.com', title: 'The New Boston'},
        {pic: 'img/codeschool.jpg', link: 'http://www.youtube.com/channel/UClEEsT7DkdVO_fkrBw0OTrA', title: 'Code School'},
        {pic: 'img/programming.jpg', link: '//www.youtube.com/channel/UCiuG6UL4320d9X4JiQAg6Vg', title: 'Programming Tutorials'},
        {pic: 'img/mit.jpg', link: '//www.youtube.com/user/MIT/', title: 'MIT OpenCourseWare'},
        {pic: 'img/computerphile.jpg', link: 'https://www.youtube.com/user/Computerphile', title: 'Computerphile'}       
        ];
});





      


