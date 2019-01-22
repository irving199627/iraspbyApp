import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireObject } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {
  items: Observable<any>;
  temp: Observable<any>;
  itemRef: AngularFireObject<any>;
  sensorRef: AngularFireObject<any>;
  sensorTierraRef: AngularFireObject<any>;
  baseRef = 'home/';
  tempValue;
  constructor( public http: HttpClient,
               public db: AngularFireDatabase ) {
              this.itemRef = this.db.object('home/luces');
  }

  obtenerLuces( consulta ) {
    return this.db.object(`home/${consulta}`).valueChanges();
  }

  updateLuzCocina( val ) {
    this.itemRef.update({luz_cocina: val});
  }

  updateLuzSala( val ) {
    this.itemRef.update({luz_sala: val});
  }

  updateLuz4( val ) {
    this.itemRef.update({luz4: val});
  }
  updateLuz5( val ) {
    this.itemRef.update({luz5: val});
  }
  updateLuz6( val ) {
    this.itemRef.update({luz6: val});
  }
  updateLuz7( val ) {
    this.itemRef.update({luz7: val});
  }
  updateLuz8( val ) {
    this.itemRef.update({luz8: val});
  }
  updateLuz9( val ) {
    this.itemRef.update({luz9: val});
  }

  getDatos() {
    this.temp = this.db.object(`${this.baseRef}sensores/temperatura`).valueChanges();
    this.temp.subscribe(temperatura => {
      this.tempValue = temperatura.temp;
      
    });
  }

}
