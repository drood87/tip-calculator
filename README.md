# tip-calculator Challenge

John and his family are on vacations and are going to 3 different restaurants. The bills are $124, $48 and \$268.

To tip the waiter a fair amount, John created a simple tip calculator(as a function). He likes to tip 20% of the bill when the bill is less then $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:

1. Containing all three tips(one for each bill)
2. Containing all three final paid amounts (bill + tip).

(Note: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

**Bonus**: The app takes your Banks API and saves the amounts with the $ sign in an Array as individual strings.(["$124", "$48", "$268"]). John asks you as a friend if you can help him. He needs help to remove the dollar signs from the array and also to return the final Tip and final Bill in the same format (with dollar sign and tip and final bill each in one array). So in the end you should have 2 arrays containing the Tips and the final Bill as strings with dollarsigns.
