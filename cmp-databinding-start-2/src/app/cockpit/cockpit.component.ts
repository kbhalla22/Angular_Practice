import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output()serverCreated =new EventEmitter<{serverName: string, serverContent:string}>();
@Output('bpCreated')bluePrintCreated=new EventEmitter<{serverName: string, serverContent:string}>();
// newServerName='';
// newServerContent='';
@ViewChild('serverContentInput',{static:true})serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
    
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({serverName: nameInput.value, serverContent:this.serverContentInput.nativeElement.value});

  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent:this.serverContentInput.nativeElement.value});
  }

}
