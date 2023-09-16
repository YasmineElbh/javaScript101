function getRandom(max)
{
    return Math.floor(Math.random() * (max + 1))
}
const solution = getRandom(10)
console.log(solution)

function isRight(n)
{
    return solution === n
}
function guess()
{
    const number = prompt('entrer un nombre entre 0 et 10')
    return isRight(number)

}
for(i = 0; i < 3; i++)
{
    if(guess())
    {
        console.log('bravo')
    }
    else
        console.log('vous avez perdu')
}