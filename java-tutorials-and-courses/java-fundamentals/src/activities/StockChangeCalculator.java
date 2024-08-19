package activities;

import java.util.Optional;

import util.UserInput;

// Activity 3: Calculating the Percent Increase or Decrease of Financial Instruments
public class StockChangeCalculator {

    public static void main(String[] args) {

        UserInput input = UserInput.getInstance();

        System.out.print("Enter the stock symbol: ");
        String stockSymbol = input.getNextString();

        System.out.printf("Enter %s's day 1 value: ", stockSymbol);
        Optional<Float> value1 = input.getNextFloat();

        System.out.printf("Enter %s's day 2 value: ", stockSymbol);
        Optional<Float> value2 = input.getNextFloat();

        float dayOnevalue = value1.orElse(0.0f);
        float dayTwovalue = value2.orElse(0.0f);

        System.out.printf("%S has changed %.2f%% in one day.", stockSymbol, (((dayOnevalue - dayTwovalue) / 100) * dayOnevalue) * -1);

        input.shutdown();
    }
}
