package activities;

// Activity 12: Creating a Simple Class in Java
public class Animal {

  public static void main(String[] args) {
    Animal a = new Animal();
    a.setFamily("Bos taurus");
    a.setName("Cow");

    Animal b = new Animal();
    b.setFamily("Capra hircus");
    b.setName("Goat");

    Animal c = new Animal(2, 2, 2);
    c.setFamily("Anatidae");
    c.setName("Mallard");

    System.out.println(a.getName());
    System.out.println(b.getName());
    System.out.println(c.getFamily());
  }

    private int legs;
    private int ears;
    private int eyes;
    private String family;
    private String name;

    public Animal() {
        this.legs = 4;
        this.ears = 2;
        this.eyes = 2;
    }

    public Animal(int legs, int ears, int eyes) {
        this.legs = legs;
        this.ears = ears;
        this.eyes = eyes;
    }

    public void setFamily(String family) {
      this.family = family;
    }

    public String getFamily() {
      return this.family;
    }

    public void setName(String name) {
      this.name = name;
    }

    public String getName() {
      return this.name;
    }
}
