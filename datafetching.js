function renderPrimeDominantRows(rows, columns, cellFn){
    for(let i=1 ; i<=rows ; i++){
        let row = '';
        let primeCount=0;
        let evenCount=0;
        let oddCount=0;
        let rowData = {
            rowIndex: i,
            cells: [],
            summary: { primeCount, evenCount, oddCount }
        };
        for(let j=1 ; j<=columns ; j++){


            const cell = cellFn(i,j);
            rowData.cells.push({
                    row: i,
                    column: j,
                    value: cell.value,
                    type: cell.type,
                 
            });

            if(cell.isPrime) primeCount++;
            if(cell.isEven) evenCount++;
            if(cell.isOdd) oddCount++;
        };
       const max =  primeCount > evenCount && primeCount > oddCount ? 'Prime' :
      evenCount > primeCount && evenCount > oddCount ? 'Even' :
      oddCount > primeCount && oddCount > evenCount ? 'Odd' : 'Mixed';

        rowData.summary = {
             primeCount, 
             evenCount, 
             oddCount,
             dominancetype:max
        };
        console.log(rowData);
    };
};


function cellFn(i,j){
    const sum = i+j;
    const counts = getCounts(sum);
    return  {
        value: i + j,
        type : getType(sum),
        ...counts
    };
};

function getCounts(sum){
    return {
        isPrime: isPrime(sum),
        isEven: isEven(sum),
        isOdd: isOdd(sum)
    }
}

function getType(sum){
        if(isPrime(sum)) return 'P';
        if(isEven(sum)) return 'E';
        return 'O';
};

renderPrimeDominantRows(5,5,cellFn);


