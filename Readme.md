# SIMPLE ATM SIM USING REACT
## DESCRIPTION OF THE FUNCTIONALITY:

This little project uses React to simulate an ATM machine. It allows the user to select the type of operation to execute, it displays two options using a drop down list, the default value ,the one that is initially display is "select an option", it also allows the user to select from "Deposit" and "Cash Back". Depending on what the user selects then a label is displayed to indicate the type of operation. There are some validations executed to ensure proper handling of the balance account:

1. The submit button is disable every time a value is not correct, for example if the user iputs a negative value, if the amount of the deposit is greatter than the account balance, and every time the type of operation is changed from "Deposit" to "Cash Back" and vice versa.
2. An alert is displayed if the user is trying to withdraw money and the balance is less than the withdrawal amount.
3. The input field only accepts posive real numbers.
4. Every time the user selects a different operation the value in the input field is reset to avoid accidental operations.

## TECHNICAL DESCRIPTION

The project uses the following:

1. Reack useState:
    - Amoumt for the operation to be executed: which can be use for "deposit" or "Cash Back"
    - Account Balace, which temporarily stores the account balance
    - isDeposit which is a state variable used to display the type of operation and to disable or anable the submit button
    - atmMode, which allows to control the interface that is shown to the user: "Deposit" or "Cash Back".
    - validTransaction, which allows to control the submit button disabling or enabling it.
2. The value of the input amount or operation amount is passed as a parameter using the associated state, every time the component is rendered, this allows to erase values used for previous operations.
3. Uses some basic styles to apply margin from top and between components.
4. conditionally renders component based on the selection of the dropdown list that lets the user choose between "Deposit" and "Cash Back"

## FUTURE FUNCTIONALITY

1. Database conectivity. In future version a connection to a externat relational database will be added to store and retrieve information from external data sources.
2. Use of other React Hooks. I plan on using useEffect to manage data base connection and data extraction and saving.
3. Other components associated with a bank account:
    - Transaction history. that will show the transaction made in the past.
    - Printing and reporting of transacgions.


