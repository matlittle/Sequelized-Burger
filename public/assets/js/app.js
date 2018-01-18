$(document).on("click", ".del-btn", function(e) {
    $.ajax({
        url: `api/devour/${$(this).attr("data-id")}`,
        method: "PUT"
    }).then(data => {
        location.reload(true);
    });
});

$(document).on("click", "#submit-btn", function(e) {
    const burger = {
        name: $("#burger-input").val().trim()
    }

    $.post(`api/new`, burger, (data) => {
        location.reload(true);
    });
});
