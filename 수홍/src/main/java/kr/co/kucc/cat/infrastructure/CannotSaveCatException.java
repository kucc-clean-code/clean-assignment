package kr.co.kucc.cat.infrastructure;

public class CannotSaveCatException extends RuntimeException {
    public CannotSaveCatException(Throwable cause) {
        super(cause);
    }
}
