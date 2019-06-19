import java.util.ArrayList;
import java.util.List;

public class UserDB {
    List<User> userDBS = new ArrayList<>();

    UserDB(){
        userDBS.add(new User("berry","pass1"));
        userDBS.add(new User("lizy","pass2"));
    }

    public List<User> getUserDBS() {
        return userDBS;
    }
}
