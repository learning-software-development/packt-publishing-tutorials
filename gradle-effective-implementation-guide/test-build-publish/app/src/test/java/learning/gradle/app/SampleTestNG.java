package learning.gradle.app;

import org.testng.annotations.Test;
import org.testng.AssertJUnit;

public class SampleTestNG {

  @Test
  public void readWelcomeMessage() {
    final App classUnderTest = new App();
    final String realMessage = classUnderTest.getWelcomeMessage();

    final String expectedMessage = "Welcome to Gradle.";

    AssertJUnit.assertEquals("Get text from properties file", expectedMessage, realMessage);
  }

}
