(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();

    // TODO: Call a function to load (AKA 'request') our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
    $.ajax({ url: 'https://api.github.com/users/jeff-eng/repos' + '?per_page=5&sort=updated',
        type: 'GET',
        headers: {'Authorization': 'token ' + githubToken},
        success: function (data, message, chr) {
          console.log(data);
        }
      });
  };

  module.aboutController = aboutController;
})(window);
