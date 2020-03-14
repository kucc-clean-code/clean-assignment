package kr.co.kucc.cat.infrastructure;

import kr.co.kucc.cat.Cat;
import kr.co.kucc.cat.CatRepository;

import java.util.Collections;
import java.util.List;

public class EmptyRepository implements CatRepository {
    @Override
    public void save(Cat cat) {

    }

    @Override
    public List<Cat> readAll() {
        return Collections.emptyList();
    }
}
