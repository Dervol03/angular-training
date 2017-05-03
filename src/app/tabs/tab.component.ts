import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  public selected = false;
  @Input() public title: string;

  constructor(private tabCanvas: TabsComponent) { }

  ngOnInit() {
    this.tabCanvas.addToTabs(this);
  }
}
