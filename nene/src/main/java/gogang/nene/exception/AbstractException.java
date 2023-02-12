package gogang.nene.exception;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

@Getter
public abstract class AbstractException extends RuntimeException {
    private Map<String, String> validation = new HashMap<>();

    public AbstractException(String message) {
        super(message);
    }

    public AbstractException(String message, Throwable cause) {
        super(message, cause);
    }

    public abstract int statusCode();

    public void addValidation(String field, String errorMessage) {
        validation.put(field, errorMessage);
    }
}
