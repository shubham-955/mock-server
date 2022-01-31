refresh();
function refresh() {
    fetch('http://localhost:3004/Books')
        .then(response =>
            response.json()
        )  // convert to json
        .then(json =>
            appendTodo(json)
        )    //print data to console
        .catch(err =>
            console.log('Request Failed', err)
        ); // Catch errors
}

function appendTodo(cart) {
    console.log(cart)
    cart.forEach(function (el) {
        let div = document.createElement('div')
        let title = document.createElement('p1')
        let author = document.createElement('p2')
        let comments = document.createElement('p3')
        let div1 = document.createElement('div1')
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        title.innerText = "Title : " + el.book;
        author.innerText = "Author : " + el.author;
        comments.innerText = "Comments : " + el.comments;
        button1.innerText = "Delete";
        button2.innerText = "Edit";
        div1.append(button1, button2);
        div.append(title, author, comments, div1)
        card.append(div)
        button1.onclick = function () { onDelete(el) };
        button2.onclick = function () { onEdit(el) };
    })
}

function onFocus() {
    document.getElementById('error-title').innerHTML = '';
    document.getElementById('error-author').innerHTML = '';
    document.getElementById('error-comments').innerHTML = '';
}

function onSubmit() {
    event.preventDefault();
    let a = document.getElementById('book-title').value;
    let b = document.getElementById('book-author').value;
    let c = document.getElementById('book-comments').value;
    let _data = {
        "book": a,
        "author": b,
        "comments": c
    };
    if (a.length === 0) {
        document.getElementById('error-title').innerHTML = 'Please enter the title';
        return;
    }
    if (b.length === 0) {
        document.getElementById('error-title').innerHTML = 'Please enter the author';
        return;
    }
    if (c.length === 0) {
        document.getElementById('error-title').innerHTML = 'Please enter the comments';
        return;
    }
    fetch("http://localhost:3004/Books", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) =>
            response.json()
        )
        .then((json) =>
            console.log(json)
            // refresh()
        )
        .catch((err) =>
            console.log(err)
        );
}

function onDelete(item) {
    console.log(item.id)
    fetch(`http://localhost:3004/Books/${item.id}`, {
        method: "DELETE",
        // body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) =>
            response.json()
        )
        .then((json) =>
            console.log(json)
            // refresh()
        )
        .catch((err) =>
            console.log(err)
        );
}

function onEdit(item) {
    console.log(item);
}