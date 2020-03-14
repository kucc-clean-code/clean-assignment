package kr.co.kucc.cat;

import java.io.Serializable;
import java.util.Random;

public class Cat implements Serializable {
    private final String name;
    private EmotionProvider emotionProvider;
    private int emotion = 0;

    public Cat(String name,
               EmotionProvider emotionProvider) {
        this.name = name;
        this.emotionProvider = emotionProvider;
    }


    public int say(String word) {
        this.emotion += emotionProvider.getEmotion(word);
        return this.emotion;
    }


    public int getEmotion() {
        return emotion;
    }


    public String getName() {
        return name;
    }

    public EmotionProvider getEmotionProvider() {
        return emotionProvider;
    }
}
