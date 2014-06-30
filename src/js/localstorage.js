/**
 * Created by sidhu on 19/6/14.
 */
var app = (function() {
    var setItem = function(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    };

    var getItem = function(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    };

    var tasks = getItem('tasks') || [];

    var id = function(){
        return tasks.length;
    };

    return {
        tasks : tasks,
        id : id,
        setItem : setItem,
        getItem : getItem
    };
})();

