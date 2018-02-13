[0,1,2,3,4,5,6,7,8,9,10]

分三组
[[0,1,2,3]
[4,5,6,7]
[8,9,10]]

分四组
[[0,1,2]
[3,4,5]
[6,7,8]
[9,10]]

分两组
[[0,1,2,3,4,5]
[6,7,8,9,10]]


比如设置，长度为indexNum的数组，分隔为displayChart组

let computed = (indexNum, displayChart) => {
	let floorNum = Math.floor(indexNum / displayChart);
	let ceilNum = Math.ceil(indexNum / displayChart);

	// 获取长数组的长度，也就是以上的余数
	let moreLen = indexNum % displayChart;
	let lengthArr = new Array(moreLen).fill(ceilNum).concat(new Array(displayChart-moreLen).fill(floorNum));
	let start = 0;
	// 生成0...len的数组
	let indexNumArr = new Array(indexNum).fill('').map((item, index) => {
		return start++;
	});
	console.log("indexNumArr:", indexNumArr);
	let res = {};
	lengthArr.forEach((_item, _index) => {
		res[`key-${_index}`] = indexNumArr.splice(0, _item);
	});
	return res;
}
computed(50, 4);
computed(50, 8);

