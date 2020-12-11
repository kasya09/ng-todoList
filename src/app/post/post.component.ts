import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();

  removePost(): void{
    this.onRemove.emit(this.post.id);
  }
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
