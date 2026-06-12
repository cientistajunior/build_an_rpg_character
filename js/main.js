const inputName = document.getElementById('name');
const inputStrength = document.getElementById('strength');
const inputIntelligence = document.getElementById('intelligence');
const inputCharisma = document.getElementById('charisma');
const btnCreate = document.getElementById('btn-create');
const preResult = document.getElementById('result');

btnCreate.addEventListener('click', () => {
    const nameValue = inputName.value;
    const strengthValue = parseInt(inputStrength.value);
    const intelligenceValue = parseInt(inputIntelligence.value);
    const charismaValue = parseInt(inputCharisma.value);

    const resultadoFinal = create_character(nameValue, strengthValue, intelligenceValue, charismaValue);

    // 2. Joga esse resultado na tela do usuário dentro do <pre id="result">
    preResult.innerText = resultadoFinal;
})

const fullDot = '●';
const emptyDot = '○';

function create_character(name, strength, intelligence, charisma){

    /*verificando name*/ 
    if (typeof name !== 'string')
        return "The character name should be a string";
    if (name === "")
        return "The character should have a name";
    if (name.length > 10)
        return "The character name is too long";
    if (name.includes(" "))
        return "The character name should not contain spaces";
    
    /*verificando (strength, intelligence, charisma)*/
    if (typeof strength !== 'number' || typeof intelligence !== 'number' || typeof    charisma !== 'number')
        return "All stats should be integers";
    
    /*#limites atributos*/
    if  (strength < 1 || intelligence < 1 || charisma < 1)
        return "All stats should be no less than 1";
    if (strength > 4 || intelligence > 4 || charisma > 4)
        return "All stats should be no more than 4";
    
    /*Verificando soma dos atributos*/
    if (strength + intelligence + charisma !== 7)
        return "The character should start with 7 points";
    
    /*retorno da ficha do personagem*/
    const linhaStr = "STR " + fullDot.repeat(strength) + emptyDot.repeat(10 - strength);
    const linhaInt = "INT " + fullDot.repeat(intelligence) + emptyDot.repeat(10 - intelligence);
    const linhaCha = "CHA " + fullDot.repeat(charisma) + emptyDot.repeat(10 - charisma);

    return `${name}\n${linhaStr}\n${linhaInt}\n${linhaCha}`;
};
    