const students=[
    {
        name:"Mithun",
        marks:95
    },
    {
        name:"Prabir",
        marks:92
    },
    {
        name:"Alka",
        marks:75
    },
    {
        name:"Shivam",
        marks:70
    },
    {
        name:"Farman",
        marks:99
    }
];

const checkResults=(userName)=>{
    for(let student of students){
            if(student.name === userName){
            return student.marks > 90 ? console.log (`Congratulations ${student.name}! You have cleared the exam.`)
            : console.log(`Sorry ! You have not cleared the exam.`);
        }  
      }
      console.log("Invalid User!");
}

checkResults("Shivam");
//output- Sorry ! You have not cleared the exam.
checkResults("Farman");
//output- Congratulations ! You have cleared the exam.

