import { Component, OnInit, ViewChild } from '@angular/core';
import { Isub } from 'src/app/interfaces/isub';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-view-shipment-details',
  templateUrl: './view-shipment-details.component.html',
  styleUrls: ['./view-shipment-details.component.scss']
})
export class ViewShipmentDetailsComponent {

  shipments: any[];
  subscription: Isub;
  subscriptionDiaglog: boolean = false;
  extraShipment: boolean = false;
  statusUpdateDialog: boolean = false;
  @ViewChild('dt') dt: Table;
  sub: string = '';
  deleteExtra: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.shipments = [
      { username: '3A-2542R', email: "23/2/2025", phone: '+201089289' },
      { username: '3A-1542R', email: "23/4/2025", phone: '+201089289' },
      { username: '3A-4542R', email: "23/6/2025", phone: '+201089289' },


    ]

    // this.getAllSub();
  }

  // getAllSub() {
  //   this.subscriptionServices.getPopulatedsubscriptions().subscribe({
  //     next: (resposnse) => {
  //       this.subscriptions = resposnse.data;
  //       console.log(this.subscriptions);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // deleteSecondaryMember(SubscriptionsPara: any) {
  //   console.log(SubscriptionsPara.id);
  //   this.confirmationService.confirm({
  //     message:
  //       'هل متأكد من مسح الاشتراك ' +
  //       SubscriptionsPara.attributes.SubType +
  //       ' من نوع العضو ' +
  //       SubscriptionsPara.attributes.MemberType +
  //       ' ?',
  //     header: 'مسح',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.subscriptionServices
  //         .deletesubscriptions(SubscriptionsPara.id)
  //         .subscribe({
  //           next: (resposnse) => {
  //             console.log(resposnse);
  //             this.subscriptions = this.subscriptions.filter((values) => {
  //               values.id !== SubscriptionsPara.id;
  //             });
  //             this.subscription = null;
  //             this.messageService.add({
  //               severity: 'success',
  //               summary: 'Successful',
  //               detail: 'تم مسح الاشتراك ',
  //               life: 3000,
  //             });

  //             this.getAllSub();
  //           },
  //           error: (err) => {
  //             console.log(err);
  //           },
  //         });
  //     },
  //   });
  // }
  // editSub(primaryMemberPara: any) {
  //   this.subscription = { ...primaryMemberPara };
  //   this.subscriptionDiaglog = true;
  // }
  // updatePrimaryMemberData(updateData: boolean) {
  //   if (updateData) {
  //     this.getAllSub();
  //   }
  // }
  // hideDialog(event: any) {
  //   this.subscriptionDiaglog = event;
  // }

  openNew() {
    this.subscription = null;
    this.subscriptionDiaglog = true;
  }


  openExtraDialoge() {
    this.extraShipment = true;
  }
  openStatusDialoge() {
    this.statusUpdateDialog = true;
  }
  openDeleteExtraDialoge() {
    this.deleteExtra = true;
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


}





