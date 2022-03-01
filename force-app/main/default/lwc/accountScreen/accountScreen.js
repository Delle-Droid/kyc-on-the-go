import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountScreen extends LightningElement {
   
    accNum ='';

    handleChange(e){
        this.accNum = e.detail.value;
    }
    
    // validate() {
    //     this.dispatchEvent(new CustomEvent('validate', {detail:{value:this.accNum}}));
    // }
}