import model.User;

import java.util.ArrayList;
import java.util.List;

public class UserDB {
    List<User> userDBS = new ArrayList<>();

    UserDB(){
        userDBS.add(new User("abi","123"));
        userDBS.add(new User("dave","123"));
    }

    public List<User> getUserDBS() {
        return userDBS;
    }
}
