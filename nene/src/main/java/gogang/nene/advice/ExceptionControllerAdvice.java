package gogang.nene.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import gogang.nene.exception.AbstractException;
import gogang.nene.response.ErrorResponse;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ResponseBody
    @ExceptionHandler(AbstractException.class)
    public ResponseEntity<ErrorResponse> validException(AbstractException e) {
        ErrorResponse body = ErrorResponse.builder()
                .code(String.valueOf(e.statusCode()))
                .message(e.getMessage())
                .validation(e.getValidation())
                .build();

        return ResponseEntity.status(e.statusCode())
                .body(body);
    }

}
