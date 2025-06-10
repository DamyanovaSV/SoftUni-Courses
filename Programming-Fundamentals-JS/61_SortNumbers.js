function sortNumbers(n1, n2, n3){
    let first = n1;
    let second = n2;
    let third = n3;
    let temp = 0;

    for (i = 1; i < 3; i++){
        if (first < second){
            temp = first;
            first = second;
            second = temp;
        } 
        if (second < third){
            temp = second;
            second = third;
            third = temp;
        }
    }
    console.log(first);
    console.log(second);
    console.log(third);

}
sortNumbers(0,0,2)