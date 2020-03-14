import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.Scanner;

class Game {
  static void start () {
    Scanner scanner = new Scanner(System.in);

    Command command;
    Translator translator = new Translator();
    Manager manager = new Manager(new President("지수"));

    while(true){
      System.out.print("\n명령어를 입력해주세요 : ");

      command = translator.translate(scanner.nextLine());
      if(command.getName().equals("quit")){
        return;
      }

      manager.execute(command);
    }
  }
}
