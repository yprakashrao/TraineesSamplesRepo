package list1;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


public class ClassD {
    
    public static void main(String[] args) throws IOException, InterruptedException {
      String url = "https://api.github.com/users/BhiseShubham";
      HttpRequest request=HttpRequest.newBuilder().GET().uri(URI.create(url)).build();
      HttpClient client = HttpClient.newBuilder().build();
      HttpResponse response= client.send(request, HttpResponse.BodyHandlers.ofString());
      
      System.out.println(response.statusCode());
      System.out.println(response.body());
    }
}
