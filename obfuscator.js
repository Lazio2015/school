/**
 * @param {Array} data – массив CSS классов
 */
function obfuscator(array_elements) {

	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var objObfuscator = {};

	function countRepeatItems(arr) {		
		var data = {};
		var prop;

        for (var i=0; i < arr.length; i++) {
			prop = arr[i];
			if (prop in data) {
				data[prop]++;
			} else {
				data[prop] = 1;
			}
		}
		
        return data;
    }
	
	function sortObject(obj) {
		var arr = [];
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				arr.push({
					'name': prop,
					'count': obj[prop]
				});
			}
		}
		arr.sort(function(a, b) {
			return b.count - a.count;
		});
		
		return arr;
	}

	function generate(i, limit) {
		var div = Math.floor(i/limit);
		var mod = i % limit;

		return (div>0 ? generate(div - 1, limit) : []).concat(mod);
	}

	var objItems = countRepeatItems(array_elements);
	var sortArr  = sortObject(objItems);

	for (var i=0; i < sortArr.length; i++) {
		var name = sortArr[i].name;
		var result = generate(i, 4);
		var str = '';

		for(var j=0; j< result.length; j++) {
			var index = result[j];
			str = str + alphabet[index];
		}

		objObfuscator[name] = str;
    }

	console.log('Sort', sortArr);
	console.log('objObfuscator', objObfuscator);
};