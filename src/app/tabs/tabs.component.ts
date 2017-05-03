import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from 'app/tabs/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    this.select(this.tabs.first)
  }

  select(selectedTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      tab.selected = (tab.title === selectedTab.title);
    });
  }
}
