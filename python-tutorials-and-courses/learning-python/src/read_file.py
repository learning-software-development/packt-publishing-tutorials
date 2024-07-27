def read_file():
    file_input = open("data/file_input_data.txt", 'r')
    file_data = file_input.readlines()
    file_input.close()
    return file_data


if __name__ == "__main__":
    data = read_file()
    print(type(data))
    print(data)
    for line in data:
        print(line)
