import {Component, OnInit} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

export interface Post {
  title: string;
  text: string;
  id?: number;
  priority: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'ng-todoList';
  posts: Post[] = [
    {title: 'Хочу завести кота', text: 'Все еще хочу кота, но британского', id: 1, priority: 'Low'},
    {title: 'Хочу завести таксу', text: 'Все еще хочу таксу, но рыженькую', id: 2, priority: 'High'},
  ];

  ngOnInit(): void {

  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('post', post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
