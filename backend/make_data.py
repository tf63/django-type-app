import json

filepath = "api/fixtures/problem_data.json" 
model = "api.problem"
language = "python"
length = "long"
text = """class Car:
    def __init__(self, make, model, year, color):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.speed = 0
    
    def accelerate(self, increment):
        self.speed += increment
    
    def brake(self, decrement):
        self.speed -= decrement
    
    def display_info(self):
        print(f"Make: {self.make}")
        print(f"Model: {self.model}")
        print(f"Year: {self.year}")
        print(f"Color: {self.color}")
        print(f"Speed: {self.speed} km/h")
"""

words = []
tab_counts = []
for i, w in enumerate(text.split("\n")):
    tab_count = 0
    w_striped = w.lstrip("\t")
    tab_count += len(w) - len(w_striped)
    w_striped = w.lstrip(" ")
    tab_count += int((len(w) - len(w_striped)) / 4)

    words.append(w_striped)
    tab_counts.append(tab_count)

# 追加するデータ
fields = {
    "language": language,
    "length": length,
    "words": words,
    "tab_counts": tab_counts
}

# JSONファイルの読み込み
with open(filepath, "r") as file:
    data = json.load(file)

if not data:
    max_pk = 0
else:
    max_pk = max(obj["pk"] for obj in data)

new_data = {
    "model": model,
    "pk": max_pk + 1,
    "fields": fields
}
data.append(new_data)

# JSONファイルへの保存
with open(filepath, "w") as file:
    json.dump(data, file, indent=4)