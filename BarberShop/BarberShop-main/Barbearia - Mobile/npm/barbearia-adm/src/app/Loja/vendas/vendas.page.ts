import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {
 
  items = [];
  public editMode = false

  constructor() { }

  edit(){
    switch (this.editMode){
      case false:
        this.editMode = true;
        break;

      case true:
        this.editMode = false;
        break;
    }
  }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 10; i++) {
      this.items.push(`teste ${count + i}`);
    }
  }

  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
