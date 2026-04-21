let container = document.getElementById("formContainer");
let bookingType = document.getElementById("bookingType");

bookingType.addEventListener("change", function(){
    container.innerHTML = "";

    let type = bookingType.value;

    // User Name
    let name = document.createElement("input");
    name.placeholder = "User Name";
    name.id = "name";

    // Mobile
    let mobile = document.createElement("input");
    mobile.placeholder = "Mobile Number";
    mobile.id = "mobile";

    // Email
    let email = document.createElement("input");
    email.placeholder = "Email";
    email.id = "email";

    // No of person
    let persons = document.createElement("input");
    persons.placeholder = "No of Persons";
    persons.type = "number";
    persons.id = "persons";

    // Date
    let date = document.createElement("input");
    date.type = "date";
    date.id = "date";

    // Time
    let time = document.createElement("input");
    time.type = "time";
    time.id = "time";

    // Slot
    let slot = document.createElement("select");
    slot.id = "slot";

    let opt1 = document.createElement("option"); opt1.text = "Breakfast";
    let opt2 = document.createElement("option"); opt2.text = "Lunch";
    let opt3 = document.createElement("option"); opt3.text = "Dinner";

    slot.appendChild(opt1);
    slot.appendChild(opt2);
    slot.appendChild(opt3);

    let submit = document.createElement("button");
    submit.innerText = "Book Now";

    submit.addEventListener("click", function(){
        alert("Booking Submitted Successfully!");
    });

    // Common fields
    container.appendChild(name);
    container.appendChild(mobile);
    container.appendChild(email);
    container.appendChild(persons);

    // FULL DAY
    if(type === "full"){
        container.appendChild(date);
    }

    // HALF DAY
    else if(type === "half"){
        container.appendChild(date);
        container.appendChild(slot);
    }

    // HOURLY
    else if(type === "hour"){
        container.appendChild(date);
        container.appendChild(time);
    }

    container.appendChild(submit);

});