import { Component, OnInit, ViewChild } from '@angular/core';
import { Isub } from 'src/app/interfaces/isub';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ShipmentService } from '../../service/shipment.service';


@Component({
  selector: 'app-view-all-shipments',
  templateUrl: './view-all-shipments.component.html',
  styleUrls: ['./view-all-shipments.component.scss']
})
export class ViewAllShipmentsComponent {

  shipments: any[];
  mainShipment: any;
  shipmentDailogue: boolean = false;
  extraShipment: boolean = false;
  statusUpdateDialog: boolean = false;
  @ViewChild('dt') dt: Table;
  sub: string = '';
  visible: boolean = false;
  destination: any;
  arrivedDate: any
  notes: any
  place: any
  updatedMainShipment: any;

  constructor(
    private confirmationService: ConfirmationService,
    private shipmentService: ShipmentService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // document.addEventListener('keydown', this.handleEscapeKey.bind(this));
    this.getAllMainShipments()

  }

  // handleEscapeKey(event: KeyboardEvent) {
  //   if (event.key === 'Escape') {
  //     this.closeExtraDialoge();
  //     this.closeStatusDialoge();
  //   }
  // }

  getAllMainShipments() {
    this.shipmentService.getAllMainShipments().subscribe({
      next: (resposnse) => {
        this.shipments = resposnse;
        console.log(this.shipments);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  showDestinationDialog(shipment: any) {
    this.visible = true;
    this.destination = shipment.destination
  }

  changeDialogStatus(dialogStatus: boolean) {
    this.shipmentDailogue = dialogStatus;
  }

  updateShipmentsData(updatedData: boolean) {
    if (updatedData) {
      this.getAllMainShipments();
    }
  }

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
  editMainShipment(mainShipment: any) {
    this.mainShipment = { ...mainShipment };
    this.shipmentDailogue = true;
  }


  hideDialog(event: any) {
    this.shipmentDailogue = event;
  }

  openNew() {
    this.mainShipment = null;
    this.shipmentDailogue = true;
  }

  openExtraDialoge(mainShipment: any) {
    this.extraShipment = true;
    this.updatedMainShipment = mainShipment
  }

  closeExtraDialoge() {
    this.extraShipment = false;

  }
  openStatusDialoge(mainShipment: any) {
    this.statusUpdateDialog = true;
    this.updatedMainShipment = mainShipment

  }

  closeStatusDialoge() {
    this.statusUpdateDialog = false;

  }


  updateShipmentStatus() {
    // console.log(this.updatedMainShipment);
    let MainShipment = this.updatedMainShipment

    const Body = {
      location: this.place,
      mainShipmentId: MainShipment.id,
      notes: this.notes,
    }

    console.log(Body);


    this.shipmentService.updateStatus(MainShipment.id, Body).subscribe({
      next: (res: any) => {
        console.log(res);
        this.statusUpdateDialog = false


      },
      error: (err: any) => {
        console.log(err);

      }
    })
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




