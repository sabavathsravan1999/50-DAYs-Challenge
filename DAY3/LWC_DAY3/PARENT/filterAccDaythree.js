/*Implement search functionality in LWC to filter accounts based on name. 
SEARCH FILED IN THE PARENT 
RESULT IS IN THE CHILD*/

import { LightningElement, wire} from 'lwc';
import filterAcccActivity from '@salesforce/apex/filterAccControllerDayThree.filterAcccActivity';
export default class FilterAccDaythree extends LightningElement {
    accountName;
    data;
    error;
    onchangeHandle(event){
        this.accountName=event.target.value;
    }
    @wire(filterAcccActivity, {accountName:'$accountName'})
    fetchaccounts({error, data}){
        if(data){
            this.data=data;
            console.log('this is data ', JSON.stringify(this.data));
            this.error=undefined;
        }else if(error){
            this.error=error;
            console.log('this is error body: '+ error.body.message());
            this.data=undefined;
        }
    }
    connectedCallback() {
        console.log('this is data ', JSON.stringify(this.data));

    }


}
