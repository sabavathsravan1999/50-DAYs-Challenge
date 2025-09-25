import { LightningElement, wire} from 'lwc';
import fetchContacts from '@salesforce/apex/fetchContactControllerDayOne.fetchContacts';
export default class DisplayContactsDayOne extends LightningElement {
    colomns=[
        {label: 'Name', fieldName:'Name'},
        {label: 'Phone number', fieldName:'Phone'}
    ];
    contactsData;
    @wire(fetchContacts)
    wirefetched({data, error}){
        if(data){
            this.contactsData=data;

        }
        else if(error){
            console.log("this is error "+error);
        }
    }


}
