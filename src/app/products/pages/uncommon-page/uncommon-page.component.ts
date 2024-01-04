import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Emerson'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeName(): void {
    this.name = 'Natalia'
    this.gender = 'female'
  }

  // i18n Plural
  public certificados: string[] = ['Emerson', 'Natalia', 'Juan', 'Pedro', 'Maria']
  public certificadosMap = {
    '=0': 'No se encontraron certificados',
    '=1': 'Se encontró # certificado',
    'other': 'Se encontraron # certificados'
  }

  deleteCertificado(): void {
    this.certificados.pop()
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
