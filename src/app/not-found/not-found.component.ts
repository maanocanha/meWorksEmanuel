import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h3>Erro 404. Esta página não existe!</h3>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
