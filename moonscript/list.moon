class List 
  items: {}
	insert: (item) => 
	  table.insert @items, item 
  delete: (item) => 
	  table.remove @items, item 
  show: () => 
	  print item for item in @items
