
public class getAccConforCapgeminiINterview {
	@AuraEnabled(Cacheable=true)
	public static List<Account> getaccCon(){
		try{
			return [Select Id, Name, Phone, (SELECT Id, LastName,Phone from Contacts) from Account where Id IN (select AccountId from Contact) ORDER BY CreatedDate DESC LIMIT 10];
		}catch(Exception e){
			throw new AuraHandledException(e.getMessage());
		}
	}
}
