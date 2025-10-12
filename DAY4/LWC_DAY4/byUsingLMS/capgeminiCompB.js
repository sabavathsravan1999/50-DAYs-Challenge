import { LightningElement, api, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import MESSGAE_CHANNEL from '@salesforce/messageChannel/capgeminidatatransfer__c';
const COLUMN = [
    { label: 'Contact Name', fieldName: 'LastName' },
    { label: 'Contact Name', fieldName: 'Phone' }
];
export default class CapgeminiCompB extends LightningElement {
    @wire(MessageContext)
    messageContext;
    columns = COLUMN;
    @api AccountName;
    @api contacts;
    subscribe = null;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        if (!this.subscribe) {
            this.subscribe = subscribe(this.messageContext, MESSGAE_CHANNEL, (message) => {
                this.messageHandler(message)
            }
            );
        }
    }
    messageHandler(message) {
        this.contacts = message.contactsofChannel;
        this.AccountName = message.accountName;
        // console.log('thisi comp b ', this.AccountName);
    }
    unsubscribeToMessageChannel() {
        if (this.subscribe) {
            unsubscribe(this.subscribe);
            this.subscribe = null;
        }
    }

}
