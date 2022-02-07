import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  messageToChild = ""
  messageFromChild = ""

  constructor() { }

  ngOnInit(): void {
  }

  public getMessage(info: string){
    this.messageFromChild = info
  }
}
