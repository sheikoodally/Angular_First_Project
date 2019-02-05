import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('listStagger',[
      transition('*<=>*',[
        query(':enter',
      [
        style({opacity:0, transform:'translateY(-15px)'}),
        stagger('50ms',
        animate('600ms ease-out',
        style({opacity:1,transform:'translateY(0px)'})))
        ],{optional:true}),
        query(':leave', animate('60ms', style({ opacity:0 })), {
        optional:true
       })
      ])
    ])
  ]
})
export class PostComponent implements OnInit {

  posts:object;
  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getPost().subscribe(
      data => this.posts = data
    )
  }

}
