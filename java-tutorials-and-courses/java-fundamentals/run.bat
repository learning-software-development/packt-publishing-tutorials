@ECHO OFF

SET package=%1
SET fileName=%2

java -classpath build/classes %package%.%fileName%
