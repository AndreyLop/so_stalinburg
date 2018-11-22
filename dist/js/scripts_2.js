window.addEventListener('load', function() {

    var book = document.querySelector('.book');
    var nextPages = document.querySelectorAll('.nextPage');

    function loadChanper(chapNumbr) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'chapters/chapter_' + chapNumbr + '.html');
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
                book.innerHTML = xhr.responseText;
                addEventListenerToBtns();
            }
        };
    }

    if(nextPages.length !==0) {
        addEventListenerToBtns();
    }

    function addEventListenerToBtns() {
        var nextPages = document.querySelectorAll('.nextPage');

        nextPages.forEach(function(nextPage) {
            nextPage.addEventListener('click', loadPage);
        });

        function loadPage(e) {
            e.preventDefault();
            loadChanper(this.href.split('=')[1]);
            window.scroll(0, 0)
        };
    }

    


});