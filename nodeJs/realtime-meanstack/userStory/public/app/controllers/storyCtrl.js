/**
 * Created by MSI on 29-Apr-16.
 */
angular.module('storyCtrl', [])
    .controller('StoryController', function (Story) {
        var vm = this;

        Story.getAllStory()
            .success(function (data) {
                console.log(data);
                vm.stories = data;
            })
            .error(function (err) {
                console.log("Error getAllStory : " + err);
            });

        vm.createStory = function () {
            vm.message = '';
            Story.createStory(vm.storyData)
                .success(function (data) {
                    console.log(data);
                    //clear up the form
                    vm.storyData = '';
                    vm.message = data.message;
                    vm.stories.push(data.story);
                });
        };
    });