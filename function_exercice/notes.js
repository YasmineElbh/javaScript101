const students = [
    {
    namee: 'jjj',
    notes: [12, 19, 20, 10]
},
{
    namee: 'kkkk',
    notes: [14, 19, 10, 13]
}

]


const moyenne = (notes) =>
{
    let sum = 0
    for(let note of notes)
        sum = sum + note
     return sum / notes.length
   // console.log(sum / notes.length)
}
    for(let student of students)
        student.moyenne = moyenne(student.notes)
    console.log(students)
// moyenne([10,60])

