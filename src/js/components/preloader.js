export default function preload(callback) {
    $(document).ready(() => {
        var preloader = $("#preloader"),
		imagesCount = $("img").length,
		dBody = $("body"),
		page = $(".site"),
		percent = 100 / imagesCount,
		progress = 0,
		loadedImg = 0;

        if (imagesCount > 0) {
            dBody.css("overflow", "hidden");

            for (var i = 0; i < imagesCount; i++) {
                var img_copy = new Image();
                img_copy.src = document.images[i].src;
                img_copy.onload = img_load;
                img_copy.onerror = img_load;
            }

            function img_load() {
                progress += percent;
                loadedImg++;

                if (progress >= 100 || loadedImg == imagesCount) {
                    setTimeout(() => {
                        dBody.css("overflow", "");
                        page.css("opacity", 1);
                        preloader.remove();
                        callback()
                    }, 2000);
                }

                $(".preloader__img").css(
                    "transform",
                    `translate(${progress * 4}%, -${progress * 2}%)`
                );
            }
        }
    });
	
}


