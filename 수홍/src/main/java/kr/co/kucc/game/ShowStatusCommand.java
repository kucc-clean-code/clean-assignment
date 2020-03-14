package kr.co.kucc.game;

public class ShowStatusCommand implements Command {
    @Override
    public void run(App app) {
        app.getCats().forEach(cat -> {
            System.out.println(String.format("[%s] 감정 %d",
                cat.getName(),
                cat.getEmotion()));
        });
    }
}
