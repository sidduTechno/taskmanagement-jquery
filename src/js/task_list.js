/**
 * Created by sidhu on 20/6/14.
 */
var list = (function() {
    var template = Handlebars.compile($('#list-template').html());
    var renderList = function(val) {

        $('#panel').html(template(val));
    };
    return {
        render : renderList
    };

})();

$(function() {
   list.render(app.tasks);

    $('#taskList').on('click','a', function() {
       var id = parseInt($(this).attr('id'));
       var current = _.find(app.tasks, function(i) {
               return i.id === id;
           });
       app.setItem('updateValue',current);

    });


    $('#search').on('keyup', function() {
        var val = $(this).val(),
        filterData = _.filter(app.tasks, function(i){
            if( _.contains(i.summary, val) || _.contains(i.description, val))
              return i;
        });
        list.render(filterData);
    });
});