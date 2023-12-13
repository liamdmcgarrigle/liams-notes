---
title: Phone Number Format
---


```js title="phone-number-example.js" showLineNumbers
//replace "phone-field-api-name" with the api name of the phone field you want to use
const phoneField = ZDK.Page.getField("phone-field-api-name");

function isNumberValid(phoneNum)
{
    //this if block is checking if the number is 10 digits and returns errors if  not
    if (phoneField.getValue() == "") {
        return;
    } else if (phoneNum.toString().length < 10) {
        phoneField.showError("Phone number is too short");
        return;
    } else if (phoneNum.toString().length > 10) {
        phoneField.showError("Phone number is too long");
        return;
    }

    //the code below runs if the number has 10 digits
    //It formats the number into this format: (215) 555-5555 then saves that value to the phone field
    const formattedNumber = "(" + phoneNum.substring(0, 3) + ") " + phoneNum.substring(3, 6) + "-" + phoneNum.substring(6, 10);
    phoneField.setValue(formattedNumber);
}

//this removes all of the special characters from the phone number
const number = phoneField.getValue().replace(/[-(\)/. {}<>,]/g, "");

//this runs the function
isNumberValid(number);
```

If you want to use a different format you can replace line number 19 with:

(215)555-5555
```js
const formattedNumber = "(" + phoneNum.substring(0, 3) + ")" + phoneNum.substring(3, 6) + "-" + phoneNum.substring(6, 10);
```

215-555-5555
```js
const formattedNumber = phoneNum.substring(0, 3) + "-" + phoneNum.substring(3, 6) + "-" + phoneNum.substring(6, 10);
```

215 555 5555
```js
const formattedNumber = phoneNum.substring(0, 3) + " " + phoneNum.substring(3, 6) + " " + phoneNum.substring(6, 10);
```

2155555555
```js
const formattedNumber = phoneNum;
```