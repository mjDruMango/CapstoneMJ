from PIL import Image
from io import BytesIO
import random

#Converts text from user input into 8-bit binary format
def ConvertToBinary(text_data):
    return ''.join(format(ord(char), '08b') for char in text_data)

#LSB encryption
def TextEncryption(image_path, text_data, start_x=None, start_y=None):
    image = Image.open(image_path)
    text_binary = ConvertToBinary(text_data)
    
#Randomize the starting pixel for the message
    if start_x is None:
        start_x = random.randint(0, image.width - 1)
    if start_y is None:
        start_y = random.randint(0, image.height - 1)
    
    text_index = 0
    image_data = list(image.getdata())
    
    for i in range(len(image_data)):
        pixel = list(image_data[i])
        
        for j in range(3):
            if text_index < len(text_binary):
                pixel[j] = pixel[j] & ~1 | int(text_binary[text_index])
                text_index += 1
        image_data[i] = tuple(pixel)

    bytesIO = BytesIO()
    
    stego_image = Image.new(image.mode, image.size)
    stego_image.putdata(image_data)
    stego_image.save(bytesIO, format='PNG')
    imageData = bytesIO.getvalue()
    return imageData
    #stego_image.save('stego_image.png')

def TextDecryption(image_data):
    
    #image_data = list(image.getdata())???
    
    encrypted_image = Image.open(BytesIO(image_data))
    
    width, height = encrypted_image.size
    
    binary = ""
    for y in range(height):
        for x in range(width):
            pixel = encrypted_image.getpixel((x, y))
            for color in pixel[:3]:
                binary += str(color & 1)
    
    message = ""
    for i in range(0, len(binary), 8):
        byte = binary[i:i+8]
        message += chr(int(byte, 2))
    
    return message