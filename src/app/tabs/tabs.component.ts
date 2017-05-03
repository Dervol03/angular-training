import { Component, OnInit } from '@angular/core';
import {TabComponent} from 'app/tabs/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  private tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit(): void {}

  addToTabs(newTab: TabComponent): void {
    this.tabs.push(newTab);
    if (this.tabs.length === 1) {
      this.select(newTab);
    }
  }

  select(selectedTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      tab.selected = (tab.title === selectedTab.title);
    });
  }
}
