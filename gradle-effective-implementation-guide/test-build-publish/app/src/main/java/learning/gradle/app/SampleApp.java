package learning.gradle.app;

public class SampleApp {

  public SampleApp() {
  }

  public static void main(final String[] arguments) {
    final SampleApp app = new SampleApp();
    app.welcomeMessage();
  }

  public void welcomeMessage() {
    final String welcomeMessage = readMessage();
    showMessage(welcomeMessage);
  }

  private String readMessage() {
    final App sample = new App();
    final String message = sample.getWelcomeMessage();
    return message;
  }

  private void showMessage(final String message) {
    System.out.println(message);
  }

}
