from celery import shared_task
from models import db, Sum
import time

@shared_task(ignore_result=False)
def sum(a, b):
    s = Sum(sum=int(a+b))
    db.session.add(s)
    db.session.commit()
    return "Hello"

@shared_task(ignore_result=False)
def say_hello():
    return "Hello"