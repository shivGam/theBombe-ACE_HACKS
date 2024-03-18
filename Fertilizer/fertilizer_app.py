# # Importing essential libraries and modules

# from flask import Flask, render_template, request
# from markupsafe import Markup
# import numpy as np
# import pandas as pd
# from utils.fertilizer import fertilizer_dic
# from flask_cors import CORS

# # ==============================================================================================

# # ------------------------------------ FLASK APP -------------------------------------------------

# app = Flask(__name__)
# CORS(app)


# # render fertilizer recommendation form page
# @app.route("/")
# def fertilizer_recommendation():
#     title = "Harvestify - Fertilizer Suggestion"
#     return render_template("fertilizer.html", title=title)


# # render fertilizer recommendation result page
# @app.route("/fertilizer-predict", methods=["POST"])
# def fert_recommend():
#     title = "Harvestify - Fertilizer Suggestion"

#     crop_name = str(request.form["cropname"])
#     N = int(request.form["nitrogen"])
#     P = int(request.form["phosphorous"])
#     K = int(request.form["pottasium"])

#     df = pd.read_csv("Data/fertilizer.csv")

#     nr = df[df["Crop"] == crop_name]["N"].iloc[0]
#     pr = df[df["Crop"] == crop_name]["P"].iloc[0]
#     kr = df[df["Crop"] == crop_name]["K"].iloc[0]

#     n = nr - N
#     p = pr - P
#     k = kr - K
#     temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
#     max_value = temp[max(temp.keys())]
#     if max_value == "N":
#         if n < 0:
#             key = "NHigh"
#         else:
#             key = "Nlow"
#     elif max_value == "P":
#         if p < 0:
#             key = "PHigh"
#         else:
#             key = "Plow"
#     else:
#         if k < 0:
#             key = "KHigh"
#         else:
#             key = "Klow"

#     response = Markup(str(fertilizer_dic[key]))
#     print(title)
#     print(response)
#     return {"response": response, "title": title}
#     # return render_template('fertilizer-result.html', recommendation=response, title=title)


# # ===============================================================================================
# if __name__ == "_main_":
#     app.run(debug=True, port=5004)
# Importing essential libraries and modules

from flask import Flask, render_template, request
from markupsafe import Markup
import numpy as np
import pandas as pd
from utils.fertilizer import fertilizer_dic
from flask_cors import CORS

# ==============================================================================================

# ------------------------------------ FLASK APP -------------------------------------------------

app = Flask(__name__)
CORS(app)


# render fertilizer recommendation form page
@app.route("/")
def fertilizer_recommendation():
    title = "Harvestify - Fertilizer Suggestion"
    return render_template("fertilizer.html", title=title)


# render fertilizer recommendation result page
@app.route("/fertilizer-predict", methods=["POST"])
def fert_recommend():
    title = "Harvestify - Fertilizer Suggestion"

    crop_name = str(request.form["cropname"])
    N = int(request.form["nitrogen"])
    P = int(request.form["phosphorous"])
    K = int(request.form["pottasium"])

    df = pd.read_csv("Data/fertilizer.csv")

    nr = df[df["Crop"] == crop_name]["N"].iloc[0]
    pr = df[df["Crop"] == crop_name]["P"].iloc[0]
    kr = df[df["Crop"] == crop_name]["K"].iloc[0]

    n = nr - N
    p = pr - P
    k = kr - K
    temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
    max_value = temp[max(temp.keys())]
    if max_value == "N":
        if n < 0:
            key = "NHigh"
        else:
            key = "Nlow"
    elif max_value == "P":
        if p < 0:
            key = "PHigh"
        else:
            key = "Plow"
    else:
        if k < 0:
            key = "KHigh"
        else:
            key = "Klow"

    response = Markup(str(fertilizer_dic[key]))
    print(title)
    print(response)
    return {"response": response, "title": title}
    # return render_template('fertilizer-result.html', recommendation=response, title=title)


# ===============================================================================================
if __name__ == "__main__":
    app.run(debug=True, port=5004)
