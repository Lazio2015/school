/**
 * @param {Array} data – массив CSS классов
 */
function obfuscator(array_elements) {

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

    var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = ['!', '"', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

    function generate(elem, obj, index) {

        //obj[elem] = elem + lowerCharacters[index];
        //
        //return obj;
    }

    var sortArr = countRepeatItems(array_elements).sort(function(a,b){
        return b.count - a.count;
    });

    var objObfuscator = {};
    var name;
    for (var i=0; i < sortArr.length; i++) {
        name = sortArr[i].name;
        generate(name, objObfuscator, i);
    }
    console.log('objObfuscator', objObfuscator);
    //console.log(sortArr);
};