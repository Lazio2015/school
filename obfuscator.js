/**
 * @param {Array} data – массив CSS классов
 */
function obfuscator(array_elements) {
/*
    function countRepeatItems(arr) {
        var result = [];
        var current;
        var isExist = false;
        var data = null;

        for (var i=0; i < arr.length; i++) {
            current = arr[i];
            data = {
                name: current,
                count: 1
            };
            if (result.length > 0) {
                for (var j=0; j < result.length; j++) {
                    if (result[j].name == current) {
                        result[j].count++;
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    result.push(data);
                }
            } else {
                result.push(data);
            }
            isExist = false;
        }

        return result;
    }
	
	var sortArr = countRepeatItems(array_elements).sort(function(a,b){
		return b.count - a.count;
    });
	*/
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';

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

	var objItems = countRepeatItems(array_elements);
	var sortArr  = sortObject(objItems);
	console.log('S', sortArr);
	
	var objObfuscator = {};
    var result =[];
	var str = '';
	for (var i=0; i < sortArr.length; i++) {
		var name = sortArr[i].name;
		result = generate(i, 4);
		console.log('result', result.join(''));
		for(var j=0; j< result.length; j++) {
			var index = result[j];
			str = str + alphabet[index];
		}

		objObfuscator[name] = str;
		result = [];
		str = '';
    }

	console.log('objObfuscator', objObfuscator);

	function generate(i, limit) {
		//if (i == 0) {
		//	return;
		//}

		var div = Math.floor(i/limit);
		var mod = i % limit;

		return (div>0 ? generate(div - 1, limit) : []).concat(mod);
		/*
		var d = Math.floor(num / lim);
		var m = num % lim;

		return (d > 0 ? generate(d - 1, lim) : []).concat([m]);
		*/

	}
};