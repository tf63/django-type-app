import json
from api.utils import get_words_tabs, update_fixture

filename = "problem_data.json" 
modelname = "api.problem"
language = "typescript"
length = "medium" # short, medium, long
text = """interface Dress {
    getColor(): string
    getSize(): string
}

class Clothing implements Dress {
    constructor(private color: string, private size: string) {}

    getColor(): string {
        return this.color
    }

    getSize(): string {
        return this.size
    }
}

class Shirt extends Clothing {
    getStyle(): string {
        return "Casual"
    }
}

class DressShirt extends Shirt {
    getStyle(): string {
        return "Formal"
    }
}

class Pants extends Clothing {
    getStyle(): string {
        return "Casual"
    }
}
"""

words, tab_counts = get_words_tabs(text=text)

# 追加するデータ
fields = {
        "language": language,
        "length": length,
        "words": words,
        "tab_counts": tab_counts
}

update_fixture(fields=fields, filename=filename, modelname=modelname)
