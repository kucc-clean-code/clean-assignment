import DTO.CreateMemberDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;

class President {
  private String name;
  private List<Member> members;

  President(String name) {
    ObjectMapper objectMapper = new ObjectMapper();

    this.name = name;
    try {
      String initialData = new Scanner(new File("./data.json")).useDelimiter("\\Z").next();
      this.members = objectMapper.readValue(initialData, objectMapper.getTypeFactory().constructCollectionType(List.class, Member.class));
    }catch(JsonProcessingException e){
      System.out.println(e);
      System.out.println("JSONProcessingException");
      this.members = new ArrayList<Member>();
    }catch (IOException e){
      System.out.println(e);
      System.out.println("IOException");
      this.members = new ArrayList<Member>();
    }
  }

  public void describeMembers(){
    if(this.members.isEmpty()){
      System.out.println("멤버가 아무도 없어요 ㅠ.ㅠ");
      return;
    }

    System.out.println("\n이름\t\t인삿말\t\t포만감\n");

    for(Member member : this.members){
      System.out.println(member.getName() + "\t\t" + member.getGreetMessage() + "\t\t" + member.getSatiety());
    }
  }

  public void hireNewMember(CreateMemberDTO createMemberDTO){
    if(this.isDuplicateMember((createMemberDTO.getName()))){
      System.out.println(createMemberDTO.getName() + "은 이미 존재하는 회원입니다.");
      System.out.println("현재 동아리 총 인원 : " + this.members.size() + "명");
      return;
    }

    Member newMember = new Member(createMemberDTO.getName(), createMemberDTO.getGreetMessage());
    this.members.add(newMember);

    System.out.println("멤버 " + createMemberDTO.getName() + "이 KUCC에 가입했어요!");
    System.out.println("현재 동아리 총 인원 : " + this.members.size() + "명");
  }

  public void sayHi(String[] args){
    String name = args[0];

    for(Member member : this.members){
      if(member.getName().equals(name)){
        System.out.println(member.getName() + " : " + member.getGreetMessage());
        break;
      }
    }
  }

    public void feed(String[] args) {
    String name = args[0];

    for(Member member : this.members){
      if(member.getName().equals(name)){
        member.setSatiety(101);
        System.out.println(member.getName() + "는 " + this.name + "과 함께 고품콩에서 삼겹살을 맛있게 먹고 포만감이 올랐습니다.");
        break;
      }
    }
  }

  public void save() throws IOException {
    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter writer = objectMapper.writer(new DefaultPrettyPrinter());

    writer.writeValue(new File("./data.json"), this.members);
  }

  private boolean isDuplicateMember(String name){

    for(Member member : this.members){
      if(member.getName().equals(name)){
        return true;
      }
    }

    return false;
  }

  public List<Member> getMembers() {
    return members;
  }
}
