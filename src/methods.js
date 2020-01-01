import { YOUTUBE_API_KEY } from "./constants";
import { Video } from "./models";

export function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return user;
}

export function getSearchResults(searchQuery, onSuccess, onError) {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${YOUTUBE_API_KEY}`;
  let request = new XMLHttpRequest();
  request.onerror = errorEvent => {
    onError(errorEvent);
  };
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let responseJSONObj = {};
      try {
        responseJSONObj = JSON.parse(request.responseText);
      } catch (error) {
        onError(error);
      }
      let videoList = [];
      responseJSONObj.items.forEach(item => {
        // videoList.push({
        //   id: item.id.videoId,
        //   title: item.snippet.title,
        //   description: item.snippet.description,
        //   channelName: item.snippet.channelTitle,
        //   thumbnailUrl: item.snippet.thumbnails.high.url
        // });
        videoList.push(
          new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.description,
            item.snippet.channelTitle,
            item.snippet.thumbnails.high.url
          )
        );
      });
      onSuccess(videoList);
    }
  };
  request.open("GET", url, true);
  request.send(null);
}
