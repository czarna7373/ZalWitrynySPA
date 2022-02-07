import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {

  @Output()
  childMessage = new EventEmitter<string>()

  msg = ""

  constructor() { }

  ngOnInit(): void {
  }

  public btnOnClick(){
    this.childMessage.emit('Twoja wiadomość: ' + this.msg)
  }
}
