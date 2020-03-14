package kr.co.kucc.cat;

import java.util.Random;

public class RandomEmotionProvider implements EmotionProvider {

    @Override
    public int getEmotion(String word) {
        Random random = new Random();
        return random.nextInt(10);
    }
}
