import { Injectable } from '@angular/core';
// importación local
import {Camera,CameraResultType,CameraSource,Photo} from '@capacitor/camera'
import {Filesystem,Directory} from '@capacitor/filesystem'
import {Preferences} from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  constructor() { }
  public async addNewToGallery(){
    // Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality:100
    })
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
