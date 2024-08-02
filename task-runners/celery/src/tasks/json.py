
@shared_task 
def jsonify(object):
  data = json.dumps(object)
  print(data)
  return data

