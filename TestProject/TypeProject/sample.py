text = """class BankAccount:
    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"{self.name}さんの口座に{amount}円を預けました。残高は{self.balance}円です。")
    
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"{self.name}さんの口座から{amount}円を引き出しました。残高は{self.balance}円です。")
        else:
            print(f"残高不足です。{self.name}さんの口座には{self.balance}円しかありません。")
    
    def check_balance(self):
        print(f"{self.name}さんの残高は{self.balance}円です。")
"""

print(text.split("\n"))
