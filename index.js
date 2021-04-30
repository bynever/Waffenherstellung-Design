$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://gvrp_gusenberg/exit', JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('http://gvrp_gusenberg/exit', JSON.stringify({}));
        return
    })
    
    $("#mieten").click(function(){
        $.post('http://gvrp_gusenberg/kaufen', JSON.stringify({}));
        return
    })
})
