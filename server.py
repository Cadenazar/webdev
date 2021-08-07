
import flask
from flask import Flask, render_template
import os

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

@app.route("/Contact_result")

def Contact_result():
    return(render_template("Contact_result.html"))

@app.route("/results")

def result():
    return(render_template("results.html"))



if __name__ == "__main__":
    app.run("0.0.0.0",port=os.getenv('PORT'))