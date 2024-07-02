class Counter 
  @count: 0
	add: => 
    @@count += 1 
  subtract: => 
	  @@count -= 1
	show: => 
	  print @@count
  
