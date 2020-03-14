package kr.co.kucc.game;

public class AppStopCommand implements Command {
    @Override
    public void run(App app) {
        app.stop();
    }
}
