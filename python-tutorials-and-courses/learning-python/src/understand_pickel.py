import pickle

name = ["mohit", "bhaskar", "manish"]
skill = ["python", "python", "java"]

pickle_file = open("data/emp1.dat", "wb")
pickle.dump(name, pickle_file)
pickle.dump(skill, pickle_file)
pickle_file.close()


pickle_file = open("data/emp1.dat", "rb")
name_list = pickle.load(pickle_file)
skill_list = pickle.load(pickle_file)
pickle_file.close()

print(name_list, "\n", skill_list)
