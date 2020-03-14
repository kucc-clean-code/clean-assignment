public class Member {
  private String name;
  private String greetMessage;
  private int satiety;

  public void setGreetMessage(String greetMessage) {
    this.greetMessage = greetMessage;
  }

  Member(){};

  public Member(String name, String greetMessage){
    this.name = name;
    this.greetMessage = greetMessage;
    this.satiety = 100;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getSatiety() {
    return satiety;
  }

  public void setSatiety(int satiety) {
    this.satiety = satiety;
  }

  public void subtractSatiety(int satiety){
    this.satiety -= satiety;
  }

  public void addSatiety(int satiety){
    this.satiety += satiety;
  }

  public String getGreetMessage() {
    return greetMessage;
  }
}
