import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page{
  constructor() {}

  buscarEndereco() {
    const cep = (<HTMLInputElement>document.getElementById('cep')).value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          (<HTMLInputElement>document.getElementById('endereco')).value = data.logradouro;
          (<HTMLInputElement>document.getElementById('bairro')).value = data.bairro;
          (<HTMLInputElement>document.getElementById('cidade')).value = data.localidade;
          (<HTMLInputElement>document.getElementById('estado')).value = data.uf;
        } else {
          alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar o endereço:', error);
      });
  }

  cadastrarFuncionario() {
    /*
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cpf = (<HTMLInputElement>document.getElementById('cpf')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const telefone = (<HTMLInputElement>document.getElementById('telefone')).value;
    const cep = (<HTMLInputElement>document.getElementById('cep')).value;
    const endereco = (<HTMLInputElement>document.getElementById('endereco')).value;
    const bairro = (<HTMLInputElement>document.getElementById('bairro')).value;
    const cidade = (<HTMLInputElement>document.getElementById('cidade')).value;
    const estado = (<HTMLInputElement>document.getElementById('estado')).value;

    const funcionario = {
      nome,
      cpf,
      email,
      telefone,
      cep,
      endereco,
      bairro,
      cidade,
      estado
    };

    const funcionarios = JSON.parse(localStorage.getItem('funcionarios') as string) || [];
    funcionarios.push(funcionario);

    localStorage.setItem('funcionarios', JSON.stringify(funcionarios)); 
    */

    alert('Funcionário cadastrado com sucesso!');

    // Limpe os campos do formulário após a submissão
    (<HTMLFormElement>document.getElementById('cadastroForm')).reset();
  }
}
