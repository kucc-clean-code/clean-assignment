import DTO.CreateMemberDTO;

import java.io.IOException;

class Manager {
  private President president;

  Manager(President president) {
    this.president = president;
  }

  void execute(Command command) {
    String commandName = command.getName();
    String[] commandArgs = command.getArgs();

    if ("status".equals(commandName)) {
      this.president.describeMembers();
    }

    else if ("create".equals(commandName)) {
      if (commandArgs.length < 2) {
        throw new IllegalArgumentException("입력 인수가 부족합니다. 이름과 인삿말을 입력해주세요.");
      }

      this.president.hireNewMember(new CreateMemberDTO(command.getArgs()));
    }

    else if ("sayhi".equals(commandName)) {
      if (commandArgs.length < 1) {
        throw new IllegalArgumentException("입력 인수가 부족합니다. 이름을 입력해주세요.");
      }

      this.president.sayHi(commandArgs);
    }

    else if ("feed".equals(commandName)) {
      if (commandArgs.length < 1) {
        throw new IllegalArgumentException("입력 인수가 부족합니다. 이름을 입력해주세요.");
      }

      this.president.feed(commandArgs);
    }

    else if ("save".equals(commandName)) {
      try {
        this.president.save();
        System.out.println("저장되었습니다.");
      } catch (IOException e){
        System.out.println("저장에 실패하였습니다.");
      }
    }

    else if ("help".equals(commandName)) {
      this.help();
    }

    tick();
  }

  private void help() {
    System.out.println("\n사용가능한 명령어는 다음과 같습니다");
    System.out.println("status : 모든 KUCC 멤버들의 정보를 출력한다");
    System.out.println("create [이름] [인삿말] : 새로운 KUCC 멤버를 생성합니다.");
    System.out.println("sayHi [이름] : 입력한 이름의 회원에게 인사합니다.");
    System.out.println("feed [이름] : 입력한 이름의 회원에게 삼겹살을 사줍니다.");
    System.out.println("save : 현재 멤버들의 상태를 저장합니다.");
    System.out.println("quit : 게임을 종료합니다.");
  }

  private void tick(){
    for(Member member : this.president.getMembers()){
      member.setSatiety(member.getSatiety() - 1);
    }
  }
}
