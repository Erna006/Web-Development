from models import Athlete, Grappler, Runner

def main():
    generic_athlete = Athlete("Alex", 20, 1)
    bjj_fighter = Grappler("Ali", 24, 5, "Purple")
    sprinter = Runner("Maria", 22, 3, 100)

    club_members = [generic_athlete, bjj_fighter, sprinter]

    print("Club Members and their training plans:")
    print("-" * 30)
    for member in club_members:
        print(member)

        print(f"Plan: {member.train()}")
        print(f"Status: {member.get_status()}")
        print("-" * 30)

    print("\nSpecial exercises:")
    print(bjj_fighter.spar())
    print(sprinter.check_pace())

if __name__ == "__main__":
    main()