// test commit

var mtx1 = [[1,2,3],[4,5,6],[7,8,9]]; 
var mtx2 = [[1,1,1],[1,1,1],[1,1,1]]; 

var matrix1 = [[1,2,3],[4,5,6],[7,8,9]]; 


var matrixSum = function (matrix1, matrix2) {
	for (var i = 0; i < matrix1.length; i++) {
		for (var j = 0; j < matrix1.length; j++) {
			 matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];

			 var matrixResult = [];
				for (var k = 0; k < matrix1.length; k++){
			    	matrixResult[k] = [];
			    	for (var m = 0; m < matrix1.length; m++){
			        	matrixResult[k][m] = 0;
			}}
		}
	}
	return matrixResult;
}

matrixSum(mtx1,mtx2);

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


var matrixSumTest1 = function () {
	var mtx1 = [[1,2,3],[4,5,6],[7,8,9]]; 
	var mtx2 = [[1,1,1],[1,1,1],[1,1,1]]; 
	var mtxResult = [[2,3,4],[5,6,7],[8,9,10]]; 

	var sum = matrixSum(mtx1,mtx2);


	if (matrixEqual(sum,mtxResult)){
		console.log("Passed");
		} else {
			console.log("Failed");
		}
}



matrixSumTest1();



