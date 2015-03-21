$(function () {
  

  
  // when "My Boards" is clicked
  // create an xhr get request to /api/my_boards.json
  $('#boards').click(function () {
    get('/api/my_boards.json');
  });


  // when "Random" is clicked
  // create an xhr get request to /api/random.json
  $('#random').click(function () {
    get('/api/random.json');
  });


  
  // create an xhr get request to /api/get_the_app.json
  $('#app').click(function () {
    get('/api/get_the_app.json');
  });

});

function get(url) {
  $.getJSON (
    url,
    function(wazup) {
       $(".content_wrapper").empty();

      for(var i = 0; i < wazup.data.children.length; i++) {
      var new_box = renderBox(wazup.data.children[i].data);
      $(".content_wrapper").append(new_box);
      }
    }
  );
}

function renderBox (article_data) {
 
  var box = $("<div>", { "class" : "box"});

  // create the image div
  var image = $("<div>", {"class" : "image"});
  // set its background image to article_data.url
  image.css ("background-image", "url('"+ article_data.url +"')");
  // add the image to the box (append adds image to the end of the box div)
  box.append(image);

  // create the tagline, and add the article_data.title to it
  var subtitle = $("<h2>",
  {
    
    html : article_data.title,
   

  });
  // add tagline to the box
  box.append(subtitle);

  // create ul
  var ul = $("<ul>");

  // create by_line li
  var by_line = $("<li>", 
  {
  
    html : article_data.author
  });
  // add by_line to ul
  ul.append(by_line);

    // create time_ago li
  var time_ago = $("<li>", 
  {
    
    html : moment.unix(article_data.created).fromNow()
  });

  ul.append(time_ago);

  var views = $("<li>", 
  
  {
    
    html : article_data.score + " views"
  });
  // add views to ul
  ul.append(views);

  
  box.append(ul);

  // hardcode two lines of lorem ipsum to description
  var description = $("<p>",
  {
   
    html : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptas, laboriosam veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptas, laboriosam veniam."
  });
  // add description to box
  box.append(description);


  return box;

}
