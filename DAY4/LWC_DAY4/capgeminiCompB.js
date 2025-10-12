import { LightningElement, api } from 'lwc';
const COLUMN = [
    { label: 'Contact Name', fieldName: 'LastName' },
    { label: 'Contact Name', fieldName: 'Phone' }
];
export default class CapgeminiCompB extends LightningElement {
    columns = COLUMN;
    @api contacts;

}
