document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-uri]'), function(element) {
        element.onclick=function() {
            (this.dataset.target == '_blank') ? window.open(this.dataset.uri, '_blank') : window.location.href = this.dataset.uri;
        }
    });
});