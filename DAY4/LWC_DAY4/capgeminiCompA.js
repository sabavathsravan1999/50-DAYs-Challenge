import { LightningElement, wire } from 'lwc';
import getaccCon from '@salesforce/apex/getAccConforCapgeminiINterview.getaccCon';
/*const action=[
    {label:'View', name:'view'},
    {label:'Edit', name:'edit'},
    {label:'Delete', name:'delete'}

];*/
const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Phone', fieldName: 'Phone' },
    {
        label: 'Contact', type: 'button',
        typeAttributes: {
            label: 'Contact',
            name: 'contact',
            variant: 'brand'
        }
    }
];
export default class CapgeminiCompA extends LightningElement {
    columns = COLUMNS;
    account;
    contacts = null;
    @wire(getaccCon)
    allaccCon({ error, data }) {
        if (data) {
            this.account = data;
            console.log('data of', data);
        } else if (error) {
            console.log(error);
        }
    }

    onrwoHandelr(event) {
        const action_name = event.detail.action.name;
        //console.log(action_name);
        const row_detail = event.detail.row;
        if (action_name === 'contact') {
            if (row_detail.Contacts.length > 0) {
                this.contacts = row_detail.Contacts;
                console.log('contact row ->', this.contacts);
            }
        }
    }

    /* handlerowActions(event){
         const action_name=event.detail.action.name; // tells whataction is clied like view, edit, delete 
         console.log('what is the action anme ', action_name);
         const row_detail=event.detail.row; //tells about the data inside the seleted row
         console.log('tells about the row data ', row_detail);
         console.log('tells about the row of contact data  ', row_detail.Contacts);
         switch (action_name){
             case 'view':
                 console.log('action name is -->', action_name);
                 //perform actions
                 break;
             case 'edit':
                 console.log('action name is -->', action_name);
                 //perform actions
 
                 break;
             case 'delete':
                 console.log('action name is -->', action_name);
                 //perform actions
 
                 break;
             default:
                 console.log('Unknown action:', action_name);
         }
 
 
     }*/

}
