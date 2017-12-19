import { Component,ChangeDetectorRef } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/uploads';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fileuploaded = false;
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private changeDetector: ChangeDetectorRef){}
  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
         console.log(`file uploaded status is ${status}`);
         console.log(`progress is ${item.isUploaded}`);
         if(item.isUploaded== true){
          this.fileuploaded = true;
         }
     };
     this.uploader.onProgressItem = (progress: any) => {
       this.changeDetector.detectChanges();
      }
     
  }

}
