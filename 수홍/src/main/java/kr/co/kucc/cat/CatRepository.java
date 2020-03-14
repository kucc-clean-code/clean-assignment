package kr.co.kucc.cat;

import java.util.List;

public interface CatRepository {
    void save(Cat cat);

    List<Cat> readAll();
}
