class Translator {
  private InputParser inputParser;

  Translator(){
    this.inputParser = new InputParser();
  }

  Command translate(String message) {
    return inputParser.parseCommand(message);
  }
}
