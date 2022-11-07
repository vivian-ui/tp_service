import { Injectable } from '@angular/core';
class Task {
  title: string;
  dia: string;
  horario: string;
}
@Injectable()
export class DisiciplinasService {
  private tasks: Task[] = [
    { title: 'Flutter', dia: 'Segunda-feira-feira', horario: '19:00' },
    { title: 'Marketing', dia: 'Terça-feira', horario: '20:50' },
    { title: 'Marketing', dia: 'Quarta-feira', horario: '19:00' },
    { title: 'Java', dia: 'Quinta-feira', horario: '19:00' },
    { title: 'Angular', dia: 'Sexta-feira', horario: '19:00' },
    { title: 'Prototipagem', dia: 'Sábado', horario: '08:00' },
    { title: 'Projeto-TCC', dia: 'Sábado-feira', horario: '11:30' },
  ];

  constructor() {}

  add(title: string, dia: string, horario: string) {
    this.tasks.push({ title, dia, horario });
  }
  remove(index: number) {
    this.tasks.splice(index, 1);
  }
  getList() {
    return this.tasks;
  }
}
