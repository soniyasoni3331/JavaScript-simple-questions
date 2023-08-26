function generateOtp(){
    const maxnum=9999;
    const minnum=1000;
    const randomnumber=Math.floor(Math.random() *(maxnum-minnum+1)+minnum);
    return randomnumber;
};
console.log(generateOtp());