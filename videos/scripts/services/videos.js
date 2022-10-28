function fetchVideos() {
  return fetch("data/videos.json").then((response) => {
    return response.json();
  });
  // return Promise.resolve([
  //   {
  //     title: "Rocky",
  //     description: "Najlepszy zawodnik na ringu w akcji",
  //     thumbUrl: "https://picsum.photos/id/755/300/150",
  //   },
  // ]);
}
