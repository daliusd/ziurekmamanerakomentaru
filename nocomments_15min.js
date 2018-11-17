(function() {
    function removeComments() {
        for (let commentSelector of ['a.vector-comments-small', 'a.btn-comments', 'a.comments-link']) {
            let comments = document.querySelectorAll(commentSelector);
            for (let comment of comments) {
                comment.remove();
            }
        }
    }

    removeComments();

    setInterval(removeComments, 5000);
})();
