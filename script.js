/***********************
 MOBILE NAVBAR TOGGLE
************************/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/***********************
 BOOKING FORM ALERT
************************/

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Your trip has been booked successfully! Have a wonderful journey.");

        bookingForm.reset();

    });
}


/***********************
 NEWSLETTER SUBSCRIPTION
************************/

const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        const email = document.querySelector(".newsletter input");

        if (email.value === "") {

            alert("Please enter your email address.");

        } else {

            alert("Thank you for subscribing to TravelGo!");

            email.value = "";

        }

    });

}


/***********************
 SEARCH DESTINATION
************************/

const searchButton = document.querySelector(".search-box button");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const destination = document
            .getElementById("searchInput")
            .value
            .trim();

        if (destination === "") {

            alert("Please enter a destination.");

            return;
        }

        // Save destination name
        localStorage.setItem("destination", destination);

        // Redirect
        window.location.href = "search-results.html";

    });

}


/***********************
 BOOK NOW BUTTONS
************************/

const bookButtons = document.querySelectorAll(".destination-card button");

bookButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("Redirecting to booking page...");

    });

});


/**************************
 DESTINATION DATA
**************************/

const destinationData = {

    japan: {
        image: "images/japan.jpeg",
        price: "Starting from ₹65,000",
        description: "Explore Tokyo, Mount Fuji, cherry blossoms, and Japanese culture."
    },

    bali: {
        image: "images/bali.jpg",
        price: "Starting from ₹25,000",
        description: "Enjoy beautiful beaches, temples, and luxury resorts in Bali."
    },

    dubai: {
        image: "images/dubai.jpeg",
        price: "Starting from ₹40,000",
        description: "Experience luxury shopping, desert safaris, and iconic skyscrapers."
    },

    goa: {
        image: "images/goa.jpeg",
        price: "Starting from ₹12,000",
        description: "Relax on Goa's stunning beaches and enjoy its vibrant nightlife."
    },

    "hong kong": {
        image: "images/hongkong.jpeg",
        price: "Starting from ₹48,000",
        description: "Discover amazing skylines, theme parks, and delicious cuisine."
    },

    malaysia: {
        image: "images/malaysia.jpeg",
        price: "Starting from ₹35,000",
        description: "Explore beautiful islands, rainforests, and modern cities."
    },

    maldives: {
        image: "images/maldives.jpeg",
        price: "Starting from ₹70,000",
        description: "Stay in luxurious overwater villas surrounded by crystal-clear waters."
    },

    paris: {
        image: "images/paris.jpeg",
        price: "Starting from ₹55,000",
        description: "Visit the Eiffel Tower and experience the romance of Paris."
    },

    singapore: {
        image: "images/singapore.jpeg",
        price: "Starting from ₹38,000",
        description: "Explore Marina Bay Sands, Gardens by the Bay, and Universal Studios."
    },

    switzerland: {
        image: "images/switzerland.jpeg",
        price: "Starting from ₹85,000",
        description: "Enjoy breathtaking mountain landscapes and scenic train rides."
    },

    vietnam: {
        image: "images/vietnam.jpeg",
        price: "Starting from ₹30,000",
        description: "Discover ancient temples, stunning bays, and vibrant street food culture."
    }

};


/**************************
 SEARCH RESULT PAGE
**************************/

const destinationTitle = document.getElementById("destinationTitle");

if (destinationTitle) {

    const searchedDestination = localStorage
        .getItem("destination")
        ?.toLowerCase()
        .trim();

    const destinationImage =
        document.getElementById("destinationImage");

    const destinationPrice =
        document.getElementById("destinationPrice");

    const destinationDescription =
        document.getElementById("destinationDescription");


    // Destination Found

    if (searchedDestination &&
        destinationData[searchedDestination]) {

        destinationTitle.textContent =
            searchedDestination.toUpperCase();

        destinationImage.src =
            destinationData[searchedDestination].image;

        destinationPrice.textContent =
            destinationData[searchedDestination].price;

        destinationDescription.textContent =
            destinationData[searchedDestination].description;

    }

    // Destination Not Found

    else {

        destinationTitle.textContent =
            "DESTINATION NOT FOUND";

        destinationImage.style.display = "none";

        destinationPrice.textContent = "";

        destinationDescription.textContent =
            "Sorry! We currently don't offer packages for this destination.";

    }

}

/**************************
 BOOK NOW BUTTON
**************************/

const bookNowBtn = document.getElementById("bookNowBtn");

if (bookNowBtn) {

    bookNowBtn.addEventListener("click", () => {

        window.location.href = "booking.html";

    });

}

/**************************
 DISPLAY BOOKING DESTINATION
**************************/

const selectedDestination =
    document.getElementById("selectedDestination");

if (selectedDestination) {

    const destination =
        localStorage.getItem("destination");

    selectedDestination.value = destination;

}

/**************************
 CONFIRM BOOKING
**************************/

const confirmBooking =
    document.getElementById("confirmBooking");

if (confirmBooking) {

    confirmBooking.addEventListener("click", () => {

        const bookingMessage =
            document.getElementById("bookingMessage");

        const destination =
            localStorage.getItem("destination");

        bookingMessage.innerHTML = `
        
        <h2>Booking Successful!</h2>
        
        <p>
        Your trip to <strong>${destination}</strong>
        has been booked successfully.
        </p>

        <p>
        Thank you for choosing TravelGo.
        Have a safe and memorable journey!
        </p>
        
        `;

    });

}