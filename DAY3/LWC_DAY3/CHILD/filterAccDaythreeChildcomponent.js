/*Implement search functionality in LWC to filter accounts based on name. 
SEARCH FILED IN THE PARENT 
RESULT IS IN THE CHILD*/
import { LightningElement, api} from 'lwc';
export default class FilterAccDaythreeChildcomponent extends LightningElement {
    @api parentdata=[];
    columns=[
        {label:'Account Id', fieldName:'Id'},
        {label:'Account Name', fieldName:'Name'},
        {label:'Account Phone', fieldName:'Phone'}
    ];


}  
