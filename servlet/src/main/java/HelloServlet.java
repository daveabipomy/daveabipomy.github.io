import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form method='post'>");
        out.print("<p>Please click the button</p>");
        out.print("Name: <input type='text' name='name'> <br><br>");
        out.print("Email: <input type='email' name='email'><br><br>");
        out.print("Problem: <input type='text' name='problem'><br><br>");
        out.print("Problem Description: <textarea rows=4 cols=50> </textarea><br><br>");
        out.print("<input type='submit'>");
        out.print("</form>");
        out.print("</body></html>");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String support_ticket_id = "CSTECH"+Integer.toString(generateReferenceNum());
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CStechSupport</title>");
        out.print("<link rel='stylesheet' href='styleme.css' /><head/");
        out.print("<body><p>Thank you! "+name+" for contacting us. You should receive reply from us with in 24 hrs in your email address ");
        out.print(email+". Let us know in our support email suport@gmail.com");
        out.print("if you don’t receive reply within 24 hrs. Please be sure to attach your reference ");
        out.print(support_ticket_id+" in your email.");
        out.print("</p></body></html");
    }

    public int generateReferenceNum(){
        int ref=0;
        Random rand = new Random();
        for(int i=0;i<10;i++){
            ref=rand.nextInt();
        }
        return ref;
    }
}
