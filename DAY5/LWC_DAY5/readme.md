
Linkedin Result video: https://www.linkedin.com/posts/sabavath-sravan-87834a19b_day5-salesforce-salesforcedeveloper-activity-7416480882493976576-ildI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC7b4FwBgvP9Je3kJ7FWP7Hnh3vOafKkID0

#DAY5 LWC + Apex to PDF + EMAIL
Salesforce LWC + APEX to PDF without Visualforce (Spring '26)
Built an end-to-end solution using Lightning Web Components (LWC) and pure Apex 💡
📌 Scenario: LWC + Apex to PDF + EMAIL
 1. Create an LWC form to capture user details like Name, Phone, and Email.
 2. On submit, the data is used to create a Contact record and also show Toast message on the screen after successful creation of contact.
 3. Generated a PDF using pure Apex (without Visualforce)
 4. Automatically sent the generated PDF via email to the created Contact

This approach avoids Visualforce completely and keeps the solution modern, lightweight, and scalable using LWC + Apex only.
NOTE: You will understand the Blob, 
ContentVersion(Title, PathOnClient, VersionData, FirstPublishLocationId),
Messaging.EmailFileAttachment(setFileName(), setBody(),setContentType()), 
Messagin.SingleEmailMessage(setSubjejct(), setToAddresses(), setPlainTextBody(), setFileAttachment()),
ShowToastEvent(Title,, message, variant, mode)
