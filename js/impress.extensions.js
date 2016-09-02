function registerListeners() {
    window.addEventListener('impress:init', function (ev) {
        checkOverlay(document.getElementsByClassName('active')[0]);
    });
    window.addEventListener('impress:stepwillenter', function (ev) {
        checkOverlay(ev.srcElement);
    });

    function checkOverlay(src) {
        if( src.classList.contains('overlay') ) {
            var prev = null;
            var steps = document.getElementsByClassName('step'); 
            var length = steps.length; 
            for (var i = 0; i < length; i++) {
                if ( steps[i] === src ) {
                    break;    
                }

                if ( !steps[i].classList.contains('overlay') ) {
                    prev = steps[i];
                }
            }

            prev.classList.add('overlay-bd');
        } else {
            var overlayBds = document.getElementsByClassName('overlay-bd');
            var length = overlayBds.length;

            for(var i=0;i<length;i++) {
                overlayBds[i].classList.remove('overlay-bd');    
            }
        }
    }
}

registerListeners();


/* Fix anchor clicks */
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.open(this.href,'_blank').focus();
    });
}