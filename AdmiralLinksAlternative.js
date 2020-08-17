document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.getElementsByClassName('pseudo-link'), function(element) {
        element.dataset.href = btoa(element.dataset.href);
        element.setAttribute('href', 'javascript:void(0);');
        element.onclick=function() {
            element.classList.contains('blank') ? window.open(atob(this.dataset.href), '_blank') : window.location.href = atob(this.dataset.href);
        }
    });
});