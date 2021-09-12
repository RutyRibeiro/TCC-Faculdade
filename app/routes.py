from app.Controllers.GreenerysController import Greenery
import sys
sys.path.append('../')
from app import app
from flask_cors import CORS, cross_origin
from flask import request
from .Handlers.ResponseHandler import ResponseHandler
from .Controllers.UserController import User
from .Controllers.GreenerysController import Greenery
responseHandler = ResponseHandler()
user = User()
greenery= Greenery()
@app.route('/')

@app.route('/index')
def index():
    return "Server ok"

@app.route('/user/get', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type'])
def getUser():
    userEmail = request.headers.get('user-email') or False 
    if(userEmail == False):
        return responseHandler.error('Erro', 'Não foram enviadas as informações necessárias nos headers'), 400
    
    return  userEmail

@app.route('/user/register/', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def createUser():
    response = user.register(request.get_json())
    return response

@app.route('/user/login/', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def logUser():
    response = user.login(request.get_json())
    return response

@app.route('/user/modify/', methods=['PUT'])
@cross_origin(origin='*',headers=['Content-Type'])
def modifyUser():
    return 'O usuário foi alterado',300

@app.route('/user/retrieve/', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def retrieveUser():
    return 'Um email foi enviado para voc',300

@app.route('/plant/register', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def registerPlant():
    return 'A planta foi criada',201

@app.route('/plant/delete', methods=['DELETE'])
@cross_origin(origin='*',headers=['Content-Type'])
def deletePlant():
    return 'A planta foi deletada',200

@app.route('/plant/modify', methods=['PUT'])
@cross_origin(origin='*',headers=['Content-Type'])
def modifyPlant():
    return 'Planta alterada',200

@app.route('/greenery/get', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type'])
def getGreenery():
    userId = request.headers.get('user-id') or False 
    if(userId == False):
        return responseHandler.error('Erro', 'Não foram enviadas as informações de estufa necessárias nos headers'), 400
   
    return  greenery.getGreenerys(userId=userId)

@app.route('/greenery/modify', methods=['PUT'])
@cross_origin(origin='*',headers=['Content-Type'])
def modifyGreenery():
    response = greenery.modifyGreenery(request.get_json())
    return response




    

