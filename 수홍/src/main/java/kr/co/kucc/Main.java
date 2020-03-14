package kr.co.kucc;

import kr.co.kucc.cat.infrastructure.CatFileRepository;
import kr.co.kucc.cat.infrastructure.EmptyRepository;
import kr.co.kucc.game.App;
import kr.co.kucc.game.CommandFactory;

public class Main {

    public static void main(String[] args) {
        App app = new App(
            new CommandFactory(),
            new EmptyRepository());
        app.run();
    }
}
