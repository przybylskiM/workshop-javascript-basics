function displayVideos(videos) {
    const $main = document.querySelector('main');
    videos.forEach((video) => {
        const $thumb = document.createElement('img');
        $thumb.src = video.thumbUrl;

        const $title = document.createElement('h3');
        $title.textContent = video.title;

        const $body = document.createElement('p');
        $body.textContent = video.description;

        const $container = document.createElement('div');
        $container.append($thumb);
        $container.append($title);
        $container.append($body);

        $main.append($container);
    });
}

function main() {
    console.log("main");
    
    fetch("data/videos.json")
    .then((response) => {
      return response.json();
    })
    .then((videos) => {
        displayVideos(videos);
    });
}

main();