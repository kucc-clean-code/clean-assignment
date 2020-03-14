package kr.co.kucc.cat.infrastructure;

import kr.co.kucc.cat.Cat;
import kr.co.kucc.cat.CatRepository;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class CatFileRepository implements CatRepository {
    private static final String FILE_NAME = "cat.txt";

    @Override
    public void save(Cat cat) {
        FileOutputStream fileOutputStream = getFileOutputStream();
        saveCat(cat, fileOutputStream);
    }

    // TODO
    @Override
    public List<Cat> readAll() {
        return Collections.emptyList();
    }


    private void saveCat(Cat cat, FileOutputStream fileOutputStream) {
        try {
            fileOutputStream.write(convertToFileContent(cat).getBytes());
            fileOutputStream.close();
        } catch (IOException e) {
            throw new CannotSaveCatException(e);
        }
    }

    private FileOutputStream getFileOutputStream() {
        try {
            return new FileOutputStream(FILE_NAME);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new CannotSaveCatException(e);
        }
    }

    private String convertToFileContent(Cat cat) {
        return String.format("%s|%s|%s\n",
            cat.getName(),
            cat.getEmotion(),
            cat.getEmotionProvider().getClass().getSimpleName()
        );
    }
}
