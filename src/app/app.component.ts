import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de tareas CRUD';
  msg = '';
  model: any = {};
  model2: any = {};
  myValue;
  hideUpdate = true;

  employees = [
    { 'name': 'Fazt', position: 'Manager', email: 'fazt@asd.com' },
    { 'name': 'David', position: 'Designer', email: 'dav@gmail.com' },
    { 'name': 'Juan', position: 'Programmer', email: 'juan@hotmail.com' }
  ];


  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Empleado agregado';
  }

  deleteEmployee(i): void {
    const answer = confirm('¿Eliminar registro?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Empleado eliminado';
    }
  }

  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    const i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Empleado actualizado';
      }
    }
    this.hideUpdate = true;
  }

  closeAlert(): void {
    this.msg = '';
  }
}
