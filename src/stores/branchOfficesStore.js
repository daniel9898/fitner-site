import { observable, computed, action } from "mobx";
import Office from '../models/office';
const offices = [
    new Office('barrio norte', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
    new Office('abasto', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
    new Office('caballito', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
    new Office('almagro', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
    new Office('microcentro', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
    new Office('flores', 'Mansilla 2929','Lunes a Viernes 7 a 23 hs','Sabado 8 a 20 hs','barrionorte@fiter.com.ar', '0810-345-fiter (34837)'),
];

 class BranchOfficesStore {
     @observable officesAux = offices;

     @action filterOffice = office => {
        if(office && office != ''){
            office = office.toLowerCase();
            office = office.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            this.officesAux = offices.filter(off => off.name.includes(office));
        }else{
            this.officesAux = offices;
        }
    }

    @computed get OfficesCount() {
        return this.officesAux.length;
    }
 }

 const officeStore = new BranchOfficesStore();
 export default officeStore;