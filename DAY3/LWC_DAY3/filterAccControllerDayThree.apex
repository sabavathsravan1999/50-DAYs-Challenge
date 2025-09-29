/*
Implement search functionality in LWC to filter accounts based on name. 
SEARCH FILED IN THE PARENT 
RESULT IS IN THE CHILD*/

public class filterAccControllerDayThree {
	@AuraEnabled(cacheable=true)
	public static List<Account> filterAcccActivity(String accountName){
		if(String.isBlank(accountName)){
			return [Select Id, Name, Phone from Account ORDER BY CreatedDate DESC Limit 10];
		}
		else{
			return [Select Id, Name, Phone from Account where Name LIKE :'%'+accountName+'%'];
		}

	}
}
