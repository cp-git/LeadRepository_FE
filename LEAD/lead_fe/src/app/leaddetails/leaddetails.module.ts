import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { AddLeadDetailsComponent } from './components/add-lead-details/add-lead-details.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { UploadLeadDetailsComponent } from './components/upload-lead-details/upload-lead-details.component';

@NgModule({
  declarations: [
    LeadDetailsComponent,
    AddLeadDetailsComponent,
    UploadLeadDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    BrowserModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class LeaddetailsModule { }
