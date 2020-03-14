package kr.co.kucc.game;

import java.util.List;

public class Arguments {
    private List<String> args;

    public Arguments(List<String> args) {
        this.args = args;
    }

    public String get(int i) {
        return args.get(i);
    }

    public int size() {
        return args.size();
    }
}
