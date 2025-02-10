package adaptordesignpattern;
 
// Structure for the elements in the
// priority queue
 class item {
  public int value;
  public int priority;
   
 };
 
class GFG {
 
  // Store the element of a priority queue
  static item[] pr = new item[100000];
 
  // Pointer to the last index
  static int size = -1;
  // Function to insert a new element
  // into priority queue
  static void enqueue(int value, int priority)
  {
    // Increase the size
    size++;
 
    // Insert the element
    pr[size] = new item();
//  
    pr[size].value = value;
    pr[size].priority = priority;
   
   
  }
 
  // Function to check the top element
  static int peek()
  {
    int highestPriority = Integer.MIN_VALUE;
    
    int ind = -1;
 
    // Check for the element with
    // highest priority
    for (int i = 0; i <= size; i++) {
 
      // If priority is same choose
      // the element with the
      // highest value
    	 System.out.println("highestPriority"+highestPriority);
    	    System.out.println("pr[i]  :"+pr[i].priority);
    	    System.out.println("ind   :"+ind);
      if (highestPriority == pr[i].priority
          && ind > -1
          && pr[ind].value < pr[i].value) {
        highestPriority = pr[i].priority;
        ind = i;
      }
      else if (highestPriority < pr[i].priority) {
        highestPriority = pr[i].priority;
        ind = i;
       
      }
    }
   
 
    // Return position of the element
    return ind;
  }
 
  // Function to remove the element with
  // the highest priority
  static void dequeue()
  {
    // Find the position of the element
    // with highest priority
    int ind = peek();
 System.out.println("dequeue  peek  :"+ind);
    // Shift the element one index before
    // from the position of the element
    // with highest priority is found
    for (int i = ind; i < size; i++) {
      pr[i] = pr[i + 1];
    }
 
    // Decrease the size of the
    // priority queue by one
    size--;
  }
 
  public static void main(String[] args)
  {
    // Function Call to insert elements
    // as per the priority
    enqueue(10, 2);
    enqueue(14, 4);
    enqueue(16, 4);
    enqueue(12, 3);
 
    // Stores the top element
    // at the moment
    int ind = peek();
 
    System.out.println(pr[ind].value);
 
    // Dequeue the top element
    dequeue();
 
    // Check the top element
    ind = peek();
    System.out.println(pr[ind].value);
 
    // Dequeue the top element
    dequeue();
 
    // Check the top element
    ind = peek();
    System.out.println(pr[ind].value);
  }
}
 
// this code is contributed by phasing17