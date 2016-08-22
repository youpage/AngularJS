# AngularJS
## Some AngularJS cool stuff

- Directive that is dependent of ngModel, that restricts the input to numbers only and auto formats the input as a phone number like (541) 754-3010. The field changes its format as the user types.
- Directive that is dependent of ngModel, that restricts the input to numbers only and auto formats the input into currency, ex: $1,234.12 The field changes its format as the user types.
- 3 number inputs that sum up into an additional field. Editing each of the 3 inputs will always update the sum value. The fourth field can also be editable, and whenever user changes this one, its value must be spread across the other 3 fields.
    **Example:**
    ```
    Initial values: #1 = 100 #2 = 200 #3 = 200 #4 = 500
    User interacts with field #3: #1 = 100 #2 = 200 #3 = 300 #4 = 600
    User interacts with field #4 after editing #3: #1 = 76 #2 = 152 #3 = 227 #4 = 455
    ```
- 3 inputs each with maximum char. length 5. When entering the 5th char. in an input the cursor jumps to the next input right after the char. has been inserted. When deleting the 1st char. of an input the cursor jumps at the end of previous input right after that char. has been deleted.
- controllers are loaded only when the route changes
- used ui-router for routes
- randomlly generate a 50 items array with 4 properties. The list can be sorted and filtered by an input field 

## Install and Run
- clone or download the repository
- install globally [http-server](https://www.npmjs.com/package/http-server)
- run http-server from cmd in the repository folder