import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  videos = [
    {title:'Video 1', share: 425, likes: 345, dislikes: 12, thumbnail:''},
    {title:'Video 2', share: 325, likes: 234, dislikes: 19, thumbnail:''},
    {title:'Video 3', share: 156, likes: 305, dislikes: 32, thumbnail:''},
  ]

  mostLikedVideo = this.getMostLikedVideo();

  getMostLikedVideo(){
    let videoCopy = [...this.videos];
    // console.log(videoCopy)
    return videoCopy.sort((curr, next)=>next.likes - curr.likes)[0]
    // let result =  videoCopy.sort((curr, next)=>next.likes - curr.likes)[0]
    // console.log(result)

  }
}
