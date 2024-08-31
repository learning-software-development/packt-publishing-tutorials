package exercises;

// Exercise 11: Working with Classes and Objects
// Exercise 12: Using the Person Class
public class Person {

    public static void main(String[] args) {
        Person me = new Person(30);
        Person myNeighbour = new Person();
        Person lecturer = new Person();

        me.walk(20);
        me.walk(5);
        me.sleep();

        myNeighbour.walk(20);
        myNeighbour.walk(5);
        myNeighbour.sleep();

        lecturer.walk(20);
        lecturer.walk(5);
        lecturer.sleep();
    }

    private int age;
    private int height;
    private String name;

    public Person() {
        this(28);
    }

    public Person(int myAge) {
        this.age = myAge;
    }

    public void walk(int speed) {
        //Do walking operations here
        if (speed > 10) {
            System.out.println("Walking...");
        }
    }

    public void sleep() {
        //Do sleeping operations here
        System.out.println("Sleeping...");
    }

    private void takeShower() {
        //Do take shower operations here
        System.out.println("Taking a shower...");
    }

}
