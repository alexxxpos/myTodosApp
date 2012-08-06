$(function(){


    Project = Backbone.Model.extend({
    	defaults: {
            title: ''
        },

        initialize: function(){

            //alert("Welcome to this world");

            this.bind("change:title", function(){
                var title = this.get("title"); // 'Stewie Griffin'
                alert("Changed my name to " + title );
            });


            this.bind("error", function(model, error){
                // We have received an error, log it, alert it or forget it :)
                alert( error );
            });

        },


        validate: function( attributes ){
            if( attributes.title == "" ){
                return "Enter title!";
            }
        }

    });

   // project = new Project();
   // project.set({ title: "Dr Manhatten"});




    SearchView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( $("#search_template").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        }
    });
    
    var search_view = new SearchView({ el: $("#search_container") });







});