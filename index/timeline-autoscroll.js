document.addEventListener("DOMContentLoaded", function () {
    const timeline = document.querySelector(".custom-timeline-wrapper");
    let scrollSpeed = 0.5; // ความเร็วเลื่อน (px/frame)
    let isScrolling = true;

    function autoScroll() {
        if (!isScrolling || !timeline) return;

        timeline.scrollLeft += scrollSpeed;

        // วนกลับไปจุดเริ่มต้นเมื่อสุดทาง
        if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth) {
            timeline.scrollLeft = 0;
        }

        requestAnimationFrame(autoScroll);
    }

    // หยุดเมื่อ hover
    timeline.addEventListener("mouseenter", () => isScrolling = false);
    timeline.addEventListener("mouseleave", () => {
        isScrolling = true;
        autoScroll();
    });

    autoScroll();
});
