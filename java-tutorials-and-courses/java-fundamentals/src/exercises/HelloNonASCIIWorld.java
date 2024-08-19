package exercises;

import java.nio.charset.Charset;

// Displaying Non-ASCII Characters
public class HelloNonASCIIWorld {

    public static void main(String[] args) {

        // System.setProperty("file.encoding", "UTF-8");
        System.out.println("Non-ASCII characters: ☺");
        System.out.println("∀x ∈ ℝ: ⌈x⌉ = −⌊-x⌋");
        System.out.println("π ≅ " + 3.1415926535); // + is used to concatenate

        // Method returns a string of character encoding
        // used by using System.getProperty()
        String defaultencoding
                = System.getProperty("file.encoding");

        System.out.println("Default Charset: "
                + defaultencoding);

        // Getting character encoding by java.nio.charset
        System.out.println("Default Charset: "
                + Charset.defaultCharset());
    }
}
