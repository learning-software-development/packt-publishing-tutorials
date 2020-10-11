def write_file():
    file_input = open("data/game_types.txt", 'w')

    data = ["computer game", "board games", "mobile games"]

    file_input.writelines(data)
    file_input.close()

if __name__ == "__main__":
    write_file()
