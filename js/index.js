"use strict";
$("#home").click(function pageRedirect() {
    window.location.href =  "/";
});

$("#project").click(function(){
    $("main").children().remove();
    $("main").append("<div class=\"row\">" +
        "<div class=\"col\"></div>" +
        "<div class=\"col-6 blk-border mt-3\">\n" +
        "    <h4 class=\"text-center\">Project List</h4>\n" +
        "<ul>\n" +
        "<li><a href=\"ajax-blog.html\" target=\"_blank\">Ajax: \"Blog Site\"</a></li>\n" +
        "<li><a href=\"weather_map.html\" target=\"_blank\">API: \"Weather Map\"</a></li>\n" +
        "<li><a href=\"order-pizza.html\" target=\"_blank\">Bootstrap: \"Pizza Order Form\"</a></li>\n" +
        "<li><a href=\"jquery_faq.html\" target=\"_blank\">DOM EventListeners: \"National Park FAQ Page\"</a></li>\n" +
        "<li><a href=\"konami-experiment-file.html\" target=\"_blank\">jQuery: \"Konami Code Example\"</a></li>\n" +
        "<li><a href=\"twitter.html\" target=\"_blank\">HTML & CSS: \"Twitter Example\"</a></li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "<div class=\"col\"></div>" +
        "</div>\n" +
        "<hr> ");
});


$("#contact").click(function(){
    $("main").children().remove();
    $("main").append("<div class=\"row mr-0\">\n" +
        "    <div class=\"col-4 border-box mt-3\">\n" +
        "    <img src=\"images/Alois_Renggli.jpg\" alt=\"\" class=\"mx-auto w-100 blk-border p-0\">\n" +
        "    </div>\n" +
        "    <div class=\"col mt-3\">\n" +
        "    <h4 class=\"m-0\">\n" +
        "    Contact Information:\n" +
        "    </h4>\n" +
        "<p class=\"m-0\">\n" +
        "    Location: San Antonio, TX\n" +
        "</p>\n" +
        "<p class=\"m-0 \">\n" +
        "<a href=\"https://www.linkedin.com/in/alois-renggli-9075378a\" target=\"_blank\" class=\"mr-2 align-middle\"><i class=\"fab fa-linkedin fa-2x linkedin mr-1\"></i> linkedin.com/in/alois-renggli-9075378a</a>\n" +
        "</p>\n" +
        "<p class=\"m-0 \">\n" +
        "<a href=\"https://github.com/alois-renggli\" target=\"_blank\" class=\"mr-2 align-middle\"><i class=\"fab fa-github fa-2x text-dark mr-1\"></i> github.com/alois-renggli</a>\n" +
        "</p>\n" +
        "<div class=\"col\"></div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<hr>");
});


