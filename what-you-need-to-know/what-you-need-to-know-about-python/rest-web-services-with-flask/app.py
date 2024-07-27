from flask import Flask, jsonify

app = Flask(__name__)

todos = [
    {
        'id': 1,
        'title': 'Learn Python',
        'description': 'Learn Python',
        'done': False
    },
    {
        'id': 2,
        'title': 'Learn Flask',
        'description': 'Learn Flask',
        'done': False
    }
]


@app.route('/python_book/v1.0/todo', methods=['GET'])
def get_list():
    return jsonify({'todos': todos})


if __name__ == '__main__':
    app.run(debug=True)
