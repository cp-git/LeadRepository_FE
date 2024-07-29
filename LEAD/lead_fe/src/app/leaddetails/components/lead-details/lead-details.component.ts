import { Component, OnInit } from '@angular/core';
import { LeadDetailsService } from '../../services/lead-details.service';
import { LeadDetails } from '../../class/lead-details';
import { MatDialog } from '@angular/material/dialog';
import { AddLeadDetailsComponent } from '../add-lead-details/add-lead-details.component';
import { Router } from '@angular/router';
import { UserdetailsModule } from 'src/app/userdetails/userdetails.module';
import { UserDetailsService } from 'src/app/userdetails/services/user-details.service';
import { Userdetails } from 'src/app/userdetails/class/userdetails';
import { UploadLeadDetailsComponent } from '../upload-lead-details/upload-lead-details.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.scss']
})
export class LeadDetailsComponent implements OnInit {

  selectedFile!: File;
  userId: number = 0;
  data: [] = [];
  leadDetails: LeadDetails[] = [];
  userDetails = new Userdetails();

  searchParams = {
    companyName: '',
    recruiterName: '',
    recruiterMail: '',
    positionName:'',
    jobLocation:''
  };


  results: any[] = [];


  constructor(
    private leaddetailsService: LeadDetailsService,
    private dialog: MatDialog,
    private router: Router,
    private userDetailsService: UserDetailsService,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    const userIdString = sessionStorage.getItem("userId");
    this.userId = userIdString ? parseInt(userIdString, 10) : 0;
    console.log(this.userId);
    this.getLeadDetailsByUserId(this.userId);
    this.getUserDetailsById()
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click();
  }

  createLead(leadDetails: LeadDetails) {
    this.leaddetailsService.createLeadDetails(leadDetails).subscribe(
      (response) => {
        alert("lead added successfully")
      }, (error) => {
        alert("failed to add")
      }
    )
  }

  getLeadDetailsByUserId(userId: number) {
    this.leaddetailsService.getLeadDetailsByUserId(userId).subscribe(
      (response) => {
        this.leadDetails = response;
      }, (error) => {
        console.log("faild to get data");

      }
    )
  }

  onLogout() {
    this.router.navigate(['/']);
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile);
      this.leaddetailsService.uploadExcelFile(this.userId, formData).subscribe(
        (response) => {
          console.log(response);
          this.data = response;
          this.getLeadDetailsByUserId(this.userId);
          alert('File uploaded successfully');
        },
        (error) => {
          alert('Failed to upload file');
        }
      );
    }
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(AddLeadDetailsComponent, {
      // data: { invoice: invoice }
    });
    dialogRef.componentInstance.leadAdded.subscribe(() => {
      this.getLeadDetailsByUserId(this.userId);
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });
  }

  updateLead(lead: LeadDetails): void {
    const dialogRef = this.dialog.open(UploadLeadDetailsComponent, {
      data: { lead: lead }
    });
    dialogRef.componentInstance.leadAdded.subscribe(() => {
      this.getLeadDetailsByUserId(this.userId);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });

  }

  deleteLeadDetailsById(id: number) {
    this.leaddetailsService.deleteLeadDetailsById(id).subscribe(
      (response) => {
        alert("Lead delete successfully")
        this.getLeadDetailsByUserId(this.userId);
      }, (error) => {
        alert("fail to delete")
      }
    )
  }

  getUserDetailsById() {
    this.userDetailsService.getUserDetailsById(this.userId).subscribe(
      (response) => {
        this.userDetails = response;
        console.log(JSON.stringify(this.userDetails));

      }, (error) => {
        alert("failed to get user");
      }
    )
  }

  onSearch() {
    const params: any = {};
    if (this.searchParams.companyName) params.companyName = this.searchParams.companyName;
    if (this.searchParams.recruiterName) params.recruiterName = this.searchParams.recruiterName;
    if (this.searchParams.recruiterMail) params.recruiterMail = this.searchParams.recruiterMail;
    if (this.searchParams.positionName) params.positionName = this.searchParams.positionName;
    if (this.searchParams.jobLocation) params.jobLocation = this.searchParams.jobLocation;

    this.http.get<any[]>('http://localhost:8080/lead/searchupdate', { params })
      .subscribe(data => {
        this.results = data;
        this.leadDetails=this.results;
      
      });
  }
  
  clearData(){
    this.searchParams.companyName='';
    this.searchParams.recruiterMail='';
    this.searchParams.recruiterName='';
    this.searchParams.positionName='';
    this.searchParams.jobLocation='';
    
  }
}
