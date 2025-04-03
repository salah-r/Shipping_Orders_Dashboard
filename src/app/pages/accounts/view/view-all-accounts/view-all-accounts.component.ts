import { Component, OnInit, ViewChild } from '@angular/core';
import { Isub } from 'src/app/interfaces/isub';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountService } from '../../sevice/account.service';

@Component({
  selector: 'app-view-all-accounts',
  templateUrl: './view-all-accounts.component.html',
  styleUrls: ['./view-all-accounts.component.scss']
})
export class ViewAllAccountsComponent {
  users: any[];
  subscription: Isub;
  accountDialogue: boolean = false;
  @ViewChild('dt') dt: Table;
  sub: string = '';
  user!: any;

  constructor(
    private confirmationService: ConfirmationService,
    private accountService: AccountService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.getAllUsers();
  }

  getAllUsers() {
    this.accountService.getAllUsers().subscribe({
      next: (resposnse) => {
        console.log(resposnse);

        this.users = resposnse;
        // console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteUser(user: any) {
    console.log(user.id);
    this.confirmationService.confirm({
      message:
        'هل متأكد من مسح العضو ' +
        user.fristName +
        ' ?',
      header: 'مسح',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.accountService
          .deleteUser(user.id)
          .subscribe({
            next: (resposnse) => {
              console.log(resposnse);
              this.users = this.users.filter((values) => {
                values.id !== user.id;
              });
              this.user = null;
              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'تم مسح العضو ',
                life: 3000,
              });

              this.getAllUsers();
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
    });
  }


  editUser(user: any) {
    this.user = { ...user };
    this.accountDialogue = true;
  }
  // updatePrimaryMemberData(updateData: boolean) {
  //   if (updateData) {
  //     this.getAllSub();
  //   }
  // }
  // hideDialog(event: any) {
  //   this.accountDialogue = event;
  // }

  openNew() {
    this.user = null;
    this.accountDialogue = true;
  }

  // onSearchInputChange(event: Event) {
  //   if (this.dt) {
  //     this.sub = (event.target as HTMLInputElement).value;
  //     this.dt.filterGlobal(this.sub, 'contains');
  //   }
  // }

  // clearSearch(table: Table) {
  //   table.clear();
  //   this.sub = '';
  // }
  changeDialogStatus(dialogStatus: boolean) {
    this.accountDialogue = dialogStatus;
  }

  UpdateOwnerData(updatedData: boolean) {
    if (updatedData) {
      this.getAllUsers();
    }
  }

  edituserData(user: any) {
    this.user = { ...user };
    this.accountDialogue = true;
  }


  hideDialog(event: boolean) {
    this.accountDialogue = event;
    // Optional: If you need to perform any cleanup or refresh
    if (!event) {
      console.log('closed');

      // Add any cleanup code here
    }
  }
}

