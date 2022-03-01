import { LightningElement , track } from 'lwc';
import VerifyAccountNumber from '@salesforce/apex/ValidateAccountDetailsKyc.VerifyAccountNumber';

export default class KycOnTheGo extends LightningElement {

    accNum ='';
    MAXNUMBEROFSTAGES =  4;
    stageNumber = 1;
    
    @track accountNumberValidity = {
        maxLength : false,
        existsInDb : false
    }

    get displayOptions(){
        return {
            stageOne : this.stageNumber ===1,
            stageTwo : this.stageNumber === 2
        }
    }

    // is called after the user blurs away from the account number input -- makes a callout to the endpoint !!!
    // handleValidate(e) {
    //     let accNo = e.detail.value;
    //     if(accNo.length === 10){
    //         this.accountNumberValidity.maxLength = true;
    //         VerifyAccountNumber({
    //             accountNumber : this.accNum
    //         }).then(res => {
    //         }).catch(exp => {

    //         });
    //     }
    //     else {
    //         this.dispatchEvent(new ShowToastEvent({
    //             variant:'error',
    //             title:'Error',
    //             message:'Account Number Must be 10 digits.'
    //         }));
    //         this.accountNumberValidity.maxLength = false;
    //     }
    // }

    // put all stage validations here 
    onValidateInfo(stageNumber){
        switch(stageNumber){
            case 1:
                if(this.accountNumberValidity.maxLength === true){
                    VerifyAccountNumber({
                        accountNumber : this.accNum
                    }).then(res => {
                        if(res === true){
                            return true;
                        }else {
                            // render a lightning platform message here.
                            return false;
                        }
                    }).catch(exp => {
                        return false;
                    });
            }
            default : return false;
        }
    }

    /**
     * Executes Pre render operations
     * For Example : when stageNumber is 1 => make a callout to check if account number is Valid.
     * @param {*} stageNumber 
     *  should this be async ?? No idea yet!!!
     */
    doNext(stageNumber){
       let dummy = [{
            documentName :'',
            uploaded : false,
            url:'previewUrl '
        }]
    }
    


    handleNext() {
        if(this.onValidateInfo(this.stageNumber)== true 
        && this.stageNumber <= this.MAXNUMBEROFSTAGES 
        && this.doNext(this.stageNumber) == true ){
            this.stageNumber +=1;
        }
    }

    handlePrevious() {
        if(this.onValidateInfo(this.stageNumber)== true && this.stageNumber > 1){
            this.stageNumber -=1;
        }

    }

    handleAfterRowSelection(event) {

    }

}