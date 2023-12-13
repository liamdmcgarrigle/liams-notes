---
title: Phone Number Formatting Function
---

## Add parameters
Ensure to map the correct phone number field to the correct value from the crm.
In the code below I mapped the mobile number to the variable `mobileNumberRaw`.


## The Code

:::note

We will need to be careful to only update information when it is needed. We don't want to update it every time because it will use more credits and also will add many items to the history of records, causing audits and following a records history much harder.

:::

```js title="Phone_Number_Formatter.deluge showLineNumbers
adminTaskUserId = 1234; //user id to assign tasks to. Could also add an extra parameter to assign it to the record owner

//checks if it is already the format we want using regex
//It is important to check because we don't want to update unnecessarily 
if (mobileNumberRaw != "" && !mobileNumberRaw.matches("[(][0-9]{3}[)][ \s\.][0-9]{3}[-\s\.][0-9]{4}") ){

    //this uses regex to remove all special characters 
    mobileNumber = mobileNumberRaw.replaceAll("[-(\)/. {}<>,]", "");

    //this if statement removes the 1 from the start of the number if there is one
    //NA Phone numbers cant start with a 1, so this is a good way to remove the country code
    if (mobileNumber.left(1) == "1") {
        mobileNumber = mobileNumber.removeFirstOccurence("1");
    }

    if (mobileNumber.length() != 10) {
        //this runs if the length of the number is not 10 characters
        //gives someone a task to fix the invalid phone number
        taskMap = Map();
        taskMap.put("Who_Id", contactId);
        taskMap.put("Due_Date", zoho.currentdate);
        taskMap.put("Owner", adminTaskUserId);
        taskMap.put("Subject", "Fix Invalid Number");
        taskMap.put("Description", "The mobile number is either less or more than 10 numberical characters. Please update it to a valid number");
        zohoTaskRespon = zoho.crm.createRecord("Tasks", taskMap);
    } else {
        //formats the number and updates the record
        formattedMobileNum = "(" + mobileNumber.subString(0,3) + ") " + mobileNumber.subString(3,6) + "-" + mobileNumber.subString(6,10);
        newNumberField = "{Mobile: " + formattedMobileNum + "}";
        zohoContactRespon = zoho.crm.updateRecord("Contacts", contactId, newNumberField);
    }
}
```
This will format the number to (215) 555-5555. If you want any other format you will need to change the regex on line 5 and the expression that reformats the number on line 28.