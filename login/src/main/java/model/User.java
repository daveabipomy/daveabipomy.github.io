package model;

public class User {

    private String userName;
    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

   public User(String userName, String password){
        this.userName = userName;
        this.password = password;
    }

    private boolean flag=false;
    public User(String userName, String password,boolean flag){
        this.userName = userName;
        this.password = password;
        this.flag=flag;
    }

}
