full_dot = '●'
empty_dot = '○'

def create_character(name, strength, intelligence, charisma):
    
    # verificando name
    if type(name) != str:
        return "The character name should be a string"
    if name == "":
        return "The character should have a name"
    if len(name) > 10:
        return "The character name is too long"
    if " " in name:
        return "The character name should not contain spaces"
    
    #verificando (strength, intelligence, charisma)
    if type(strength) != int or type(intelligence) != int or type(charisma) != int:
        return "All stats should be integers"
    
    #limites atributos
    if  strength < 1 or intelligence < 1 or charisma < 1:
        return "All stats should be no less than 1"
    if strength > 4 or intelligence > 4 or charisma > 4:
        return "All stats should be no more than 4"
    
    #Verificando soma dos atributos
    if strength + intelligence + charisma != 7:
        return "The character should start with 7 points"
    
    # retorno da ficha do funcionário
    linha_str = "STR " + ("●" * strength) + ("○" * (10 - strength))
    linha_int = "INT " + ("●" * intelligence) + ("○" * (10 - intelligence))
    linha_cha = "CHA " + ("●" * charisma) + ("○" * (10 - charisma))

    return f"{name}\n{linha_str}\n{linha_int}\n{linha_cha}"