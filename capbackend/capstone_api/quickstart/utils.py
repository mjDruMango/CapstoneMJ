from PIL import Image

def ConvertToBinary(text_data):
    return ''.join(format(ord(char), '08b') for char in text_data)
    
#^^^ converts text from user input into 8-bit binary format

def TextEncryption(image_path, text_data):
    image = Image.open(image_path)
    text_binary = ConvertToBinary(text_data)
    
    text_index = 0
    image_data = list(image.getdata())
    
    for i in range(len(image_data)):
        pixel = list(image_data[i])
        
        for j in range(3):
            if text_index < len(text_binary):
                pixel[j] = pixel[j] & ~1 | int(text_binary[text_index])
                text_index += 1
        image_data[i] = tuple(pixel)

    stego_image = Image.new(image.mode, image.size)
    stego_image.putdata(image_data)
    stego_image.save('stego_image.png')

def TextDecryption(image_path):
    return()