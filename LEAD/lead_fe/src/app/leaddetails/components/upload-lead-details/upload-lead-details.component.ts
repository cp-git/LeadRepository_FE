import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { LeadDetails } from '../../class/lead-details';
import { Userdetails } from 'src/app/userdetails/class/userdetails';
import { LeadDetailsService } from '../../services/lead-details.service';
import { UserDetailsService } from 'src/app/userdetails/services/user-details.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-lead-details',
  templateUrl: './upload-lead-details.component.html',
  styleUrls: ['./upload-lead-details.component.scss']
})
export class UploadLeadDetailsComponent implements OnInit {

  userId: number = 0;
  leadDetails = new LeadDetails();
  userDetails = new Userdetails();
  @Output() leadAdded = new EventEmitter<void>();
  constructor(
    private leaddetailsService: LeadDetailsService,
    private userDetailsService: UserDetailsService,
    public dialogRef: MatDialogRef<UploadLeadDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.leadDetails = this.data.lead
    const userIdString = sessionStorage.getItem("userId");
    this.userId = userIdString ? parseInt(userIdString, 10) : 0;
    console.log(this.userId);
    this.getUserDetailsById();

  }
  onNoClick(): void {
    this.dialogRef.close(false);
    // window.location.reload();
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


  updateLead(leadDetails: LeadDetails) {
    this.leadDetails.userId = this.userId
    this.leaddetailsService.updateLeadById(leadDetails.id, leadDetails).subscribe(
      (response) => {
        this.leadAdded.emit();
        alert("lead update successfully")
      }, (error) => {
        alert("failed to add")
      }
    )
  }

}
