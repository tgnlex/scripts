from handlers import error
class Config:
  enable_utc = True
  broker_url = 'amqp://guest:guest@localhost:5672//'
  results_backend='db+sqlite:///sqlite.celery.db'
  database_table_schemas = {
    'task': 'celery',
    'group': 'celery'
  }
  
  task_annotations = {'*': {'on_failure': error}}
  
