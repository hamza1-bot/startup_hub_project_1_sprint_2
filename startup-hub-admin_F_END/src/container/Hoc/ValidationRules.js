import $ from 'jquery';

export default function validation() {
	$(".for_username").bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9._@]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });
	$(".for_name").bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z .]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });
	$(".for_alpha_numeric_space").bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9 _-]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });
    $(".for_alpha_numeric").bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });

    $(".for_characters_only").bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });

    $(".for_numeric").bind('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });

    $(".for_float").bind('keypress', function (event) {
        var regex = new RegExp("^[0-9.]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(key) == false && event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46 && event.keyCode != 35 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 39) {
            event.preventDefault();
            return false;
        }
    });

}