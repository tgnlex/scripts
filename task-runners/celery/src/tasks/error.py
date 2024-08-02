from celery import shared_task 

@shared_task
def error(request, exc, traceback):
    error = 'Task {0} raised exception :{1!r}\m{2!r}'.format(request.id, exc, traceback)
    print(error)
    return error 