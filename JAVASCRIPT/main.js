// get a reference to the firebase database
var database = firebase.database();

function formSubmit(event) {

    event.preventDefault();
    var contactform = document.getElementById('contactform');
    var order = document.getElementById('order');
    var userFname = contactform.userFname.value;
    var userLname = contactform.userLname.value;
    var userEmail = contactform.userEmail.value;
    var userPhone = contactform.userPhone.value;
    var userMessage = contactform.userMessage.value;

    // form validation
    var key = database.ref().child('contactform').push().key;

    // the key is the appended to our database reference and set
    database.ref('contactform/' + key).set({
        userFname: userFname,
        userLname: userLname,
        userEmail: userEmail,
        userPhone: userPhone,
        userMessage: userMessage
    })
}

function main() {

    // set up a new date object
    var today = new Date();
    // extract the year, month, day, hour, minutes and seconds and store them in a variable
    var date = today.getDate();
    var curr_year = today.getFullYear();
    var curr_month = today.getMonth();
    // create an arrary for days and months
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December');
    var curr_day = today.getDay();
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    var ampm = isMornAft(curr_hour);

    var cur_time = '' + days[curr_day] + ' ' + months[curr_month] + ' ' + date + ' ' + curr_year + ' ' + curr_hour + ":" + curr_minute + ":" + curr_second + ampm;
    console.log(cur_time);
    // insert id into p element with the div id - clock
    document.getElementById('clock').innerHTML = cur_time;

    setTimeout(main, 500);
    main();

    function checkTime(i) {
        // add zeros in front of single digit numbers
        if (i < 10) { i = "0" + i }
        return i;
    }

    function isMornAft(curr_hour) {
        // create 12 hour clock - with am and pm
        if (curr_hour >= 12 && curr_hour < 24) {
            return "pm";
        }
        else {
            return "am"
        }
    }
    }


    // onload callback function
    console.log("in main function");

    var myForm = document.getElementById("contactform");
    myForm.addEventListener("submit", validateForm);

    var order = document.getElementById("order");
    order.addEventListener("submit", validateForm);

    // validate callback function
    function validateForm(event) {
        event.preventDefault();
        console.log("validating form");
        var formValidation = true;
        var myForm = document.getElementById("contactform");
        var order = document.getElementById("order");
        event.preventDefault();

        if (order.size.value == "") {
            formValidation = false;
            //display error 
            document.getElementById("size").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("size").style.display = "none";

        }
        if (order.topping.value == "") {
            formValidation = false;
            //display error 
            document.getElementById("topping").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("topping").style.display = "none";

        }

        if (myForm.userFname.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorName").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("errorName").style.display = "none";

        }

        if (myForm.userLname.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorName").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("errorName").style.display = "none";

        }


        if (myForm.userEmail.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorEmail").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("errorEmail").style.display = "none";

        }


        if (myForm.userMessage.value == "") {
            formValidation = false;
            // display error
            document.getElementById("erroMessage").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            document.getElementById("errorMessage").style.display = "none";

        }

    }


    // create slideshow variabl
    var indexSlideshow = 0; {
        imagecarousel();

    }

    function imagecarousel() {
        var i;
        // call images in html
        var slide = document.getElementsByClassName("slide");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        indexSlideshow++;
        if (indexSlideshow > slide.length) { indexSlideshow = 1 }
        slide[indexSlideshow - 1].style.display = "block";
        // set image change to 3 seconds
        setTimeout(imagecarousel, 3000);
    }
    