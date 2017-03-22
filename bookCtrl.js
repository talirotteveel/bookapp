$.getJSON("http://localhost:49856/Book/", function (data) {
    var items = [];
    $.each(data, function (index, book) {
        items.push(book.bookId + book.bookTitle + book.authorName + book.bookISBN);
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});
