---
title: Data Validation on Record Update
---

This will show how to process/validate data on your records fields each time they are updated. This will work for any records, whether deals, contacts, leads, or your own custom one. I will be using contacts for this example, but it could be any module. 

To run this every time a record is updated we will use a workflow rule. Go to settings > Automation > Workflow Rules.

Click on the button that says "+ Create Rule"

Name the rule something like "On_Contact_Update" and give a description like "runs a function every time a contact is created or updated"

On the "Execute this workflow rule based on" dropdown select "Record action" then select "Create or Edit" in the next dropdown. Select the box labeled "Repeat this workflow whenever a Contact is edited"

In the condition, select "All Contacts" unless you want to add a filter.


In actions, select function. Then click write your own or just functions if you already have a function to use. 
Now write a function to process the data. You can go to the [phone number validation](/docs/zoho/custom-functions/phone-number-formatting-function) page here which gives an example of a function.

Press save and now this will run every time you edit a record in that module!