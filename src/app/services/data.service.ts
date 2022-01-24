import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData, orderBy, getDocs, query, where, doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, writeBatch} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { IAluno } from '../interfaces/ialuno';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  addData(aluno: IAluno) {
    const alunosDB = collection(this.firestore, 'alunos') 
    return addDoc(alunosDB, aluno)
  }

  getData(): Observable<IAluno[]> {
    const alunosDB = collection(this.firestore, 'alunos')
    const appQuery = query(alunosDB, orderBy('id', 'asc'))
    return collectionData(appQuery) as Observable<IAluno[]>
  }

  getDataByName(nome: string): Observable<IAluno[]> {
    const alunosDB = collection(this.firestore, 'alunos')
    const appQuery = query(alunosDB, where('nome', '==', nome))
    return collectionData(appQuery) as Observable<any[]>
  }

  getDataByTurma(turma: string): Observable<IAluno[]> {
    const alunosDB = collection(this.firestore, 'alunos')
    const appQuery = query(alunosDB, where('turma', '==', turma))
    return collectionData(appQuery) as Observable<any[]>
  }

  async fillDatabase(){
    const alunosLista = [
      {
        "id": 1,
        "numero": 1,
        "nome": "ALVARO PEREIRA DE SOUSA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 2,
        "numero": 2,
        "nome": "AUDRY CAROLINE DOS SANTOS",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 3,
        "numero": 3,
        "nome": "BEATRIZ APARECIDA BARBADO DOS SANTOS",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 4,
        "numero": 4,
        "nome": "BERNARDO SALGADO DOS SANTOS",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 5,
        "numero": 5,
        "nome": "BRAYAN LEONEL LIMA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 6,
        "numero": 6,
        "nome": "DANIELEN APARECIDA DE PAULA DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 7,
        "numero": 7,
        "nome": "GEOVANNA CASIMIRO PEREIRA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 8,
        "numero": 8,
        "nome": "GUSTAVO APARECIDO DA COSTA RODRIGUES",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 9,
        "numero": 9,
        "nome": "GUSTAVO FERNANDES MOLITERNO",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 10,
        "numero": 10,
        "nome": "ISABELLY MARIA DE L. M. BALSANTE DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 11,
        "numero": 11,
        "nome": "JEFERSON DIAS ISRAEL",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 12,
        "numero": 12,
        "nome": "JENIFER DENIZE ROCHA DOS SANTOS VIEIRA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 13,
        "numero": 13,
        "nome": "JESSICA RODRIGUES DOS SANTOS",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 14,
        "numero": 14,
        "nome": "JOAO PEDRO DA SILVA GONCALVES",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 15,
        "numero": 15,
        "nome": "JOSE HENRIQUE PENA OLIVEIRA DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 16,
        "numero": 16,
        "nome": "JOSEH GABRIEL AUGUSTO DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 17,
        "numero": 17,
        "nome": "LAURA EDUARDA DELCIRO DA COSTA FERREIRA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 18,
        "numero": 18,
        "nome": "LAVINIA CAMPOS DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 19,
        "numero": 19,
        "nome": "LUAN VITOR DE SOUZA RIBEIRO",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 20,
        "numero": 20,
        "nome": "LUCAS AHMAD YOUSSEF",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 21,
        "numero": 21,
        "nome": "LUCAS MATHEUS CANDIDO DE LIMA CHIARADIA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 22,
        "numero": 22,
        "nome": "MARCOS VINICIUS DA S. GONCALVES DE MELO",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 23,
        "numero": 23,
        "nome": "MARIANA APARECIDA RIBEIRO",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 24,
        "numero": 24,
        "nome": "MARIANA BARBOSA DOS SANTOS",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 25,
        "numero": 25,
        "nome": "MIGUEL CARDOSO VALENTIM",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 26,
        "numero": 26,
        "nome": "RAFAEL HAMILTON SOUZA DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 27,
        "numero": 27,
        "nome": "THAINÁ MACENA DA SILVA",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 28,
        "numero": 28,
        "nome": "THAIS ALVES FERNANDES",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 29,
        "numero": 29,
        "nome": "VICTOR EZEQUIEL DOS SANTOS VELASCO",
        "turma": "6A",
        "status": true,
        "code": "c"
      },
      {
        "id": 30,
        "numero": 1,
        "nome": "ALEX ANGELO FERREIRA DOS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 31,
        "numero": 2,
        "nome": "ANA CLARA MENINO DIAS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 32,
        "numero": 3,
        "nome": "ANA GABRIELA ROCHA DE SOUSA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 33,
        "numero": 4,
        "nome": "ANA LUISA PEREIRA DA SILVA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 34,
        "numero": 5,
        "nome": "ANA LUIZA CARVALHO DE SAMPAIO",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 35,
        "numero": 6,
        "nome": "DEIVID AUGUSTO LIMA DOS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 36,
        "numero": 7,
        "nome": "GABRIEL HENRIQUE MESSIAS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 37,
        "numero": 8,
        "nome": "GABRIELY CARDOSO VALENTIM",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 38,
        "numero": 9,
        "nome": "GUSTAVO HENRIQUE SILVA DE MARCO",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 39,
        "numero": 10,
        "nome": "GUSTAVO PEREIRA RIBEIRO",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 40,
        "numero": 11,
        "nome": "ISADORA VITORIA DOS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 41,
        "numero": 12,
        "nome": "JOAO FRANCISCO SANTOS DA SILVA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 42,
        "numero": 13,
        "nome": "JOAO LUCAS DE ANDRADE",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 43,
        "numero": 14,
        "nome": "KAUA APARECIDO MELO DANTAS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 44,
        "numero": 15,
        "nome": "LAURA BEATRIZ DA SILVA GONCALVES",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 45,
        "numero": 16,
        "nome": "LUCAS DOMINGUES DE S. TAVARES DA SILVA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 46,
        "numero": 17,
        "nome": "LUIZ FERNANDO DE SOUZA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 47,
        "numero": 18,
        "nome": "LUIZ MIGUEL DE OLIVEIRA GABRIEL",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 48,
        "numero": 19,
        "nome": "MAURICIO VICTOR TRINDADE PEREIRA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 49,
        "numero": 20,
        "nome": "MILENA DA SILVA GONCALVES DE MELO",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 50,
        "numero": 21,
        "nome": "MIRELLA EMANUELE GOMES DOS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 51,
        "numero": 22,
        "nome": "NATALYA EDUARDA DO CARMO DE SOUZA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 52,
        "numero": 23,
        "nome": "RAYANE APARECIDA DOS SANTOS",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 53,
        "numero": 24,
        "nome": "TAMIRIS GABRIELY GODOI MUNIZ",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 54,
        "numero": 25,
        "nome": "WILLIAN GABRIEL SANTOS PEREIRA",
        "turma": "6B",
        "status": true,
        "code": "c"
      },
      {
        "id": 55,
        "numero": 1,
        "nome": "ANA BEATRIZ GUIMARAES RODRIGUES",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 56,
        "numero": 2,
        "nome": "ANA LAURA DONIZETI DOS SANTOS SOUZA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 57,
        "numero": 3,
        "nome": "ANA LUIZA GOES DE LIMA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 58,
        "numero": 4,
        "nome": "BENICIO SOUZA DE CAMPOS SILVA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 59,
        "numero": 5,
        "nome": "BRUNO AUGUSTO PONTES PEREIRA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 60,
        "numero": 6,
        "nome": "CARLOS EDUARDO DA MATTA LEAL",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 61,
        "numero": 7,
        "nome": "FERNANDA SOPHIA GONCALVES SOARES",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 62,
        "numero": 8,
        "nome": "GABRIELA KOTESKI CORREA DA SILVA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 63,
        "numero": 9,
        "nome": "IAGO LUCAS BERTHOUD DE ARAUJO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 64,
        "numero": 10,
        "nome": "ISAAC JOSE BERTHOUD DE ARAUJO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 65,
        "numero": 11,
        "nome": "ISABELA CAROLINE FERREIRA DA SILVA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 66,
        "numero": 12,
        "nome": "JUAN PABLO LIMA DE ARAUJO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 67,
        "numero": 13,
        "nome": "JULIA VITORIA DE LIMA MONTEIRO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 68,
        "numero": 14,
        "nome": "LEONARDO CURI AGOSTINHO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 69,
        "numero": 15,
        "nome": "LIVIA CATARINA GARCIA DE SOUSA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 70,
        "numero": 16,
        "nome": "LUCAS ARGOLO SANTOS DA SILVA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 71,
        "numero": 17,
        "nome": "LUCAS THIAGO TRONCOSA DURAES",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 72,
        "numero": 18,
        "nome": "LUIZA HELENA FERREIRA DE SOUZA MELO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 73,
        "numero": 19,
        "nome": "MANUELA DE OLIVEIRA GUSMAO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 74,
        "numero": 20,
        "nome": "MARIA LUIZA DE OLIVEIRA SANTOS",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 75,
        "numero": 21,
        "nome": "MIGUEL FRANCISCO SILVA DOS SANTOS",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 76,
        "numero": 22,
        "nome": "MURILO NOGUEIRA DO NASCIMENTO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 77,
        "numero": 23,
        "nome": "MURYLO EDUARDO AZEVEDO DO AMARAL",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 78,
        "numero": 24,
        "nome": "NATHAN DE OLIVEIRA GUEDES",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 79,
        "numero": 25,
        "nome": "NAYANE DE ALMEIDA LEAL RIBEIRO",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 80,
        "numero": 26,
        "nome": "RAFAEL DE FARIA POMPEU",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 81,
        "numero": 27,
        "nome": "RAFAELLA ROBERTA DIAS DA SILVA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 82,
        "numero": 28,
        "nome": "ROSANA APARECIDA DE PAULA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 83,
        "numero": 29,
        "nome": "STHEFANY ALVES FERREIRA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 84,
        "numero": 30,
        "nome": "THIAGO MIGUEL DE SANTANA DE SOUZA",
        "turma": "6C",
        "status": true,
        "code": "c"
      },
      {
        "id": 85,
        "numero": 1,
        "nome": "ANA CLARA CORREA ALEXANDRINO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 86,
        "numero": 2,
        "nome": "ARYEL MURILO LEAL BENA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 87,
        "numero": 3,
        "nome": "CAIO VICTOR TEODORO DE FARIA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 88,
        "numero": 4,
        "nome": "CARINA DOM BOSCO DE SOUZA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 89,
        "numero": 5,
        "nome": "CARLOS EDUARDO DE OLIVEIRA MOURA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 90,
        "numero": 6,
        "nome": "FERNANDO GABRIEL GUEDES DA LUZ",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 91,
        "numero": 7,
        "nome": "GABRIEL JULIO DA COSTACRUZ",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 92,
        "numero": 8,
        "nome": "GUILHERME DE SOUZA PINTO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 93,
        "numero": 9,
        "nome": "JOAO MATHEUS DOS SANTOS",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 94,
        "numero": 10,
        "nome": "KAIO PAULINO DAS NEVES CORREA PINTO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 95,
        "numero": 11,
        "nome": "KAUANE MOREIRA DA SILVA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 96,
        "numero": 12,
        "nome": "LUIS GUSTAVO DOS SANTOS PINTO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 97,
        "numero": 13,
        "nome": "MANUELA MUSA MADUREIRO BARBOSA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 98,
        "numero": 14,
        "nome": "MARIA CAROLINE BERNARDES MELO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 99,
        "numero": 15,
        "nome": "MARIA EDUARDA DA SILVA RODRIGUES",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 100,
        "numero": 16,
        "nome": "MARIA HELENA SANTOS DA SILVA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 101,
        "numero": 17,
        "nome": "MARIANA KOIKE MOREIRA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 102,
        "numero": 18,
        "nome": "MARILIA APARECIDA MIGUEL DOS SANTOS",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 103,
        "numero": 19,
        "nome": "NATHALIA BIANCA DA ROCHA ALVES DA SILVA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 104,
        "numero": 20,
        "nome": "PEDRO HENRIQUE LOURENCO GONCALVES",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 105,
        "numero": 21,
        "nome": "RAQUEL SANTOS DE ALBUQUERQUE PEREIRA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 106,
        "numero": 22,
        "nome": "TAYLA DA SILVA RAFAEL DO NASCIMENTO",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 107,
        "numero": 23,
        "nome": "THIAGO ANDRE SANTOS DE SOUZA",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 108,
        "numero": 24,
        "nome": "THOMAS GABRIEL DA SILVA ALVES",
        "turma": "7A",
        "status": true,
        "code": "c"
      },
      {
        "id": 109,
        "numero": 1,
        "nome": "ANA JULIA FATIMA PALERMO DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 110,
        "numero": 2,
        "nome": "BEATRIZ ALVES DE PAULA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 111,
        "numero": 3,
        "nome": "BRUNO DA CRUZ JULIO DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 112,
        "numero": 4,
        "nome": "DANIEL GUSTAVO DE A. M. DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 113,
        "numero": 5,
        "nome": "DANIEL JULIO DE LIMA PEREIRA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 114,
        "numero": 6,
        "nome": "DARIANE ISABEL RIBEIRO DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 115,
        "numero": 7,
        "nome": "DAVI NATA DE ALBUQUERQUE GONCALVES",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 116,
        "numero": 8,
        "nome": "DIEGO DAVID DA ROSA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 117,
        "numero": 9,
        "nome": "EDUARDO SANTANA MARQUES",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 118,
        "numero": 10,
        "nome": "EMERSON RODRIGUES DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 119,
        "numero": 11,
        "nome": "FELIPE ZACARIAS DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 120,
        "numero": 12,
        "nome": "GABRIEL VINICIUS DOS SANTOS ANDRADE",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 121,
        "numero": 13,
        "nome": "JEFFERSON AUGUSTO DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 122,
        "numero": 14,
        "nome": "KAIQUE DA SILVA RAFAEL DO NASCIMENTO",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 123,
        "numero": 15,
        "nome": "KAUA RAFAEL DA SILVA DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 124,
        "numero": 16,
        "nome": "MANUELLA RIBEIRO RODRIGUES",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 125,
        "numero": 17,
        "nome": "MARCELA DA MATTA GONCALVES DE FARIA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 126,
        "numero": 18,
        "nome": "MARCO MURILO DE BRITO",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 127,
        "numero": 19,
        "nome": "MARIA EDUARDA DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 128,
        "numero": 20,
        "nome": "MARIANE MARQUES BARRETO",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 129,
        "numero": 21,
        "nome": "MIGUEL ADAO JESUS DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 130,
        "numero": 22,
        "nome": "RAFAEL JOSE BORGES DA SILVA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 131,
        "numero": 23,
        "nome": "THOMAS JEFERSON DE OLIVEIRA DOS SANTOS",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 132,
        "numero": 24,
        "nome": "VITOR HUGO NUNES HILARIO",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 133,
        "numero": 25,
        "nome": "WAGNER GUEDES FILHO",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 134,
        "numero": 26,
        "nome": "WESLEY GUSTAVO LEAL PEREIRA",
        "turma": "7B",
        "status": true,
        "code": "c"
      },
      {
        "id": 135,
        "numero": 1,
        "nome": "ARLEY THOMAZ OLIVEIRA DE SOUSA BORGES",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 136,
        "numero": 2,
        "nome": "ARTHUR MIGUEL DA SILVA PEREIRA",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 137,
        "numero": 3,
        "nome": "CAIO AUGUSTO DE BRITO RIBEIRO",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 138,
        "numero": 4,
        "nome": "FRANCINY FRANCA ANDRE",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 139,
        "numero": 5,
        "nome": "GABRIELLE GONCALVES REZENDE",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 140,
        "numero": 6,
        "nome": "GABRIELLY VICTORIA MUNIZ LUCIO",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 141,
        "numero": 7,
        "nome": "INDIARA DOS SANTOS MENINO",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 142,
        "numero": 8,
        "nome": "KAUAN MAURICIO ROMEIRO",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 143,
        "numero": 9,
        "nome": "KAUAN ROSA DOS SANTOS",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 144,
        "numero": 10,
        "nome": "KIARA DA SILVA LEITE",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 145,
        "numero": 11,
        "nome": "LEILIANE RIBEIRO DA SILVA",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 146,
        "numero": 12,
        "nome": "LIVIA CASSIA SILVA DOS SANTOS",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 147,
        "numero": 13,
        "nome": "LUIZ FERNANDO CAPELLA DOS SANTOS",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 148,
        "numero": 14,
        "nome": "MARCIO GODOI DOS SANTOS",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 149,
        "numero": 15,
        "nome": "MARIA LILIANE PEREIRA DA CRUZ",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 150,
        "numero": 16,
        "nome": "MIRELEN SOUZA DA SILVA",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 151,
        "numero": 17,
        "nome": "MURILLO ANTONY DOS SANTOS",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 152,
        "numero": 18,
        "nome": "NICOLAS ISIDIO DAIBUCHE",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 153,
        "numero": 19,
        "nome": "NICOLAS RODRIGUES DA SILVA",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 154,
        "numero": 20,
        "nome": "PABLO AUGUSTO DA SILVA",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 155,
        "numero": 21,
        "nome": "REINALDO RYAN DE OLIVEIRA GUEDES",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 156,
        "numero": 22,
        "nome": "SUZANY DE SOUZA PENA RODRIGUES",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 157,
        "numero": 23,
        "nome": "TAMIRES DE OLIVEIRA AUGUSTO",
        "turma": "7C",
        "status": true,
        "code": "c"
      },
      {
        "id": 158,
        "numero": 1,
        "nome": "BIANCA BATISTA DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 159,
        "numero": 2,
        "nome": "BRENO ELIAS OLIVEIRA ALVES",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 160,
        "numero": 3,
        "nome": "CARLOS HENRIQUE CORREA DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 161,
        "numero": 4,
        "nome": "EDUARDO CARMINATI FERREIRA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 162,
        "numero": 5,
        "nome": "EMANUELY CARDOSO VALENTIM",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 163,
        "numero": 6,
        "nome": "ESTEVAO CRISTOVAO DE MORAIS ARAUJO",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 164,
        "numero": 7,
        "nome": "GABRIELA RAMOS DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 165,
        "numero": 8,
        "nome": "GUILHERME GABRIEL ROSA DOS SANTOS",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 166,
        "numero": 9,
        "nome": "JENYFFER FARIA FELICIO DA CRUZ",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 167,
        "numero": 10,
        "nome": "LUCAS APARECIDO CARNEIRO",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 168,
        "numero": 11,
        "nome": "LUCAS MATHEUS DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 169,
        "numero": 12,
        "nome": "LUIZ GUSTAVO GARCIA DE CARVALHO",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 170,
        "numero": 13,
        "nome": "MAITE DE CAMPOS GALVAO",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 171,
        "numero": 14,
        "nome": "MARIA EDUARDA DOS SANTOS MOREIRA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 172,
        "numero": 15,
        "nome": "MARIA EDUARDA O. DA CRUZ DE CAMPOS",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 173,
        "numero": 16,
        "nome": "MARIA FERNANDA DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 174,
        "numero": 17,
        "nome": "MARIA FERNANDA DE ANDRADE DE LIMA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 175,
        "numero": 18,
        "nome": "MARIA JULLIA MELLO DE LIMA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 176,
        "numero": 19,
        "nome": "MURILO AUGUSTO POLICARPO DE ALMEIDA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 177,
        "numero": 20,
        "nome": "NICOLLAS RICARDO BERNARDINO DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 178,
        "numero": 21,
        "nome": "PABLO DO PRADO DE SOUZA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 179,
        "numero": 22,
        "nome": "PEDRO HENRIQUE DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 180,
        "numero": 23,
        "nome": "RAISSA FATIMA BATISTA FERREIRA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 181,
        "numero": 24,
        "nome": "RAYSSA MACIEL DOMINGUES SOUZA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 182,
        "numero": 25,
        "nome": "SAMANTA OLIVEIRA FELIX DA SILVA",
        "turma": "8A",
        "status": true,
        "code": "c"
      },
      {
        "id": 183,
        "numero": 1,
        "nome": "ALISSON DA MOTA LEAL",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 184,
        "numero": 2,
        "nome": "ANA JULIA DA SILVA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 185,
        "numero": 3,
        "nome": "ANNA LIVIA DA SILVA UCHOA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 186,
        "numero": 4,
        "nome": "DAVI AUGUSTO DA MOTA SANTOS",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 187,
        "numero": 5,
        "nome": "ENRICO DE ALMEIDA FERREIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 188,
        "numero": 6,
        "nome": "ESTEVAO PEREIRA DE SOUSA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 189,
        "numero": 7,
        "nome": "GABRIELI VICENTE MOREIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 190,
        "numero": 8,
        "nome": "ITALO APARECIDO DOS SANTOS DE OLIVEIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 191,
        "numero": 9,
        "nome": "JOSE ALEXANDRE MAGALHAES MOREIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 192,
        "numero": 10,
        "nome": "JOSE MARCIANO GONCALVES NETO",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 193,
        "numero": 11,
        "nome": "JULIANA IASMIN DE OLIVEIRA ESTEVAM",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 194,
        "numero": 12,
        "nome": "KAUAN NUNES DE OLIVEIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 195,
        "numero": 13,
        "nome": "LARA RAQUELI RIBEIRO DA SILVA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 196,
        "numero": 14,
        "nome": "LUAN APARECIDO CARNEIRO",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 197,
        "numero": 15,
        "nome": "LUCAS DA SILVA SANTIAGO",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 198,
        "numero": 16,
        "nome": "LUCAS RODRIGUES DOS SANTOS",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 199,
        "numero": 17,
        "nome": "MARIA CLARA DE LIMA SILVA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 200,
        "numero": 18,
        "nome": "MARIA CLARA RIBEIRO LOPES",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 201,
        "numero": 19,
        "nome": "MURILO FERNANDES CORREIA DE OLIVEIRA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 202,
        "numero": 20,
        "nome": "NICOLAS GONCALVES DOS SANTOS",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 203,
        "numero": 21,
        "nome": "PABLO AUGUSTO DE MOURA ROCHA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 204,
        "numero": 22,
        "nome": "PEDRO HENRIQUE DOS SANTOS",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 205,
        "numero": 23,
        "nome": "PYETRA ILDA OHASHI DO PRADO BARBOSA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 206,
        "numero": 24,
        "nome": "RAFAEL CAVALCANTI PACHECO",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 207,
        "numero": 25,
        "nome": "RAFAELY DA SILVA OLIVEIRA DOS SANTOS",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 208,
        "numero": 26,
        "nome": "RAISSA GABRIELLE TRONCOSA DURAES",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 209,
        "numero": 27,
        "nome": "SABRINA ALVES DA SILVA",
        "turma": "8B",
        "status": true,
        "code": "c"
      },
      {
        "id": 210,
        "numero": 1,
        "nome": "ANDRE LUIZ DA SILVA JUNIOR",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 211,
        "numero": 2,
        "nome": "ARIEL DAS DORES CARNEIRO",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 212,
        "numero": 3,
        "nome": "CAIO GONCALVES DE MOURA SIQUEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 213,
        "numero": 4,
        "nome": "CRISTHIAN VINICIUS DOM BOSCO OLIVEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 214,
        "numero": 5,
        "nome": "DANILO DA SILVA DE LIMA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 215,
        "numero": 6,
        "nome": "FERNANDA MONIQUE TOLEDO DE OLIVEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 216,
        "numero": 7,
        "nome": "GABRIEL DE OLIVEIRA PIRES",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 217,
        "numero": 8,
        "nome": "GUILHERME AUGUSTO MELLO HILARIO",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 218,
        "numero": 9,
        "nome": "GUSTAVO MATIAS DE LIMA GONCALVES",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 219,
        "numero": 10,
        "nome": "IASMIN FALZOI DOS SANTOS",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 220,
        "numero": 11,
        "nome": "ISAAC HENRIQUE SILVA DE SOUZA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 221,
        "numero": 12,
        "nome": "JENIFER MARIA TEODORO FARIA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 222,
        "numero": 13,
        "nome": "JOAO VICTOR DE LIMA DA SILVA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 223,
        "numero": 14,
        "nome": "JOAO VICTOR OLIVEIRA DE SOUZA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 224,
        "numero": 15,
        "nome": "JONATAN PONTES PEREIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 225,
        "numero": 16,
        "nome": "LUCAS SILVA DE OLIVEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 226,
        "numero": 17,
        "nome": "LUIZ MIGUEL MELLO HILARIO",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 227,
        "numero": 18,
        "nome": "MARIA CLARA DA SILVA OLIVEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 228,
        "numero": 19,
        "nome": "MARIA ESTELA DA SILVA DE OLIVEIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 229,
        "numero": 20,
        "nome": "MARIA FERNANDA GOMES DOS SANTOS",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 230,
        "numero": 21,
        "nome": "NATALIA APARECIDA DA SILVA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 231,
        "numero": 22,
        "nome": "NICOLAS MATHEUS RODRIGUES FAUSTO DE SA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 232,
        "numero": 23,
        "nome": "PEDRO AUGUSTO DE LIMA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 233,
        "numero": 24,
        "nome": "RAFAEL FRANÇA MARTINS",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 234,
        "numero": 25,
        "nome": "RAFAEL FRANCISCO DE LIMA DA SILVA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 235,
        "numero": 26,
        "nome": "ROBSON DE CARVALHO PEREIRA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 236,
        "numero": 27,
        "nome": "TAINA KAUANI SALGADO",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 237,
        "numero": 28,
        "nome": "THALISON F. DE OLIVEIRA DOS SANTOS",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 238,
        "numero": 29,
        "nome": "YSLAINE SILVA DE LUCENA",
        "turma": "8C",
        "status": true,
        "code": "c"
      },
      {
        "id": 239,
        "numero": 1,
        "nome": "AKIANE VITORIA DE SOUZA FRANCISCO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 240,
        "numero": 2,
        "nome": "ANA LIVIA KOIKE MOREIRA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 241,
        "numero": 3,
        "nome": "ANA PAULA DIAS ISRAEL",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 242,
        "numero": 4,
        "nome": "CARLOS VINICIUS DE SOUZA EGYDIO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 243,
        "numero": 5,
        "nome": "EVELIN MILENA DE OLIVEIRA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 244,
        "numero": 6,
        "nome": "GABRIELI ALVES PINTO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 245,
        "numero": 7,
        "nome": "GIOVANA ANDREIA SANTOS DE SOUZA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 246,
        "numero": 8,
        "nome": "GUILHERME MUNIZ ROSA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 247,
        "numero": 9,
        "nome": "JULIANA DA SILVA MATHEUS",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 248,
        "numero": 10,
        "nome": "KAUA RODRIGUES DOS SANTOS",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 249,
        "numero": 11,
        "nome": "LAURA DE LIMA FERREIRA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 250,
        "numero": 12,
        "nome": "LIANDRA APARECIDA DE SIQUEIRA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 251,
        "numero": 13,
        "nome": "LUIZ GUSTAVO RIBEIRO DA SILVA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 252,
        "numero": 14,
        "nome": "LUIZ OTAVIO NAKASHIMA SOARES",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 253,
        "numero": 15,
        "nome": "MAICON TOMAZ RODRIGUES DA SILVA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 254,
        "numero": 16,
        "nome": "MANUELA APARECIDA ALVES COSTA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 255,
        "numero": 17,
        "nome": "MARIA EDUARDA PULCINO GOMES",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 256,
        "numero": 18,
        "nome": "NICOLY BATISTA DA COSTA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 257,
        "numero": 19,
        "nome": "PEDRO HENRIQUE SIQUEIRA RIBEIRO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 258,
        "numero": 20,
        "nome": "REBECA SANTOS DE ALBUQUERQUE",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 259,
        "numero": 21,
        "nome": "RENATA APARECIDA BERNARDES VELASCO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 260,
        "numero": 22,
        "nome": "RODRIGO ARTHUR CASTRO DE CARVALHO",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 261,
        "numero": 23,
        "nome": "SOFIA DOS SANTOS BATIVA",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 262,
        "numero": 24,
        "nome": "THIAGO ANTUNES",
        "turma": "9A",
        "status": true,
        "code": "c"
      },
      {
        "id": 263,
        "numero": 1,
        "nome": "ANA CLARA DA LUZ PEREIRA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 264,
        "numero": 2,
        "nome": "ANA LIVIA DE LIMA DA CONCEICAO",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 265,
        "numero": 3,
        "nome": "BRENO HENRIQUE CHAVES GONZAGA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 266,
        "numero": 4,
        "nome": "DANIEL HENRIQUE CHAGAS DA SILVA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 267,
        "numero": 5,
        "nome": "EMANUELA SIQUEIRA FELBER",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 268,
        "numero": 6,
        "nome": "GABRIEL CANDIDO DE PAULA FERREIRA SILVA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 269,
        "numero": 7,
        "nome": "GUSTAVO LOURENCO DE BRITO DOS SANTOS",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 270,
        "numero": 8,
        "nome": "JUAN GABRIEL DA SILVA SANTOS",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 271,
        "numero": 9,
        "nome": "KETLYN RAMOS NUNES DA SILVA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 272,
        "numero": 10,
        "nome": "LETICIA AUGUSTA SANTOS DE GODOI",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 273,
        "numero": 11,
        "nome": "LUANA RIBEIRO DOS SANTOS",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 274,
        "numero": 12,
        "nome": "LUCAS DOS SANTOS FLORIANO",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 275,
        "numero": 13,
        "nome": "MARIA LUIZA RIBEIRO MONTEIRO",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 276,
        "numero": 14,
        "nome": "MARIANA RIBEIRO DE OLIVEIRA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 277,
        "numero": 15,
        "nome": "NYCOLAS PRADO DA SILVA GOMES",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 278,
        "numero": 16,
        "nome": "PAOLA KAROLINE SOUZA FELIX",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 279,
        "numero": 17,
        "nome": "PEDRO HENRIQUE DOS SANTOS RIBEIRO",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 280,
        "numero": 18,
        "nome": "PEROLA FERREIRA BARBOSA GONCALVES",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 281,
        "numero": 19,
        "nome": "RODRIGO ZACARIAS CORREA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 282,
        "numero": 20,
        "nome": "TAIAN ALVES PINTO RODRIGUES DE ASSIS",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 283,
        "numero": 21,
        "nome": "THIAGO CAETANO FRANÇA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 284,
        "numero": 22,
        "nome": "VITORIA CAROLINA OLIVEIRA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 285,
        "numero": 23,
        "nome": "YASMIN THAYNARA SANTOS MONTEIRO",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 286,
        "numero": 24,
        "nome": "YOHAN SANTOS DA SILVA",
        "turma": "9B",
        "status": true,
        "code": "c"
      },
      {
        "id": 287,
        "numero": 1,
        "nome": "ALINE VITORIA DOS SANTOS MENINO",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 288,
        "numero": 2,
        "nome": "ANA BEATRIZ FERREIRA DE SOUZA MELO",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 289,
        "numero": 3,
        "nome": "ANA JULIA SILVA EUZEBIO",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 290,
        "numero": 4,
        "nome": "ANNA CLARA LAPETINA DOS SANTOS",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 291,
        "numero": 5,
        "nome": "DAVID DE SA TEODORO",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 292,
        "numero": 6,
        "nome": "ESDRAS RAFAEL GONCALVES DOS SANTOS",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 293,
        "numero": 7,
        "nome": "GABRIEL ANTONIO DE MOURA PEREIRA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 294,
        "numero": 8,
        "nome": "GABRIELI GIOVANA ALVES DA SILVA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 295,
        "numero": 9,
        "nome": "GIOVANNA JANSEN DE SOUZA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 296,
        "numero": 10,
        "nome": "JOAO VITOR DE LIMA BARBOSA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 297,
        "numero": 11,
        "nome": "KAIQUE FERNANDES SALGADO",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 298,
        "numero": 12,
        "nome": "KAUAN GONCALVES REZENDE",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 299,
        "numero": 13,
        "nome": "LAURA APARECIDA DOS SANTOS",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 300,
        "numero": 14,
        "nome": "LAVINIA MELLO DE LIMA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 301,
        "numero": 15,
        "nome": "LIVIA BEATRIZ SALGADO DA MOTA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 302,
        "numero": 16,
        "nome": "LIVIA EDUARDA DE OLIVEIRA SANTOS",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 303,
        "numero": 17,
        "nome": "LIVIA MARIA FERREIRA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 304,
        "numero": 18,
        "nome": "LIVIAN LETICIA DA SILVA ALVES",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 305,
        "numero": 19,
        "nome": "LUIZ EDUARDO DE SOUZA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 306,
        "numero": 20,
        "nome": "MARCOS PAULO M. BALLESTRIM DOS SANTOS",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 307,
        "numero": 21,
        "nome": "NATASHA FRANCA ANDRE",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 308,
        "numero": 22,
        "nome": "RAFAEL YAN MONTEIRO BEZERRA",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 309,
        "numero": 23,
        "nome": "RAIANE AGATA DA SILVA LOPES",
        "turma": "9C",
        "status": true,
        "code": "c"
      },
      {
        "id": 310,
        "numero": 24,
        "nome": "VICTOR AUGUSTO DA SILVA FERNANDES",
        "turma": "9C",
        "status": true,
        "code": "c"
      }
    ]
    // Get a new write batch
    const batch = writeBatch(this.firestore);
    //reference to document collection aka DB
    const alunosDB = collection(this.firestore, 'alunos')   
    //500 max
    alunosLista.forEach(d => {
      const docReference = doc(alunosDB)
      batch.set(docReference, d)
    })
    await batch.commit();
    console.log('sended!!!');
  }
}
