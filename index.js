$(document).ready(function(){
    const modeToggllBtn = $("#toggle-button");
let darkMode = false;
function modeToggler() {
    darkMode = !darkMode;
    if(darkMode) {
        $("body").addClass("light-mode")
        $("#container").addClass("light-mode")
        $("button").addClass("light-mode")
    }
    else {
        $("body").removeClass("light-mode")
        $("#container").removeClass("light-mode")
        $("button").removeClass("light-mode")
    }
} 
modeToggllBtn.on("click", modeToggler)
})