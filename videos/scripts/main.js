function fetchVideos() {
    return fetch("data/videos.json").then((response) => {
      return response.json();
    });
  }
  function main() {
    fetchVideos().then((videos) => {
      displayVideos(videos);
    });
}

main();
