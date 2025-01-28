from flask import Flask, render_template, request, jsonify
from markupsafe import Markup
import numpy as np
import pandas as pd
from utils.fertilizer import fertilizer_dic
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def fertilizer_recommendation():
    title = "Harvestify - Fertilizer Suggestion"
    return render_template("fertilizer.html", title=title)

@app.route("/fertilizer-predict", methods=["POST"])
def fert_recommend():
    try:
        # Get JSON data instead of form data
        data = request.get_json()
        
        if not data:
            return jsonify(data), 400

        # Extract values from JSON
        crop_name = str(data["crop"])
        N = int(data["nitrogen"])
        P = int(data["phosphorus"])
        K = int(data["potassium"])
        
        if not all([crop_name, N is not None, P is not None, K is not None]):
            return jsonify({"error": "Missing required fields"}), 400

        df = pd.read_csv("Data/fertilizer.csv")

        # Verify crop exists in database
        if not df["Crop"].str.contains(crop_name).any():
            return jsonify({"error": f"Crop '{crop_name}' not found in database"}), 404

        nr = df[df["Crop"] == crop_name]["N"].iloc[0]
        pr = df[df["Crop"] == crop_name]["P"].iloc[0]
        kr = df[df["Crop"] == crop_name]["K"].iloc[0]

        n = nr - N
        p = pr - P
        k = kr - K
        temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
        max_value = temp[max(temp.keys())]
        
        if max_value == "N":
            key = "NHigh" if n < 0 else "Nlow"
        elif max_value == "P":
            key = "PHigh" if p < 0 else "Plow"
        else:
            key = "KHigh" if k < 0 else "Klow"

        response = str(fertilizer_dic[key])
        title = "Harvestify - Fertilizer Suggestion"
        
        return jsonify({
            "response": response,
            "title": title,
            "status": "success"
        })

    except Exception as e:
        return jsonify({
            "error": str(e),
            "status": "error"
        }), 500

if __name__ == "__main__":
    app.run(debug=True, port=5004)