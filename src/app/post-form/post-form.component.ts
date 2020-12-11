import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title: '';
  text: '';
  id: number;
  priority: '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        priority: this.priority,
        id: uuidv4(),
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
