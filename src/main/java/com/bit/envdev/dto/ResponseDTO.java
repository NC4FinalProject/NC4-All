package com.bit.envdev.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResponseDTO<T> {
    private T item;
    private List<T> items;
    private int errorCode;
    private String errorMessage;
    private int statusCode;
}
