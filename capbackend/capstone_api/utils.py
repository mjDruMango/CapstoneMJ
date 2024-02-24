from PIL import Image
from io import BytesIO
import random

#Converts text from user input into 8-bit binary format
def ConvertToBinary(text_data):
    return ''.join(format(ord(char), '08b') for char in text_data)

#LSB encryption
def TextEncryption(image_path, text_data, start_x=None, start_y=None):

#Add delimiter to the end of message
    text_data = text_data + "*&^%"
    #Test
    print(text_data)
    
#Open image and convert message to binary
    image = Image.open(image_path)
    text_binary = ConvertToBinary(text_data)
    
#Randomize the starting pixel for the message
    if start_x is None:
        start_x = random.randint(0, image.width - 1)
    if start_y is None:
        start_y = random.randint(0, image.height - 1)

#Start at the beginning of message  
    text_index = 0
    image_data = list(image.getdata())

#Iterate through pixels and replace LSB with message
    for i in range(len(image_data)):
        pixel = list(image_data[i])
        
        for j in range(3):
            if text_index < len(text_binary):
                pixel[j] = pixel[j] & ~1 | int(text_binary[text_index])
                text_index += 1
        image_data[i] = tuple(pixel)

    bytesIO = BytesIO()

#Create the new encrypted image and save as PNG   
    stego_image = Image.new(image.mode, image.size)
    stego_image.putdata(image_data)
    stego_image.save(bytesIO, format='PNG')
    imageData = bytesIO.getvalue()
    return imageData

#LSB Decryption
def TextDecryption(image_path):

#Open image in binary 
    encrypted_image = Image.open(BytesIO(image_path.read()))
    width, height = encrypted_image.size
    
    binary = ""
    message = ""
    end_marker = "*&^%"

#Iterate through image to get RGB values  
    for y in range(height):
        for x in range(width):
            pixel = encrypted_image.getpixel((x, y))
            for color in pixel[:3]:
                binary += str(color & 1)

#Grab message from image and return message back to characters
    for i in range(0, len(binary), 8):
        byte = binary[i:i+8]
        message += chr(int(byte, 2))

#Use of delimiter        
    message = message.split(end_marker)[0];
    
    return message

def VigenereEncrypt(text_data, key):
    #store text and set key index
    encrypted_text = ""
    index = 0
    
    #loop through and check text
    for char in text_data:
        if char.isalpha(): #Check if characters in message is alphabetic
            shift = ord(key[index % len(key)].upper()) - ord('A')
            
            if char.isupper():
                encrypted_text += chr((ord(char) + shift - ord('A')) % 26 + ord('A'))
            
            elif char.islower():
                encrypted_text += chr((ord(char) + shift - ord('a')) % 26 + ord('a'))
            index += 1
        else:
            encrypted_text += char #Append special characters and spaces back to message
    return encrypted_text

def VigenereDecrypt(text_data, key):
    #store text and set key index
    decrypted_text = ""
    index = 0
    
    #loop through and check text
    for char in text_data:
        if char.isalpha(): #Check if character in message is alphabetic
            shift = ord(key[index % len(key)].upper()) - ord('A')
            
            if char.isupper():
                decrypted_text += chr((ord(char) - shift - ord('A')) % 26 + ord('A'))
            
            elif char.islower():
                decrypted_text += chr((ord(char) - shift - ord('a')) % 26 + ord('a'))
            index += 1
        else:
            decrypted_text += char #Append special characters and spaces back to message
    
    return decrypted_text

#bacon was here

def CaesarEncrypt(text_data, shift):
    #store text
    encrypted_text = ""
    
    for char in text_data:
        if char.isalpha(): #Check if character in message is alphabetic
            if char.isupper():
                #65 and 97 are for ASCII codes to get to upper and lowercase
                encrypted_text += chr(((ord(char) - 65 + shift) % 26) + 65)
            else:
                encrypted_text += chr(((ord(char) - 97 + shift) % 26) + 97)
    
        else:
            encrypted_text += char #Append special characters and spaces back to message
    return encrypted_text

def CaesarDecrypt(text_data, shift):
    #store text
    decrypted_text = ""
    
    for char in text_data:
        if char.isalpha(): #Check if character in message is alphabetic
            if char.isupper():
                #65 and 97 are for ASCII codes to get to upper and lowercase
                decrypted_text += chr(((ord(char) - 65 - shift) % 26) + 65)
            else:
                decrypted_text += chr(((ord(char) - 97 - shift) % 26) + 97)
    
        else:
            decrypted_text += char #Append special characters and spaces back to message
    return decrypted_text