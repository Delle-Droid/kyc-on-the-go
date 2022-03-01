import { LightningElement, track } from 'lwc';
import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Document Name', fieldName: 'name' },

];

export default class DocumentList extends LightningElement {

    @track data = [{
        name:'Test'
    }];
    
    selectedRows = 0;
    
    
    get columns(){
        return [
            { label: 'Document Name', fieldName: 'name' },
            {type:'action', typeAttributes:{rowActions: this.getRowActions}}
        ];
    }

    getRowActions(row,doneCallBack){
        console.log(row);
    }
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }

    handleClick(){
        let el = this.template.querySelector('lightning-datatable');
        console.log(el);
        let selected = el.getSelectedRows();
        console.log(selected);
        selectedRows += selectedRows[selected];
        console.log(selectedRows);
        this.dispatchEvent(new CustomEvent('afterselection', {detail: [...selected]}));
    }
}

