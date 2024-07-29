import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LeadDetails } from '../../class/lead-details';
import { LeadDetailsService } from '../../services/lead-details.service';
import { Userdetails } from 'src/app/userdetails/class/userdetails';
import { UserDetailsService } from 'src/app/userdetails/services/user-details.service';

@Component({
  selector: 'app-add-lead-details',
  templateUrl: './add-lead-details.component.html',
  styleUrls: ['./add-lead-details.component.scss']
})
export class AddLeadDetailsComponent implements OnInit {

  userId: number = 0;
  leadDetails = new LeadDetails();
  userDetails = new Userdetails();
  @Output() leadAdded = new EventEmitter<void>();
  constructor(
    private leaddetailsService: LeadDetailsService,
    private userDetailsService: UserDetailsService,
    public dialogRef: MatDialogRef<AddLeadDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
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


  createLead(leadDetails: LeadDetails) {
    this.leadDetails.userId = this.userId
    this.leaddetailsService.createLeadDetails(leadDetails).subscribe(
      (response) => {
        this.leadAdded.emit();
        alert("lead added successfully")
      }, (error) => {
        alert("failed to add")
      }
    )
  }

}
