// get a reference to the firebase database
var database = firebase.database();

function formSubmit(event) {

    var contact = document.getElementById('contact');
    var order = document.getElementById('order');
    var first_name = contact.first_name.value;
    var last_name = contact.last_name.value;
    var email = contact.email.value;
    var phone = contact.phone.value;
    var message = contact.message.value;
    var size = order.size.value;
    var topping = order.topping.value;

    // form validation
    var key = database.ref().child('contact').push().key;

    // the key is the appended to our database reference and set
    database.ref('contact/' + key).set({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        message: message,
        size: size,
        topping: topping

    })
}

function main() {

    console.log("in main function");
    
    var myForm = document.getElementById("contact");
    myForm.addEventListener("submit",validateForm);

    // start clock 

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
    // end clock
    
    function isMornAft(curr_hour) {
        // create 12 hour clock - with am and pm
        if (curr_hour >= 12 && curr_hour < 24) {
            return "pm";
        }
        else {
            return "am"
        }
    }
    


    // onload callback function
    console.log("in main function");


    // validate callback function
    function validateForm(event) {
        console.log("validating form");
        var formValidation = true;
        var myForm = document.getElementById("contact");
        var order = document.getElementById("order");

        if (myForm.first_name.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorFirst_name").style;
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("errorFirst_name").style.display = "none";

        }

        if (myForm.last_name.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorLast_name").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            formValidation = true;
            document.getElementById("errorLast_name").style.display = "none";

        }


        if (myForm.email.value == "") {
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


        if (myForm.message.value == "") {
            formValidation = false;
            // display error
            document.getElementById("errorMessage").style.display = "block";
            // stop form from submitting
            event.preventDefault();
        }

        else {
            document.getElementById("errorMessage").style.display = "none";

        }

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

        var myForm = document.getElementById("contact");
        myForm.addEventListener("submit", validateForm);
    
        var order = document.getElementById("order");
        order.addEventListener("submit", validateForm);
    }

    // create slideshow variable
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
}