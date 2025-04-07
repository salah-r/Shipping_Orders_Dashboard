import { Injectable } from '@angular/core';
import { ApiConnService } from 'src/app/services/data-management/api/api-conn.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(private apiService: ApiConnService) { }

  endPoint: string = 'api/MainShipment';

  getAllMainShipments() {
    return this.apiService.getData(`${this.endPoint}`);
  }

  getPopulatedMainShipments() {
    return this.apiService.getData(`${this.endPoint}?populate=*`);
  }

  getFilteredMainShipments(filter: string) {
    return this.apiService.getData(`${this.endPoint}?populate=*&${filter}`);
  }

  getMainShipmentById(id: number) {
    return this.apiService.getDataById(this.endPoint, id);
  }

  addMainShipment(data: any) {
    return this.apiService.addData(this.endPoint, data);
  }


  editMainShipment(id: number, data: any) {
    return this.apiService.updateMainShipmentData(this.endPoint, id, data);
  }


  updateStatus(id: number, data: any) {
    return this.apiService.upadteMainShipmentStatus(this.endPoint, id, data);
  }

  deleteMainShipment(id: number, data: any) {
    return this.apiService.deleteMainShipment(this.endPoint, id, data);
  }
}
