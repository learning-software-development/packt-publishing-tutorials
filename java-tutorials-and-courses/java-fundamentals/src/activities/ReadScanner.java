package activities;

import java.util.Optional;

import util.UserInput;

// Activity 2: Reading Values from the User and Performing Operations Using the Scanner Class
public class ReadScanner {

    public static void main(String[] args) {
        UserInput input = UserInput.getInstance();

        System.out.print("Enter a number: ");
        Optional<Integer> value1 = input.getNextInteger();

        System.out.print("Enter 2nd number: ");
        Optional<Integer> value2 = input.getNextInteger();

        int num1 = value1.orElse(0);
        int num2 = value2.orElse(0);

        System.out.printf("The sum is %d.", (num1 + num2));

        input.shutdown();
    }
}
