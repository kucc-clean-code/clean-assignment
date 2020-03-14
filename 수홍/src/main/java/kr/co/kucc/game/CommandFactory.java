package kr.co.kucc.game;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommandFactory {
    public Command getCommand(String command) {
        List<String> parsedCommand = new ArrayList<>(Arrays.asList(command.split(" ")));

        switch (parsedCommand.get(0)) {
            case "status":
                return new ShowStatusCommand();
            case "create":
                return new CreateCatCommand(new Arguments(parsedCommand
                .subList(1, parsedCommand.size())));
            case "hello":
                return new SayHiCommand(new Arguments(parsedCommand
                    .subList(1, parsedCommand.size())));
            case "quit":
                return new AppStopCommand();
        }
        throw new CannotFindCommandException();
    }
}
