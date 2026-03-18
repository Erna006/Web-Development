class Athlete:
    def __init__(self, name, age, experience_years):
        self.name = name
        self.age = age
        self.experience_years = experience_years

    def train(self):
        return f"{self.name} performs a general warm-up."

    def get_status(self):
        return "Beginner" if self.experience_years < 2 else "Proficient"

    def __str__(self):
        return f"Athlete: {self.name}, Age: {self.age}, Experience: {self.experience_years} years"

class Grappler(Athlete):
    def __init__(self, name, age, experience_years, belt_color):
        super().__init__(name, age, experience_years)
        self.belt_color = belt_color

    def train(self):
        return f"{self.name} practices grappling techniques."

    def spar(self):
        return f"{self.name} enters the mat for grappling sparring."

class Runner(Athlete):
    def __init__(self, name, age, experience_years, preferred_distance):
        super().__init__(name, age, experience_years)
        self.preferred_distance = preferred_distance

    def train(self):
        return f"{self.name} performs interval training on {self.preferred_distance}m."

    def check_pace(self):
        return f"Checking pace for {self.preferred_distance} meter distance."