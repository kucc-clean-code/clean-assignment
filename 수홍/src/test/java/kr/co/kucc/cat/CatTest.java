package kr.co.kucc.cat;

import kr.co.kucc.cat.Cat;
import kr.co.kucc.cat.EmotionProvider;
import org.junit.Test;

import static org.junit.Assert.*;

public class CatTest {

    @Test
    public void 이름_지정() {
        // given
        String name = "댕댕이";

        // when
        Cat cat = new Cat(name, null);

        // then
        assertEquals(name, cat.getName());
    }

    @Test
    public void 인사를_하면_호감도가_올라간다() {
        String name = "댕댕이";
        Cat cat = new Cat(name, new TestEmotionProvider());

        // when
        int before = cat.getEmotion();
        cat.say("hihi");
        int after = cat.getEmotion();

        // then
        assertEquals(0, before);
        assertEquals(10, after);
    }

    private static class TestEmotionProvider implements EmotionProvider {

        @Override
        public int getEmotion(String word) {
            return 10;
        }
    }
}