public class fetchAccCaseDAYtwo {
	@AuraEnabled(cacheable=true)
	public static List<Account> fetchAccandCase(){
		try{
			List<Account> acc=[Select Id, Name, Phone ,(SELECT Id, CaseNumber, Subject from Cases) from Account where Id IN (select AccountId from Case) LIMIT 10];
			return  acc;

		}
		catch(Exception e){
			throw new AuraHandledException('this is the error of controller '+e.getMessage());

		}
		
	}
}
