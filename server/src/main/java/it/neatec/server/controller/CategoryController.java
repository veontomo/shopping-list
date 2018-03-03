package it.neatec.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Controller for retrieving categories.
 *
 * This is a "warm-up" code.
 */
@RestController
public class CategoryController {
    @GetMapping("/categories")
    public List<String> getCategories(){
        return new ArrayList<String>(){{
            add("food");
            add("household");
            add("other");
        }};
    }
}