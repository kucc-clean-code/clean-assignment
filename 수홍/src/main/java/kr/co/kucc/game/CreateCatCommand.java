package kr.co.kucc.game;

import kr.co.kucc.cat.Cat;
import kr.co.kucc.cat.RandomEmotionProvider;

public class CreateCatCommand implements Command {
    private Arguments arguments;

    public CreateCatCommand(Arguments arguments) {
        if (arguments.size() != 1) {
            throw new IllegalArgumentException();
        }
        this.arguments = arguments;
    }

    @Override
    public void run(App app) {
        app.addCat(new Cat(arguments.get(0), new RandomEmotionProvider()));
    }
}
