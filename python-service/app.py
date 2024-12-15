# from flask import Flask, request, jsonify
# from flask_cors import CORS

# import pickle
# import numpy as np

# # Load the model and scaler
# scaler = pickle.load(open('./models/scaler.pkl', 'rb'))
# model = pickle.load(open('./models/model.pkl', 'rb'))

# app = Flask(__name__)
# CORS(app)
# # Default route for '/'
# @app.route("/")
# def home():
#     return "Assalamoalaikm and Welcome to the Career Recommendation API! Use the /predict endpoint to get recommendations."





# import numpy as np
# from sklearn.preprocessing import StandardScaler
# import pickle

# # Define class_names and load the necessary models (as you did before)
# class_names = ['Lawyer', 'Doctor', 'Government Officer', 'Artist', 'Unknown',
#                'Software Engineer', 'Teacher', 'Business Owner', 'Scientist',
#                'Banker', 'Writer', 'Accountant', 'Designer',
#                'Construction Engineer', 'Game Developer', 'Stock Investor',
#                'Real Estate Developer']

# # Assuming you have already saved the scaler and model
# # scaler = pickle.load(open("Models/scaler.pkl", 'rb'))
# # model = pickle.load(open("Models/model.pkl", 'rb'))

# def Recommendations(gender, part_time_job, absence_days, extracurricular_activities,
#                     weekly_self_study_hours, math_score, history_score, physics_score,
#                     chemistry_score, biology_score, english_score, geography_score,
#                     total_score, average_score):
#     # Encode categorical variables
#     gender_encoded = 1 if gender.lower() == 'female' else 0
#     part_time_job_encoded = 1 if part_time_job else 0
#     extracurricular_activities_encoded = 1 if extracurricular_activities else 0
    
#     # Create feature array
#     feature_array = np.array([[gender_encoded, part_time_job_encoded, absence_days, extracurricular_activities_encoded,
#                                weekly_self_study_hours, math_score, history_score, physics_score,
#                                chemistry_score, biology_score, english_score, geography_score,
#                                total_score, average_score]])
    
#     # Scale features
#     scaled_features = scaler.transform(feature_array)
    
#     # Predict using the model
#     probabilities = model.predict_proba(scaled_features)
    
#     # Get top five predicted classes along with their probabilities
#     top_classes_idx = np.argsort(-probabilities[0])[:5]
#     top_classes_names_probs = [(class_names[idx], probabilities[0][idx]) for idx in top_classes_idx]
    
#     return top_classes_names_probs




# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Extracting the input data directly
#         # data = request.get_json()

#         gender = 'male'
#         part_time_job = False
#         absence_days = 2
#         extracurricular_activities = False
#         weekly_self_study_hours = 12
#         math_score = 12
#         history_score =12 
#         physics_score = 12
#         chemistry_score = 12
#         biology_score = 12
#         english_score = 12
#         geography_score = 12
#         total_score = 12
#         average_score = 12

#         # Process the input data (as per your logic)
#         recommendations = Recommendations(
#             gender, part_time_job, absence_days, extracurricular_activities,
#             weekly_self_study_hours, math_score, history_score, physics_score,
#             chemistry_score, biology_score, english_score, geography_score,
#             total_score, average_score
#         )

#         return jsonify({'recommendations': recommendations})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 400



# if __name__ == '__main__':
#     app.run(port=5001)


















# from flask import Flask, request, jsonify
# import numpy as np

# app = Flask(__name__)

# @app.route('/predict', methods=['POST'])
# def recommendations():
#     data = request.json
#     print(data)

#     # Extract data from the request
#     gender = data['gender']
#     part_time_job = data['part_time_job']
#     absence_days = data['absence_days']
#     extracurricular_activities = data['extracurricular_activities']
#     weekly_self_study_hours = data['weekly_self_study_hours']
#     math_score = data['math_score']
#     history_score = data['history_score']
#     physics_score = data['physics_score']
#     chemistry_score = data['chemistry_score']
#     biology_score = data['biology_score']
#     english_score = data['english_score']
#     geography_score = data['geography_score']
#     total_score = data['total_score']
#     average_score = data['average_score']

#     # Your function to process the data
#     result = Recommendations(gender, part_time_job, absence_days, extracurricular_activities,
#                              weekly_self_study_hours, math_score, history_score, physics_score,
#                              chemistry_score, biology_score, english_score, geography_score,
#                              total_score, average_score)

#     return jsonify(result)

# def Recommendations(gender, part_time_job, absence_days, extracurricular_activities,
#                     weekly_self_study_hours, math_score, history_score, physics_score,
#                     chemistry_score, biology_score, english_score, geography_score,
#                     total_score, average_score):
#     gender_encoded = 1 if gender.lower() == 'female' else 0
#     part_time_job_encoded = 1 if part_time_job else 0
#     extracurricular_activities_encoded = 1 if extracurricular_activities else 0

#     # Create feature array
#     feature_array = np.array([[gender_encoded, part_time_job_encoded, absence_days, extracurricular_activities_encoded,
#                                weekly_self_study_hours, math_score, history_score, physics_score,
#                                chemistry_score, biology_score, english_score, geography_score, total_score, average_score]])

#     # Scale features
#     scaled_features = scaler.transform(feature_array)
    
#     # Predict using the model
#     probabilities = model.predict_proba(scaled_features)
    
#     # Get top five predicted classes along with their probabilities
#     top_classes_idx = np.argsort(-probabilities[0])[:5]
#     top_classes_names_probs = [(class_names[idx], probabilities[0][idx]) for idx in top_classes_idx]
    
#     return top_classes_names_probs

# if __name__ == '__main__':
#     app.run(port=5001)











from flask import Flask, request, jsonify
import numpy as np
import joblib  # For loading the saved model and scaler

class_names = ['Lawyer', 'Doctor', 'Government Officer', 'Artist', 'Unknown',
               'Software Engineer', 'Teacher', 'Business Owner', 'Scientist',
               'Banker', 'Writer', 'Accountant', 'Designer',
               'Construction Engineer', 'Game Developer', 'Stock Investor',
               'Real Estate Developer']

app = Flask(__name__)

# Load model and scaler from files (make sure these files exist)
model = joblib.load('./models/model.pkl','rb')  # Replace with the actual path
scaler = joblib.load('./models/scaler.pkl','rb')  # Replace with the actual path

@app.route('/predict', methods=['POST'])
def recommendations():
    try:
        # Get data from the request
        data = request.json
        print(f"Received request data: {data}")  # Print incoming request data

        # Extract and convert data
        gender = data['gender']
        part_time_job = data['part_time_job']
        absence_days = int(data['absence_days'])  # Ensure it's an integer
        extracurricular_activities = data['extracurricular_activities']
        weekly_self_study_hours = float(data['weekly_self_study_hours'])  # Convert to float
        math_score = float(data['math_score'])  # Convert to float
        history_score = float(data['history_score'])  # Convert to float
        physics_score = float(data['physics_score'])  # Convert to float
        chemistry_score = float(data['chemistry_score'])  # Convert to float
        biology_score = float(data['biology_score'])  # Convert to float
        english_score = float(data['english_score'])  # Convert to float
        geography_score = float(data['geography_score'])  # Convert to float
        total_score = float(data['total_score'])  # Convert to float
        average_score = float(data['average_score'])  # Convert to float

        # Print the extracted and converted data
        print(f"Extracted data - Gender: {gender}, Part-time job: {part_time_job}, Absence days: {absence_days}, "
              f"Extracurricular activities: {extracurricular_activities}, Weekly self-study hours: {weekly_self_study_hours}, "
              f"Scores: Math({math_score}), History({history_score}), Physics({physics_score}), Chemistry({chemistry_score}), "
              f"Biology({biology_score}), English({english_score}), Geography({geography_score}), Total score: {total_score}, "
              f"Average score: {average_score}")

        # Get recommendations
        result = Recommendations(gender, part_time_job, absence_days, extracurricular_activities,
                                 weekly_self_study_hours, math_score, history_score, physics_score,
                                 chemistry_score, biology_score, english_score, geography_score,
                                 total_score, average_score)

        # Print the result before sending it
        print(f"Recommendation result: {result}")

        return jsonify(result)

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

def Recommendations(gender, part_time_job, absence_days, extracurricular_activities,
                    weekly_self_study_hours, math_score, history_score, physics_score,
                    chemistry_score, biology_score, english_score, geography_score,
                    total_score, average_score):
    # Encode categorical variables
    gender_encoded = 1 if gender.lower() == 'female' else 0
    part_time_job_encoded = 1 if part_time_job else 0
    extracurricular_activities_encoded = 1 if extracurricular_activities else 0

    # Create feature array
    feature_array = np.array([[gender_encoded, part_time_job_encoded, absence_days, extracurricular_activities_encoded,
                               weekly_self_study_hours, math_score, history_score, physics_score,
                               chemistry_score, biology_score, english_score, geography_score, total_score, average_score]])

    # Print the feature array
    print(f"Feature array: {feature_array}")

    # Scale features
    scaled_features = scaler.transform(feature_array)
    print(f"Scaled features: {scaled_features}")

    # Predict using the model
    probabilities = model.predict_proba(scaled_features)
    print(f"Prediction probabilities: {probabilities}")

    # Get top five predicted classes along with their probabilities
    top_classes_idx = np.argsort(-probabilities[0])[:5]
    top_classes_names_probs = [(class_names[idx], probabilities[0][idx]) for idx in top_classes_idx]

    return top_classes_names_probs

if __name__ == '__main__':
    app.run(port=5001)


