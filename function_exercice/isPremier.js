//isPremier:divise par 1 ou lui meme

function isPremier(n)
{
    for(let i = n - 1; i > 1; i--)
    {
        if(n % 1 === 0 || n < 2)
            return false;           
    }
    return true;
}
console.log(isPremier(10))
console.log(isPremier(12))
console.log(isPremier(0))
console.log(isPremier(1))
console.log(isPremier(2))
console.log(isPremier(3))
console.log(isPremier(4))
