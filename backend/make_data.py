import json

filepath = "api/fixtures/problem_data.json" 
model = "api.problem"
language = "python"
length = "medium" # short, medium, long
text = """class BankAccount:
    def __init__(self, account_number, account_holder, initial_balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = initial_balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"{self.account_holder}さんの口座に{amount}円入金しました。")
    
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"{self.account_holder}さんの口座から{amount}円引き出しました。")
        else:
            print("残高が不足しています。")
    
    def check_balance(self):
        print(f"{self.account_holder}さんの口座残高は{self.balance}円です。")

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