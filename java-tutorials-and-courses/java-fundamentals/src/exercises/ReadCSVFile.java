package exercises;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

// Exercise 22: Reading a CSV File
public class ReadCSVFile {

  public static void main(String[] args) throws IOException {
    String fileName = args[0];

    FileReader fileReader = new FileReader(fileName);
    try (BufferedReader reader = new BufferedReader(fileReader)) {
      String line;
      int lineCounter = -1;
      while ((line = reader.readLine()) != null) {
        lineCounter++;
        // Ignore the header
        if (lineCounter == 0) {
          continue;
        }
        String[] split = line.split(",");
        System.out.printf("%d - %s\n", lineCounter, split[1]);
      }
    }
  }
}