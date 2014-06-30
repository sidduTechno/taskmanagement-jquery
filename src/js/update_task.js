/**
 * Created by sidhu on 20/6/14.
 */
var UI = (function() {
    var $summary = $('#summary'),
        $priority = $('#priority'),
        $dueDate = $('#dueDate'),
        $description = $('#description'),
        $originalEstimate = $('#originalEstimate'),
        data = {},
        update = app.getItem('updateValue');

    var init = function() {
        $summary.val(update.summary);
        $priority.val(update.priority);
        $dueDate.val(update.dueDate);
        $originalEstimate.val(update.originalTime);
        $description.val(update.description);
    };
    var updateTask = function(e) {
        e.preventDefault();
        data.id = update.id;
        data.summary =  $summary.val(),
        data.priority =  $priority.val(),
        data.dueDate =  $dueDate.val(),
        data.originalTime =  $originalEstimate.val(),
        data.description =  $description.val();
        if(data.summary) {
            app.tasks[data.id] = data;
            app.setItem('tasks', app.tasks);
        }
        $('#task input, textarea, select').val('');
        app.setItem('updateValue',[]);
        window.location.href = 'index.html';
    };
    return {
        init : init ,
        update :updateTask
    };
})();

$(function() {
    UI.init();
    $('#updateBtn').on('click', UI.update);
});