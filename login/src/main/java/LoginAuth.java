
import model.User;

import javax.servlet.*;
import javax.servlet.Filter;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class LoginAuth implements Filter {
    List<User> users = new ArrayList<>();

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        users = new UserDB().getUserDBS();
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        String username = servletRequest.getParameter("username");
        String password=servletRequest.getParameter(("password"));

        PrintWriter out = servletResponse.getWriter();
        boolean flag = false;
        if(username!=null && password!=null) {
            for (User u : users) {
                if (username.equals(u.getUserName()) && password.equals(u.getPassword())) {

                    filterChain.doFilter(servletRequest, servletResponse);
                    flag = true;
                    break;
                }
            }
        }
        if(!flag){
            RequestDispatcher dispatcher = servletRequest.getRequestDispatcher("login.jsp");
            dispatcher.forward(servletRequest,servletResponse);

        }

    }

    @Override
    public void destroy() {

    }
}
