import flask
from flask import Flask
from flask.templating import render_template

app = Flask("__main__")

@app.route("/")

def base_route():
  return(render_template("Homepage.html"))

@app.route("/Homepage")

def homepage():
  return(render_template("Homepage.html"))

@app.route("/partselector")

def partselector():
    return(render_template("partselector.html"))

@app.route("/Contact")

def contact():
    return(render_template("Contact.html"))


@app.route("/results")

def result():
    return(render_template("results.html"))


app.run("0.0.0.0", port=80)