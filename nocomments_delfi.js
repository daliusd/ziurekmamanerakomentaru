(function() {
    function removeComments() {
        let comments = document.querySelectorAll('a.commentCount');
        for (let comment of comments) {
            comment.remove();
        }

        let comment_wrappers = document.querySelectorAll('#comment-dark-skin-wrapper');
        for (let wrapper of comment_wrappers) {
            wrapper.remove();
        }
    }

    removeComments();

    setInterval(removeComments, 5000);
})();
