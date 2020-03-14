package kr.co.kucc.game;

import kr.co.kucc.cat.Cat;

import java.util.Optional;

public class SayHiCommand implements Command {
    private Arguments arguments;

    public SayHiCommand(Arguments arguments) {
        this.arguments = arguments;
    }

    @Override
    public void run(App app) {
        Optional<Cat> target = app.getCats()
            .stream()
            .filter(this::hasName)
            .findFirst();

        target.ifPresent(cat -> cat.say("안녕"));
    }

    private boolean hasName(Cat c) {
        return c.getName().equals(arguments.get(0));
    }
}
