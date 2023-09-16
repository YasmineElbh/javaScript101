// kayak
// sos 
function isPalindrom(value)
{
    const word = value.split('').reverse('').join('')
    return value.toUpperCase() === word.toUpperCase()
}

//test
const words = {
    kayak: true,
    sos: true,
    bonjour: false,
}
for(let wordss in words)
{
    if(isPalindrom(wordss) !== wordss[word])
    {
        console.error(`isPalindrom($(word)`)
    }
}