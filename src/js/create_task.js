/*** Created by sidhu on 11/6/14. */
var CUI =(function() {
    var $summary = $('#summary'),
        $priority = $('#priority'),
        $dueDate = $('#dueDate'),
        $description = $('#description'),
        $originalEstimate = $('#originalEstimate');

        var getInputs  = function() {
            console.log($summary.val());
            var data = {};
                data.id = app.id();
                data.summary =  $summary.val();
                data.priority = $priority.val();
                data.dueDate = $dueDate.val();
                data.originalTime =$originalEstimate.val();
                data.description = $description.val() || 'no description available';
                $('#task input, textarea, select').val('');
            return data;
        };

        var createTask = function(e) {
            e.preventDefault();
            var values = getInputs();
            if(values.summary) {
                app.tasks.push(values);
                app.setItem('tasks', app.tasks);
            }
        };
        return {
          create : createTask
        };
})();

$(function() {
    $('#createBtn').on('click',CUI.create);
});