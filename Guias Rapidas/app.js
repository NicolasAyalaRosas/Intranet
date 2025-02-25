document.querySelectorAll('.step-item').forEach(item => {
    item.addEventListener('click', function() {
        const videoID = item.getAttribute('data-video'); 
        const videoTitle = item.getAttribute('data-title');

        let existingVideo = item.querySelector('iframe');

        if (existingVideo) {
            existingVideo.style.display = existingVideo.style.display === 'none' ? 'block' : 'none';
        } else {
            const iframe = document.createElement('iframe');
            iframe.width = '922';
            iframe.height = '462';
            iframe.src = `https://www.youtube.com/embed/${videoID}`;
            iframe.title = videoTitle;
            iframe.frameborder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.referrerpolicy = 'strict-origin-when-cross-origin';
            iframe.allowfullscreen = true;
            item.appendChild(iframe);
        }
    });
});