import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent {

  // variaveis
  peso!: number;
  altura!: number;
  calc: number = 0;
  mensagemTipo: string = 'Preencha os campos';
  mensagemError: string = '';
  classeAtiva = true;
  index:number =0;


  mensagemPessoa: string[] = [
    'De acordo com o seu Índice de Massa Corporal (IMC), você está na categoria abaixo do peso saudável para a sua altura. É importante que você procure um médico para avaliar a causa do baixo peso e receber orientações nutricionais e médicas adequadas para melhorar a sua situação.',

    'De acordo com o seu Índice de Massa Corporal (IMC), você está dentro da faixa de peso saudável para a sua altura, o que é um bom sinal de que você corre um menor risco de desenvolver doenças crônicas relacionadas ao peso. Para manter-se assim, é importante manter um estilo de vida ativo e saudável.    ',

    'De acordo com o seu Índice de Massa Corporal (IMC), você está na categoria de sobrepeso, o que significa que está com um excesso de peso que pode aumentar o risco de desenvolver doenças crônicas como diabetes, hipertensão e problemas cardíacos.',

    'De acordo com o seu Índice de Massa Corporal (IMC), você está na categoria de obesidade grau I, o que significa que apresenta um excesso de peso significativo que aumenta consideravelmente o risco de desenvolver doenças crônicas como diabetes, hipertensão e problemas cardíacos. Para ajudar a melhorar sua situação, é fundamental buscar orientação médica para avaliar o risco de doenças crônicas e receber tratamentos adequados, se necessário. Além disso, é importante reduzir o consumo de alimentos processados e ricos em gordura e açúcar, substituindo-os por opções mais saudáveis, como frutas, verduras, legumes e grãos integrais.',

    'De acordo com o seu Índice de Massa Corporal (IMC), você está na categoria de obesidade grau II, o que significa que apresenta um excesso de peso muito elevado que aumenta consideravelmente o risco de desenvolver doenças crônicas e pode comprometer sua qualidade de vida. Para ajudar a melhorar sua situação, é fundamental buscar orientação médica para avaliar o risco de doenças crônicas e receber tratamentos adequados, se necessário. Além disso, é importante adotar um plano de alimentação saudável e equilibrado, com moderação de alimentos ricos em gordura e açúcar, priorizando a ingestão de frutas, verduras, legumes e grãos integrais.',

    'Você está na categoria de obesidade grau III, o que significa que apresenta um excesso de peso muito elevado, que aumenta consideravelmente o risco de doenças crônicas e pode comprometer sua qualidade de vida. A obesidade mórbida também pode limitar sua capacidade de realizar atividades diárias, aumentando o risco de depressão e outras condições de saúde mental. Para ajudar a melhorar sua situação, é importante buscar orientação médica especializada para avaliar o risco de doenças crônicas e receber tratamentos adequados, se necessário. Além disso, é fundamental adotar um plano de alimentação saudável e equilibrado, com moderação de alimentos ricos em gordura e açúcar e praticar atividades físicas com orientação de um profissional de educação física. Em casos selecionados, pode ser indicado o uso de terapia comportamental para ajudar a modificar comportamentos alimentares e de estilo de vida.'

  ]

  toggleClasse() {
    this.classeAtiva = !this.classeAtiva;
  }

  // função para verificar o input
  verificarInput() {
    if (this.altura === 0 || this.peso === 0) {
      // se os valores forem 0
      this.setMensagemError('Os valores devem ser diferentes de 0!');
    } else if (this.altura < 0 || this.peso < 0) {
      // se os valores forem negativos
      this.setMensagemError('Os valores devem ser positivos!');
    } else if (!this.altura || !this.peso) {
      // se os inputs não foram preenchidos
      this.setMensagemError('Você deve preencher todos os campos!');
    } else {
      // se estiver tudo ok
      this.setMensagemError('');
      this.calculoImc(this.altura, this.peso);
      this.classeAtiva = !this.classeAtiva;
    }
  }

  // função para calculo de imc
  calculoImc(altura: number, peso: number) {
    if (altura > 3) {
      // verificar se o usuario digitou sem a virgula ou o ponto
      altura = altura / 100;
    } else {
    }
    this.calc = peso / Math.pow(altura, 2);
    this.verificarTipo(this.calc);
  }

// funnção para veerificar o tipo da pessoa
  verificarTipo(imc: number) {
    if (imc < 18.5) {
      //magreza
      this.setIndex(0);
      this.setTipo('Magreza');
    } else if (imc < 24.9) {
      // normal
      this.setIndex(1);
      this.setTipo('Normal');
    } else if (imc < 29.9) {
      // sobrepeso
      this.setIndex(2);
      this.setTipo('Sobrepeso');
    } else if (imc < 34.9) {
      // obesidadeI
      this.setIndex(3);
      this.setTipo('Obesidade I');
    } else if (imc < 39.9) {
      // obesidadeII
      this.setIndex(4);
      this.setTipo('Obesidade II');
    } else {
      // obesidadeIII
      this.setIndex(5);
      this.setTipo('Obesidade III');
    }
  }

  // funcão de mensagem de erro
  setMensagemError(mensage: string) {
    this.mensagemError = mensage;
  }
  //funcão de tipo
  setTipo(tipo: string) {
    this.mensagemTipo = tipo;
  }

  // função para saber que tipo de mensagem mostrar para o usuario
  setIndex(i: number){
    this.index = i;
  }
}

