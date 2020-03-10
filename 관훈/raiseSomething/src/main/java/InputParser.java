import java.util.Arrays;

class InputParser {
  Command parseCommand(String input){
    String[] splittedInput = input.toLowerCase().trim().split(" ");

    String name = splittedInput[0];
    String[] args = Arrays.copyOfRange(splittedInput,1, splittedInput.length);

    return new Command(name, args);
  }
}
