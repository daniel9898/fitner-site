import { observable, computed, action } from "mobx"

export class BranchOfficesStore {
    @observable offices = ['aaaaa','bbbbbb','cccccc'];


    constructor() {

    }

    @computed get filterOffices() {

    }
}