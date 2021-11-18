DIR="./build/classes"

if [ ! -d "$DIR" ]; then
  mkdir -p build/classes
fi

javac @options @classes
