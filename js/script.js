/* Version jQuery */

$(function(){
    $( ".toggle-sidebar" ).click(function() {
        $( "#sidebar" ).toggleClass( "d-none" );
        $( "#maincontent" ).toggleClass( "col-md-10 offset-md-2" ).toggleClass( "col-md-12" );
    });

    
 
 });

 $(document).ready(function() {
    jQuery('.fadeOutOnload').fadeOut('slow').addClass('d-none');
    //$('.fadeInOnload').show('normal');
    /*$('div').removeClass('hidden');
    $('div').fadeIn(1000);*/
});

  
/* Version javascript */
/*
// Need some refactoring
document.querySelector(".toggle-sidebar").addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var maincontent = document.getElementById("maincontent");
    var myClass = "";


    if (sidebar.classList) {
        sidebar.classList.toggle("d-none");
    } else {
        // For IE9
        var classes = sidebar.className.split(" ");
        var i = classes.indexOf("d-none");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("d-none");
            sidebar.className = classes.join(" ");
    }


    myClass="offset-md-2"

    if (maincontent.classList) {
        maincontent.classList.toggle(myClass);
    } else {
        // For IE9
        var classes = sidebar.className.split(" ");
        var i = classes.indexOf(myClass);

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push(myClass);
            sidebar.className = classes.join(" ");
    }

    myClass="col-md-10"

    if (maincontent.classList) {
        maincontent.classList.toggle(myClass);
    } else {
        // For IE9
        var classes = sidebar.className.split(" ");
        var i = classes.indexOf(myClass);

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push(myClass);
            sidebar.className = classes.join(" ");
    }

    myClass="col-md-12"

    if (maincontent.classList) {
        maincontent.classList.toggle(myClass);
    } else {
        // For IE9
        var classes = sidebar.className.split(" ");
        var i = classes.indexOf(myClass);

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push(myClass);
            sidebar.className = classes.join(" ");
    }


    event.preventDefault();
}, false);
*/