import flask


app = flask.Flask(__name__)


@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/first_steps')
def page5():
    return flask.render_template('first_steps.html')
