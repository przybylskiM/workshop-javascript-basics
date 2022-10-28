function displayVideos(videos) {
  const $main = document.querySelector("main");
  const $videoList = document.createElement("div");
  $videoList.classList.add("video-list");
  videos.forEach((video) => {
    const $thumb = document.createElement("img");
    $thumb.src = video.thumbUrl;

    const $title = document.createElement("h3");
    $title.textContent = video.title;

    const $body = document.createElement("p");
    $body.textContent = video.description;

    const $container = document.createElement("section");
    $container.classList.add("video");
    $container.append($thumb);
    $container.append($title);
    $container.append($body);

    $videoList.append($container);
  });
  $main.append($videoList);
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
