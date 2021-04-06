IF NOT EXIST build\classes (
  mkdir out
)

javac @options src/tutorial/HelloWorld.java
