export class Video {
  constructor(id, title, description, channelName, thumbnailUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.channelName = channelName;
    this.thumbnailUrl = thumbnailUrl;
  }

  truncatedDescription() {
    if (this.description.length <= 50) {
      return this.description.length;
    }
    return this.description.slice(0, 49) + "...";
  }
}
