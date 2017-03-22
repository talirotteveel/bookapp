
$.getJSON("http://localhost:49856/Book/", function (data) {
    var items = [];
    $.each(data, function (index, book) {
        items.push("<li id='" + index + "'>" + book.bookId + "\t" + book.bookTitle + "\t written by: " + book.authorName +  "\t" + book.bookISBN + "</li>" );
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});
