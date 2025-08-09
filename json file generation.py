import pandas as pd
import json

# Load the Excel file
file_path = "all Train Data.xlsx"  # Make sure the file is in the same folder as this script
df = pd.read_excel(file_path)

# Generate JSON-like structure
json_data = []

for _, row in df.iterrows():
    entry = {
        "name": f"{row['Departure Station Code']} VandeBharat",
        "number": str(row['Train Number']),
        "from": f"{row['Departure Station']} {row['Departure Time']}",
        "to": f"{row['Arrival Station']} {row['Arrival Time']}",
        "fromIcon": "fa-city",
        "toIcon": "fa-landmark",
        "distance": row['Journey Distance'],
        "time": row['Journey Duration'],
        "days": "All Days"
    }
    json_data.append(entry)

# Save to JSON file
with open("vande_bharat_trains.json", "w") as f:
    json.dump(json_data, f, indent=2)

print("✅ JSON file created: vande_bharat_trains.json")
