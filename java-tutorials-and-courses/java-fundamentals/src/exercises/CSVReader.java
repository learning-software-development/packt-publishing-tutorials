package exercises;

import java.io.BufferedReader;
import java.io.Closeable;
import java.io.IOException;

// Exercise 23: Building a CSV Reader
public class CSVReader implements Closeable {

  private final BufferedReader reader;
  private int lineCount = 0;

  public CSVReader(BufferedReader reader) throws IOException {
    this.reader = reader;

    // Ignores the header
    reader.readLine();
  }

  public String[] readRow() throws IOException {
    String line = reader.readLine();
    if (line == null) {
      return null;
    }
    lineCount++;

    return line.split(",");
  }

  public void close() throws IOException {
    this.reader.close();
  }

  public int getLineCount() {
    return lineCount;
  }
}
