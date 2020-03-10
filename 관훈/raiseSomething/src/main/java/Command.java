class Command {
  private String name;
  private String[] args;

  Command(String name, String[] args){
    this.name = name;
    this.args = args;
  }

  public String getName() {
    return name;
  }

  public String[] getArgs() {
    return args;
  }
}
