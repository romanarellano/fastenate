

    function renderBox(app){
      
      var block = $("<div>",{"class":"blocks"});

      var image = $("<div>",{"class":"block_image"});

      var inline = $("<ul>",{"class":"publisher"});

      image.css("background-image","url('"+ app.url + "')");

      block.append(image);

   
      var subtitle = $("<h2>",{

        html :  app.title 

      });

        block.append(subtitle);



      var author = $("<li>",{


          html : "by " + app.author 

      });

        block.append(author);
      
      var views = $("<li>",{

        html: app.score + " views"

      });

      block.append(views);


       var paragraph = $("<p>",{

        html: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus saepe vitae impedit, temporibus aut possimus illo doloribus laudantium culpa, obcaecati libero ab harum, sed velit provident alias quaerat! Nulla, tempore!"
      
      });

       block.append(paragraph);

       block.css("display","inline");
        
        return block;

      }




$(document).ready(function(){

    


  $(".app").on("click", function(){
    
    $.getJSON("/api/get_the_app.json",function(wazup){
      var app = wazup.data.children[0].data;
      console.log(app);
    
      renderBox(app).appendTo($(".block_container"));
     


    //app.appendTo(block);

    // $.each(wazup,function(key,value){


       

    // });

      });
    });

});