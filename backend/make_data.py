import json

filepath = "api/fixtures/problem_data.json" 
model = "api.problem"
language = "typescript"
length = "long" # short, medium, long
text = """interface Animal {
    eat(): void
    sleep(): void
}

class Dog implements Animal {
    constructor(private name: string) {}

    eat(): void {
        console.log(this.name, "is eating.")
    }

    sleep(): void {
        console.log(this.name, "is sleeping.")
    }
}

class Cat implements Animal {
    constructor(private name: string) {}

    eat(): void {
        console.log(this.name, "is eating.")
    }

    sleep(): void {
        console.log(this.name, "is sleeping.")
    }
}

const dog: Animal = new Dog("Max")
const cat: Animal = new Cat("Whiskers")

const animals: Animal[] = [dog, cat]

animals.forEach((animal) => {
    animal.eat()
    animal.sleep()
    console.log()
})
"""

words = []
tab_counts = []
for i, w in enumerate(text.split("\n")):
    tab_count = 0
    w_striped = w.lstrip("\t")
    tab_count += len(w) - len(w_striped)
    w_striped = w_striped.lstrip(" ")
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