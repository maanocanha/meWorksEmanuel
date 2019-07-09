import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CadastroService } from '../../service/cadastro.service';
import { Cadastro } from '../../models/cadastro'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [CadastroService]
})
export class IndexComponent implements OnInit {

  public cadastros = new Array<Cadastro>();


  constructor(private _cadastroService: CadastroService) { }

  displayedColumns: string[] = ['id', 'nome', 'nomesobrenome', 'RG', 'email', 'cep', 'senha', 'contato'];
  dataSource = new MatTableDataSource<Cadastro>(this.cadastros);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  delete(id: number) {
    this._cadastroService.delete(id).subscribe(
      data => {
        this.getCadastros();    
      }, 
      error => {
        console.log(error.error)
      }
    );
  }


  getCadastros() {
    this._cadastroService.getAll().subscribe(data => {
      this.cadastros = data
      this.dataSource = new MatTableDataSource<Cadastro>(this.cadastros);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {

    this.getCadastros();

  }

}
