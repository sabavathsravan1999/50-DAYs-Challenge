public class fetchContactControllerDayOne {
	@AuraEnabled(cacheable=true)
	public static List<Contact> fetchContacts(){
		return [Select Id, Name, Phone from Contact ORDER BY CreatedDate DESC LIMIT 10];
		
	}
}
