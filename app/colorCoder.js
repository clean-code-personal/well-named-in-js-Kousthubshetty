
const majorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const minorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function colorPair(){
    this.majorColor;
    this.minorColor;
}

colorPair.prototype.toString=function(){
	return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
}

function getColorFromPairNumber(pairNumber){
	let minorSize = majorColorNames.length;
	let majorSize = minorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new colorPair();
	pair.majorColor = majorColorNames[majorIndex];
	pair.minorColor = minorColorNames[minorIndex];
	return pair;
}

function getPairNumberFromColor(pair){
    let majorIndex=majorColorNames.indexOf(pair.majorColor)
    let minorIndex=minorColorNames.indexOf(pair.minorColor)

    if (majorIndex == -1 || minorIndex == -1)
    {
        throw `Unknown Colors:${pair.toString()}`;
    }
    return (majorIndex * minorColorNames.length) + (minorIndex + 1);
}

function getAllPairs(){
    let pairCount=1
    
    for (let majorColor of majorColorNames){
        for (let minorColor of minorColorNames){
            console.log(`Pair Number[${pairCount}]: {${majorColor},${minorColor}}`)
            pairCount++;
        }
    }
}

function test(){
    pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "SLATE");
        
    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "VIOLET");
    console.assert(testPair1.minorColor == "GREEN");
        
    let testPair2 = new colorPair();
    testPair2.majorColor="YELLOW";
    testPair2. minorColor ="GREEN";
    pairNumber =getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber==18);

    testPair2 = new colorPair();
    testPair2.majorColor="RED";
    testPair2. minorColor ="BLUE";
    pairNumber =getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber==6);
}
getAllPairs(); 
test();
