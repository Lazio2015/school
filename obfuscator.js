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
			return b.value - a.value;
		});
		
		return arr;
	}

	var objItems = countRepeatItems(array_elements);
	var sortArr  = sortObject(objItems);
	console.log('S', sortArr);
	
	var objObfuscator = {};
    var name;
	for (var i=0; i < sortArr.length; i++) {
        name = sortArr[i].name;
        generate(name, objObfuscator);
    }

    function generate(elem, obj) {
		var arr = []; 
		for (var i=0; i < elem.length; i++) {
			arr.push(elem[i].charCodeAt());
		}
		
		var num = parseInt(arr.join(''));
		obj[elem] = num.toString(30);
			
		return obj;
    }

	
	
    var lowerCharactersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var lowerCharactersStr = 'abcdefghijklmnopqrstuvwxyz';

    console.log('objObfuscator', objObfuscator);
};