import { LightningElement, wire} from 'lwc';
import fetchAccandCase from '@salesforce/apex/fetchAccCaseDAYtwo.fetchAccandCase';
export default class FetchAccCases extends LightningElement {
    columns=[
        {label:'Account Name', fieldName:'accountName'},
        {label:'Case Number', fieldName:'caseNumber'},
        {label:'Case Subject', fieldName:'caseSubject'},

    ];
    data;
    error;
    @wire(fetchAccandCase)
    fetchACCDATA({error, data}){
        if(data){
            let arrofRecords=[];
           // console.log(data);
            data.forEach(resofAccCases=>{
                //null checking
                if(resofAccCases.Cases && resofAccCases.Cases.length>0){
                    resofAccCases.Cases.forEach(onlyCases=>{
                    arrofRecords.push(
                        {
                          //  Id:onlyCases.Id, //NEEDED FOR KEY-FIELD
                            accountName:resofAccCases.Name,
                            caseNumber:onlyCases.CaseNumber,
                            caseSubject:onlyCases.Subject }

                    );
                });

                }
                

            });
            this.data=arrofRecords;
            this.error=undefined;
          // console.log('this is this.data ->', JSON.stringify(this.data));
        }else if(error){
            this.error=error;
            console.log('this is error message '+error.body.message);
            this.data=undefined;    
        }
    }

}
