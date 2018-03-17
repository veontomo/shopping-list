package it.neatec.server.controller;

import io.reactivex.Single;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller for retrieving categories.
 * This is a "warm-up" code.
 */
@RestController
public class CategoryController {

    @GetMapping("/categories")
    @CrossOrigin(origins = "http://localhost:4200")
    public Single<List<String>> getCategories() {
        var data = List.of("food", "household", "other");
        return Single.just(data);
    }

}
