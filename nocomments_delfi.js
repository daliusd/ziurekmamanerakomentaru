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

        let appComments = document.querySelectorAll('#appComments');
        for (let app of appComments) {
            app.remove();
        }
    }

    removeComments();

    setInterval(removeComments, 5000);
})();
