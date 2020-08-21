document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-uri]'), function(element) {
        element.onclick=function() {
            if (this.dataset.target == '_window')
                window.open(this.dataset.uri,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500px,height=500px');
            else if (this.dataset.target == '_blank')
                window.open(this.dataset.uri, '_blank');
            else
                window.location.href = this.dataset.uri
        }
    });
});
