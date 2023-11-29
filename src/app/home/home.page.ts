import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

export interface imgFile {
  name: String;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Objeto de tipo tarea para subir archivo
  fileUploadTask: AngularFireUploadTask;

  // Barra de progreso
  percetageVal: Observable<any>;
  traceSnapshot: Observable<any>;

  // Url para subir el archivo
  UploadedImageURL: Observable<any>;

  // Archivo para subir de tipo imagen
  files: Observable<imgFile[]>;

  // Especificaciones de la imagen
  imgName: string;
  imgSize: number;

  // Estado de progreso
  isFileUploading: boolean;
  isFileUploaded: boolean;

  // Arreglo de elementos para las imágenes
  private filesCollection: AngularFirestoreCollection<imgFile>
  
  constructor(private afs: AngularFirestore, private afStorage:AngularFireStorage) {
    this.isFileUploading=false;
    this.isFileUploaded=false;

    this.filesCollection=afs.collection<imgFile>('imagesCollection');
    this.files=this.filesCollection.valueChanges();
  }

  uploadImage(event:FileList){
    const file:any=event.item(0);

    // Validación de la imagen
    if(file.type.split('/')[0]!=='image'){
      console.log('no se acepta este tipo de archivo');
    return;}

    this.isFileUploading=true;
    this.isFileUploaded=false;

    this.imgName=file.name;

    // Ruta en la nube
    const fileStoragePath='fileStorage/${new Date().getTime()}_${file.name}';

    // Imagen
    const imageRef=this.afStorage.ref(fileStoragePath);

    // Tarea para subir el archivo
  this.fileUploadTask=this.afStorage.upload(fileStoragePath,file);
  }

}