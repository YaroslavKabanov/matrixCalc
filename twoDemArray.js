// test commit

var mtx1 = [[1,2,3],[4,5,6],[7,8,9]]; 
var mtx2 = [[1,1,1],[1,1,1],[1,1,1]]; 

// function that creates new empty array
var newArray = function (matrixSize) {
 	var matrixResult = [];
		for (var k = 0; k < matrixSize; k++){
	    	matrixResult[k] = [];
	   	    	for (var m = 0; m < matrixSize; m++){
			       	matrixResult[k][m] = 0;
			}
		}
		return matrixResult;
	}	



// function that adds two matrix 
var matrixSum = function (matrix1, matrix2) {
	matrixResult = newArray(matrix1.length); // creating new empty array
		for (var i = 0; i < matrix1.length; i++) {
			for (var j = 0; j < matrix1.length; j++) {
				matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];

			}
		}
		return matrixResult;
	}

// function checks if two matrixes are equal 
var matrixEqual = function (matrix1, matrix2) {
	if (!!matrix1 && !!matrix2) {
			for (var i = 0; i < matrix1.length; i++) {
				for (var j = 0; j < matrix1.length; j++) {
					if (matrix1[i][j] !== matrix2 [i][j]) {
						return false;
				}
			}
		}
	} else {
		return false;
	}
	return true;
}

// test 1
var matrixSumTest1 = function () {
	var mtx1 = [[1,2,3],[4,5,6],[7,8,9]]; 
	var mtx2 = [[1,1,1],[1,1,1],[1,1,1]]; 
	var mtxResult = [[2,3,4],[5,6,7],[8,9,10]]; 

	var sum = matrixSum(mtx1,mtx2);


	if (matrixEqual(sum,mtxResult)){
		console.log("Passed test 1");
		} else {
			console.log("Failed test 1");
		}
}


var matrixSumTest2 = function () {
	var mtx3 = [[-10,-20,-30,-31],[-40,-50,-60,-61],[-70,-80,-90,-91],[-100,-110,-120,-121]];
	var mtx4 = [[10,20,30,32],[40,50,60,62],[70,80,90,92],[100,110,120,122]];
	var mtxResult2 = [[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]];

	var sum = matrixSum(mtx3,mtx4);


	if (matrixEqual(sum,mtxResult2)){
		console.log("Passed test 2");
		} else {
			console.log("Failed test 2");
		}
}



matrixSumTest1();
matrixSumTest2();

