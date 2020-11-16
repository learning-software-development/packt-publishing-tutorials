/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package learning.gradle.app;

import java.util.ResourceBundle;

public class App {

  /**
   * Get <code>messages.properties</code> file and read value for <em>welcome</em>
   * key.
   *
   * @return Value for <em>welcome</em> key from <code>messages.properties</code>
   */
  public String getWelcomeMessage() {
    final ResourceBundle resourceBundle = ResourceBundle.getBundle("sample.messages");
    final String message = resourceBundle.getString("welcome");
    return message;
  }

  public String getGreeting() {
    return "Hello World!";
  }

  public static void main(String[] args) {
    System.out.println(new App().getGreeting());
  }
}
