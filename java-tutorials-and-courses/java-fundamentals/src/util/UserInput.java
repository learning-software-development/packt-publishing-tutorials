package util;

import java.util.Optional;
import java.util.Scanner;

public class UserInput {

    private static UserInput instance;
    private Scanner scanner;

    private UserInput() {
        scanner = new Scanner(System.in);
    }

    public static UserInput getInstance() {
        if (instance == null) {
            instance = new UserInput();
        }
        return instance;
    }

    public String getNextString() {
        return scanner.nextLine();
    }

    public Optional<Integer> getNextInteger() {
        if (scanner.hasNextInt()) {
            return Optional.of(scanner.nextInt());
        } else {
            System.out.println("Not Found: " + scanner.next());
            return Optional.empty();
        }
    }

    public Optional<Float> getNextFloat() {
        if (scanner.hasNextFloat()) {
            return Optional.of(scanner.nextFloat());
        } else {
            System.out.println("Not Found: " + scanner.next());
            return Optional.empty();
        }
    }

    public void shutdown() {
      scanner.close();
      instance = null;
    }

}
