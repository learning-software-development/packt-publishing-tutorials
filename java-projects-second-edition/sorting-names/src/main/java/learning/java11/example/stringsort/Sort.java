package learning.java11.example.stringsort;

public class Sort {

  public static void main(String[] args) {

    System.out.println("Hello World!");
    var actualNames = new String[] { "Johnson", "Wilson", "Wilkinson", "Abraham", "Dagobert" };

    Sort.sort(actualNames);
    for (final String name : actualNames) {
      System.out.println(name);
    }
  }

  public static void sort(String names[]) {
    var n = names.length;
    while (n > 1) {
      for (var j = 0; j < n - 1; j++) {
        if (names[j].compareTo(names[j + 1]) > 0) {
          final var tmp = names[j + 1];
          names[j + 1] = names[j];
          names[j] = tmp;
        }
      }
      n--;
    }
  }
}
