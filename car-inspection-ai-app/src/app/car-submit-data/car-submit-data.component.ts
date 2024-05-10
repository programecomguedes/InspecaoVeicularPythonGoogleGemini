import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-car-submit-data',
  templateUrl: './car-submit-data.component.html',
  styleUrl: './car-submit-data.component.scss',
  providers: [MessageService]
})
export class CarSubmitDataComponent {
  uploadedFiles: any[] = [];
  apiResult: any = null;
  loading: boolean = false;
  // hasSelectedFiles: boolean = false;
  // showEvaluateInfo: boolean = false;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  onUpload(event: any) {
    const formData = new FormData();

    for (let file of (event as UploadEvent).files) {
      formData.append("file[]", file);
      this.uploadedFiles.push(file); // remover depois
    }

    this.loading = true;
    this.http.post('http://localhost:5000/risk-analysis', formData).subscribe({
      next: (response) => {
        this.apiResult = response;
        this.uploadedFiles = [];
        // this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Upload Error', detail: error.message });
      }
    });
  }

  onSelect() {
    this.apiResult = null;
    // this.hasSelectedFiles = true;
    // this.showEvaluateInfo = false;
  }
}
