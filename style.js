const WHATSAPP_NUMBER = "919785770641";


/* ORDER WEBSITE */

function orderWebsite(websiteType) {

    const message =
        "Hello Himanshi Web Services,%0A%0A" +

        "I want to order:%0A" +

        encodeURIComponent(websiteType) +

        "%0A%0A" +

        "Please send me complete details and price.";

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* CONTACT */

function contactUs() {

    const message =
        "Hello Himanshi Web Services,%0A%0A" +

        "I am interested in creating a website.%0A" +

        "Please send me details.";

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );
}
