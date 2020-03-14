package DTO;

public class CreateMemberDTO {
  private String name;
  private String greetMessage;

  public CreateMemberDTO(String[] args){
    this.name = args[0];
    this.greetMessage = args[1];
  }

  public String getName() {
    return name;
  }

  public String getGreetMessage() {
    return greetMessage;
  }
}
