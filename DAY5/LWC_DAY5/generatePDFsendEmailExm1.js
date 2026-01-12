import { LightningElement } from 'lwc';
import getpdf from '@salesforce/apex/GeneratepgfControlerExp1.getpdf';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class GeneratePDFsendEmailExm1 extends LightningElement {
    conname='';
	Phone='';
	Email='';
	handlechange(event){
		this[event.target.name]=event.target.value;
	}
    handleclick(event){
		     const wrap={conname:this.conname, Phone:this.Phone, Email:this.Email};
      /*  getpdf({name:this.conname, Phone:this.Phone, Email:this.Email})*/
        getpdf({cw : wrap})
		.then(result => {
            const ev=new ShowToastEvent({
                title:'Data Pdf send to Email',
                message:result.Id+' inserted and pdf sent to email',
                variant:'success',
                mode:'dismissable'
            });
            this.dispatchEvent(ev);
        })
        .catch(error => {
            console.log(error);
        });

}
}
