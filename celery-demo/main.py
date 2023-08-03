from worker import create_celery_app
from models import db
import tasks
from flask import Flask, request
from celery.result import AsyncResult
from celery.schedules import crontab

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///test.db'
db.init_app(app)
cel_app = create_celery_app(app)

@cel_app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Executes every Monday morning at 7:30 a.m.
    sender.add_periodic_task(
        crontab(hour=20, minute=28, day_of_week=4),
        tasks.sum.s(2, 5),
    )


@app.post('/sum')
def sum():
    a = request.form.get('a')
    b = request.form.get('b')
    print(a)
    print(b)
    s = tasks.sum.delay(int(a), int(b))
    return str(s.id)

@app.get('/get-sum/<id>')
def get_sum(id):
    s = AsyncResult(id)
    res = {
        "Ready": s.ready(),
        "Result": s.result if s.ready() else None
    }
    return res


if __name__ == '__main__':
    app.run(debug=True)

