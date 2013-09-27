$(".progressButton").live("click", function () {
    var progressBarId = "#" + $("#selectProgressBar").val();
    var progressBarCurrentWidth = parseInt($(progressBarId).prev("input").val());
    var progress = parseInt($(this).attr("progressValue"));
    var progressAdd = $(this).attr("progressAdd");
    var progressBarNewWidth = 0;    

    if (progressAdd == "true") {
        progressBarNewWidth = progressBarCurrentWidth + progress;
    }
    else {
        progressBarNewWidth = progressBarCurrentWidth - progress;
    }
    if (progressBarNewWidth > 0 && progressBarNewWidth <= 100) {
        $(progressBarId).removeClass("backGroundColorRed").addClass("backGroundColorBlue");
        $(progressBarId).css("width", progressBarNewWidth + "%");
    }
    else if (progressBarNewWidth > 100) {
        $(progressBarId).css("width", "100%");
        $(progressBarId).removeClass("backGroundColorBlue").addClass("backGroundColorRed");
    }
    else if (progressBarNewWidth <= 0) {
        $(progressBarId).css("width", 0);
        progressBarNewWidth = 0;
    }
    $(progressBarId).prev("input").val(progressBarNewWidth);
    $(progressBarId).parent(".outerDiv").next(".innerText").html(progressBarNewWidth + "%");
});